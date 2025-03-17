'use client';

import React, { useEffect, useRef } from 'react';
import { DataSet } from 'vis-data';
import { Timeline, TimelineOptions, TimelineItem } from 'vis-timeline/esnext';
import { isDateLikeField } from '@/utils';

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
      const dateField = Object.values(row).find((field) =>
        isDateLikeField(field),
      );

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bindings = sparqlData ?? [];
    const items = transformBindingsToVisItems(bindings);
    if (!items.length) return;

    const dataSet = new DataSet(items);

    const options: TimelineOptions = {
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

    return () => {
      if (timelineInstance) {
        timelineInstance.destroy();
      }
    };
  }, [sparqlData]);

  return (
    <div className="border-0">
      <div ref={containerRef} className="timeline-container h-lvh border-0" />
      {!sparqlData?.length && <div>No valid timeline data found.</div>}
    </div>
  );
};

export default TimelineView;
