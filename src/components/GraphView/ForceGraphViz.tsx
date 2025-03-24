import React, { useMemo, useState, useCallback, useRef } from 'react';
import R3fForceGraph from 'r3f-forcegraph';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const createTextSprite = (
  text: string,
  opts: { fontsize?: number; color?: string } = {},
) => {
  const { fontsize = 24, color = '#ffffff' } = opts;
  const fontface = 'Arial';

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.font = `${fontsize}px ${fontface}`;
  const textWidth = ctx.measureText(text).width;

  canvas.width = textWidth;
  canvas.height = fontsize * 1.4;

  const ctx2 = canvas.getContext('2d');
  if (!ctx2) return null;
  ctx2.font = `${fontsize}px ${fontface}`;
  ctx2.fillStyle = color;
  ctx2.fillText(text, 0, fontsize);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(canvas.width / 15, canvas.height / 15, 1);
  return sprite;
};

export type GraphData = { nodes: any[]; links: any[] };

export type ForceGraphVizProps = {
  graphData: GraphData;
  activeNode?: any;
  onClick?: (node: any) => void;
  rootId?: string;
};

const ForceGraphViz = ({
  graphData,
  activeNode,
  onClick,
  rootId: propRootId,
}: ForceGraphVizProps) => {
  const fgRef = useRef<any>(null);
  useFrame(() => fgRef.current?.tickFrame());

  // If no root is provided, default to the first node's id (if any)
  const rootId =
    propRootId || (graphData.nodes[0] ? graphData.nodes[0].id : '');

  // Build a lookup for nodes by their id (string keys)
  const nodesById = useMemo(() => {
    const map = Object.fromEntries(
      graphData.nodes.map((node) => [node.id, node]),
    );
    // Set initial collapse state: root stays expanded, others collapse.
    graphData.nodes.forEach((node) => {
      node.collapsed = node.id !== rootId;
      node.childLinks = [];
    });
    // For each link, push it to the source node's childLinks.
    graphData.links.forEach((link) => {
      // Assumes link.source is already a string matching node.id.
      if (map[link.source]) {
        map[link.source].childLinks.push(link);
      }
    });
    return map;
  }, [graphData, rootId]);

  // Build pruned tree for collapsible logic.
  const getPrunedTree = useCallback(() => {
    const visibleNodes = [];
    const visibleLinks = [];

    (function traverseTree(node = nodesById[rootId]) {
      if (!node) return;
      visibleNodes.push(node);
      if (node.collapsed) return; // skip children of collapsed nodes

      visibleLinks.push(...node.childLinks);
      node.childLinks
        .map((link: any) =>
          typeof link.target === 'object'
            ? link.target
            : nodesById[link.target],
        )
        .forEach(traverseTree);
    })(nodesById[rootId]);

    return { nodes: visibleNodes, links: visibleLinks };
  }, [nodesById, rootId]);

  const [prunedTree, setPrunedTree] = useState(getPrunedTree());

  // Toggle collapse on click
  const handleNodeClick = useCallback(
    (node: any) => {
      node.collapsed = !node.collapsed;
      setPrunedTree(getPrunedTree());
      onClick?.(node);
      console.log('Node clicked:', node);
    },
    [getPrunedTree, onClick],
  );

  // Convert your color logic to a THREE-compatible format.
  const getNodeColorHex = useCallback(
    (node: any) => {
      if (activeNode && node.id === activeNode.id) {
        return 0x9ae600;
      }
      if (!node.childLinks.length) {
        return 0x555555;
      }
      return node.collapsed ? 0xf37021 : 0xb5bed1;
    },
    [activeNode],
  );

  // Create a custom Three.js object for each node.
  const nodeThreeObject = useCallback(
    (node: any) => {
      const colorHex = getNodeColorHex(node);
      const group = new THREE.Group();

      const radius = 2.5;
      const geometry = new THREE.SphereGeometry(radius, 16, 16);
      const material = new THREE.MeshStandardMaterial({ color: colorHex });
      const sphere = new THREE.Mesh(geometry, material);
      group.add(sphere);

      const labelSprite = createTextSprite(`${node.id}`, {
        fontsize: 40,
        color: '#ffffff',
      });
      if (labelSprite) {
        labelSprite.position.set(0, -radius * 2.2, 0);
        group.add(labelSprite);
      }
      return group;
    },
    [getNodeColorHex],
  );

  // To use 2d graph just add numDimensions={2} to the ForceGraph component

  return (
    <R3fForceGraph
      ref={fgRef}
      graphData={prunedTree}
      linkDirectionalParticles={2}
      linkDirectionalParticleWidth={0.8}
      linkDirectionalParticleSpeed={0.005}
      linkDirectionalArrowLength={3.5}
      linkDirectionalArrowRelPos={1}
      linkCurvature={0.25}
      onNodeClick={handleNodeClick}
      nodeThreeObject={nodeThreeObject}
    />
  );
};

export default ForceGraphViz;
