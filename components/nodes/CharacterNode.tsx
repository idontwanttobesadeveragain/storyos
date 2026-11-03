"use client";

import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

type CharacterData = {
  name: string;
  role: string;
  tags: string[];
};

type CharacterNodeType = Node<CharacterData, "character">;

export default function CharacterNode({ data }: NodeProps<CharacterNodeType>) {
  return (
    <>
      <Handle type="target" position={Position.Top} />

      <div className="w-[260px] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl p-6">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
        </div>

        <h2 className="mt-5 text-center text-2xl font-semibold text-white">
          {data.name}
        </h2>

        <p className="text-center text-zinc-400">{data.role}</p>

        <div className="mt-4 flex justify-center gap-2 flex-wrap">
          {data.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </>
  );
}
