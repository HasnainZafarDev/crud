import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <AddUser />
      </main>
    </div>
  );
}

