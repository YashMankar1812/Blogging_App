import { useState } from "react";
import axios from "axios";

function CreatePost({ token }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    try {
      const response = await axios.post(
        "/posts",
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Post created successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">
      <h2 className="text-2xl mb-4">Create Post</h2>
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-4 border rounded"
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="w-full p-2 bg-blue-500 text-white rounded"
        onClick={handleCreatePost}
      >
        Create Post
      </button>
    </div>
  );
}

export default CreatePost;
