import Sidebar from "@/components/Sidebar";
import Canvas from "@/components/Canvas";

export default function Home() {
  return (
    <main className="flex h-screen bg-[#09090b] overflow-hidden">
      <Sidebar />
      <Canvas />
    </main>
  );
}