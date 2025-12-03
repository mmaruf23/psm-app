import { Outlet } from 'react-router';
import Sidebar from './components/layout/sidebar';
import Topbar from './components/layout/topbar';
import BottomNav from './components/ui/bottom_nav';

function App() {
  return (
    <main className="flex flex-col h-svh min-h-[400px]">
      <Topbar />
      <div className="grow flex bg-chart-2">
        <Sidebar />
        <div className="grow flex flex-col">
          <Outlet />
        </div>
      </div>
      <BottomNav />
    </main>
  );
}

export default App;
