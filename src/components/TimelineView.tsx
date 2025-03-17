'use client';

import React, { useEffect, useRef } from 'react';
import { DataSet } from 'vis-data';
import { Timeline, TimelineOptions, TimelineItem } from 'vis-timeline/esnext';

import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

interface WikidataValue {
  type: string;
  datatype?: string;
  value: string;
}

interface Row {
  title?: WikidataValue;
}

interface TimelineViewProps {
  sparqlData?: Row[];
}

/**
 * Transform SPARQL bindings into vis-timeline items.
 * Each item: { id, content, start, (optional) end, etc. }
 */
function transformBindingsToVisItems(bindings: Row[]): TimelineItem[] {
  return bindings
    .map((row, index) => {
      const dateField = Object.values(row).find((field) => {
        if (field && typeof field === 'object' && field.type === 'literal') {
          if (
            field.datatype &&
            (field.datatype.includes('dateTime') ||
              field.datatype.includes('date'))
          ) {
            const testDate = new Date(field.value);
            return !isNaN(testDate.getTime());
          }

          if (/^\d{4}$/.test(field.value)) {
            const testDate = new Date(`${field.value}-01-01`);
            return !isNaN(testDate.getTime());
          }
        }

        return false;
      });

      if (!dateField) {
        return null;
      }

      let dateValue: Date;
      if (/^\d{4}$/.test(dateField.value)) {
        dateValue = new Date(`${dateField.value}-01-01`);
      } else {
        dateValue = new Date(dateField.value);
      }

      if (isNaN(dateValue.getTime())) {
        return null;
      }

      const title = row.title?.value || '(No title)';

      return {
        id: index + 1,
        content: title,
        start: dateValue,
      } as TimelineItem;
    })
    .filter((item): item is TimelineItem => item !== null);
}

const TimelineView: React.FC<TimelineViewProps> = ({ sparqlData }) => {
  // A ref for the container div where the timeline will be rendered
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If sparqlData is the entire JSON, you'd do:
    // const bindings = sparqlData?.data?.results?.bindings ?? [];
    const bindings = sparqlData ?? [];

    // Convert the SPARQL data to vis items
    const items = transformBindingsToVisItems(bindings);
    if (!items.length) return;

    // Create a DataSet and the Timeline
    const dataSet = new DataSet(items);

    const options: TimelineOptions = {
      // Additional timeline options
      selectable: true,
      // For more config, see: https://visjs.github.io/vis-timeline/docs/timeline/
    };

    let timelineInstance: Timeline | null = null;
    if (containerRef.current) {
      timelineInstance = new Timeline(
        containerRef.current,
        dataSet as any,
        options,
      );
    }

    // Cleanup on unmount
    return () => {
      if (timelineInstance) {
        timelineInstance.destroy();
      }
    };
  }, [sparqlData]);

  return (
    <div className="border-0">
      {/* The timeline gets drawn in this container */}
      <div ref={containerRef} className="timeline-container h-lvh border-0" />
      {!sparqlData?.length && <div>No valid timeline data found.</div>}
    </div>
  );
};

export default TimelineView;
