import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className=" w-full h-full lg:bg-white lg:w-[62.5rem] lg:h-[45rem] lg:rounded-2xl lg:shadow-xl flex">
      <Nav />
      <main className="w-full h-full">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
