/* eslint-disable react/no-unescaped-entities */
'use client';

import { useTabContext } from '@/context/TabsContext';

const OverviewSection = () => {
  const { activeTab } = useTabContext();

  if (activeTab !== 'overview') {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="text-gray-400">
        This dataset provides a structured representation of information related
        to Albert Einstein, his scientific contributions, and related concepts
        in physics.
      </p>
      <p className="text-gray-400">
        The dataset graph captures key aspects of Einstein&#39;s life and work,
        including: Biographical information: Birth date, death date, occupation.
        Key concepts: Theory of Relativity, Photoelectric Effect, Brownian
        Motion, E=mc² (mass-energy equivalence). Awards: Nobel Prize in Physics
        (1921). Relationships: Connections between Einstein, the concepts he
        developed or explained, the field of physics, and his Nobel Prize.
      </p>

      <h2 className="text-2xl font-semibold">Structure</h2>
      <p className="text-gray-400">
        The dataset is represented in JSON format, consisting of two main
        components: Nodes: Represent entities (people, concepts, awards) with
        properties like labels, types, and additional attributes. Edges:
        Represent relationships between nodes, indicating connections like
        "developed," "belongs to," "formulated," "explained," and "awarded."
      </p>
    </div>
  );
};

export default OverviewSection;
