import { useEffect, useState } from "react";
import axios from "axios";

function PostList({ token }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id} className="mb-4 p-4 border rounded-lg">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
