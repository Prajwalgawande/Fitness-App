import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Home = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged Out!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to Fitness App</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
