function App() {
  return (
    <main className="flex h-svh min-h-[400px] flex-col">
      <div className="bg-chart-1">Ceritanya ini untuk </div>
      {/* desktop mode */}
      <div className="grow flex bg-chart-2">
        <div className="bg-chart-3 md:block hidden">Ini untuk sidebar kiri</div>
        <div className="grow">Ini untuk content</div>
        <div className="bg-chart-3 md:block hidden">
          Ini untuk sidebar kanan
        </div>
      </div>
      {/* mobile mode */}
      <div className="md:hidden flex justify-center bg-chart-4">
        ini mobile mode?
      </div>
    </main>
  );
}

export default App;
