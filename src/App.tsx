import CountHooks from "./pages/count"
import DropdownHook from "./pages/dropdown";

interface User {
  name: string;
  age: number;
}

const users: User = {
  name: "Jboyさん",
  age: 34,
};

function App() {
  return (
    <>
      <p>{users.name}</p>
      <p>{users.age}</p>
      <CountHooks />
      <DropdownHook />
    </>
  )
}

export default App
