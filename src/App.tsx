import { Outlet } from "react-router";
import Topbar from "@/components/ui/topbar";
import Sidebar from "@/components/ui/sidebar";
import BottomNav from "@/components/ui/bottom_nav";

function App() {
  return (
    <main className="flex flex-col h-svh min-h-[400px]">
      <Topbar />
      <div className="grow flex bg-chart-1">
        <Sidebar />
        <div className="grow flex flex-col bg-chart-2 rounded-tl-2xl p-4">
          <Outlet />
        </div>
      </div>
      <BottomNav />
    </main>
  );
}

export default App;
