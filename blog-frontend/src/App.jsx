import { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import CreateComment from "./components/CreateComment";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {token ? (
        <>
          <Logout setToken={setToken} />
          <CreatePost token={token} />
          <PostList token={token} />
        </>
      ) : (
        <>
          <SignUp />
          <Login setToken={setToken} />
        </>
      )}
    </div>
  );
}

export default App;
