import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged Out!");
      navigate('/login')
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
