"use client";

import "@xyflow/react/dist/style.css";

import {
  Background,
  Controls,
  ReactFlow,
} from "@xyflow/react";

import { initialNodes } from "./flow/initialNodes";
import { nodeTypes } from "./flow/nodeTypes";

export default function Canvas() {
  return (
    <section className="flex-1">

      <ReactFlow
        defaultNodes={initialNodes}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={40} />

        <Controls />

      </ReactFlow>

    </section>
  );
}