import { Canvas } from '@react-three/fiber';
import { TrackballControls } from '@react-three/drei';
import { useMemo, useState } from 'react';
import ForceGraphViz from './ForceGraphViz';
// import testGraphData from '../../data/graph.json';

const genRandomTree = (N = 300, reverse = false) => {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  };
};

const GraphView = () => {
  const [activeNode, setActiveNode] = useState<{ id: number | string } | null>(
    null,
  );
  const graphData = useMemo(() => genRandomTree(100, true), []);

  return (
    <div className="relative h-svh">
      {activeNode && (
        <div className="absolute inset-0 p-4 text-white pointer-events-none">
          <p>Selected node: {activeNode?.id}</p>
        </div>
      )}

      <Canvas flat camera={{ position: [0, 0, 180], far: 5000 }}>
        <TrackballControls />
        <ambientLight color={0xcccccc} intensity={Math.PI} />
        <directionalLight intensity={0.6 * Math.PI} />

        <ForceGraphViz
          graphData={graphData}
          onClick={setActiveNode}
          activeNode={activeNode}
        />
      </Canvas>
    </div>
  );
};

export default GraphView;
