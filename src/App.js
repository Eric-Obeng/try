import Heading from "./components/Heading";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <dev className ="App">
      <Main />
      <Heading firstName="Bob" />
      <Heading firstName="Deborah" />
      <Sidebar />


    </dev>
  );
}

export default App;