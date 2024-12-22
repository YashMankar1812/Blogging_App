function Logout({ setToken }) {
    const handleLogout = () => {
      localStorage.removeItem("token");
      setToken(null);
    };
  
    return (
      <button
        className="w-full p-2 bg-red-500 text-white rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    );
  }
  
  export default Logout;
  