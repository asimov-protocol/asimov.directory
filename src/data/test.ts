export const testJson = {
  nodes: [
    {
      id: 'n1',
      label: 'Albert Einstein',
      type: 'Person',
      properties: {
        born: '1879',
        died: '1955',
        occupation: 'Physicist',
      },
    },
    {
      id: 'n2',
      label: 'Theory of Relativity',
      type: 'Concept',
    },
    {
      id: 'n3',
      label: 'Physics',
      type: 'Domain',
    },
    {
      id: 'n4',
      label: 'E=mc²',
      type: 'Equation',
      properties: {
        description: 'Mass-energy equivalence',
      },
    },
    {
      id: 'n5',
      label: 'Photoelectric Effect',
      type: 'Concept',
    },
    {
      id: 'n6',
      label: 'Nobel Prize in Physics',
      type: 'Award',
      properties: {
        year: '1921',
      },
    },
    {
      id: 'n7',
      label: 'Brownian Motion',
      type: 'Concept',
    },
  ],
  edges: [
    {
      source: 'n1',
      target: 'n2',
      relation: 'developed',
    },
    {
      source: 'n2',
      target: 'n3',
      relation: 'belongs to',
    },
    {
      source: 'n1',
      target: 'n4',
      relation: 'formulated',
    },
    {
      source: 'n4',
      target: 'n2',
      relation: 'part of',
    },
    {
      source: 'n1',
      target: 'n5',
      relation: 'explained',
    },
    {
      source: 'n5',
      target: 'n3',
      relation: 'belongs to',
    },
    {
      source: 'n1',
      target: 'n6',
      relation: 'awarded',
    },
    {
      source: 'n6',
      target: 'n5',
      relation: 'for',
    },
    {
      source: 'n1',
      target: 'n7',
      relation: 'explained',
    },
    {
      source: 'n7',
      target: 'n3',
      relation: 'belongs to',
    },
  ],
};
