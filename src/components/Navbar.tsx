import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err: unknown) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      <div className="flex gap-4 items-center justify-end mr-6 mt-6">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/preferences">Preferences</Link>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </>
  );
}
