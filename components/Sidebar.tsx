"use client";

const menus = [
  "👤 人物",
  "🏢 组织",
  "📍 地点",
  "📖 小说",
  "📅 时间线",
  "🤖 AI",
];

export default function Sidebar() {
  return (
    <aside
      className="
      m-5
      w-[270px]
      rounded-[28px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-3xl
      shadow-2xl
      flex
      flex-col
      p-6
    "
    >
      <h1 className="text-3xl font-bold text-white">
        StoryOS
      </h1>

      <p className="mt-2 text-zinc-400">
        Build Your Universe
      </p>

      <div className="mt-10 flex flex-col gap-3">
        {menus.map((item) => (
          <button
            key={item}
            className="
            rounded-2xl
            px-4
            py-3
            text-left
            text-zinc-300
            transition-all
            duration-200
            hover:bg-white/10
            hover:text-white
            hover:translate-x-2
          "
          >
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}