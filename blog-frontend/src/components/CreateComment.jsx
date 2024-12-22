import { useState } from "react";
import axios from "axios";

function CreateComment({ token, postId }) {
  const [content, setContent] = useState("");

  const handleCreateComment = async () => {
    try {
      const response = await axios.post(
        `/comments/${postId}`,
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Comment created successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">
      <h2 className="text-2xl mb-4">Create Comment</h2>
      <textarea
        className="w-full p-2 mb-4 border rounded"
        placeholder="Comment Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="w-full p-2 bg-blue-500 text-white rounded"
        onClick={handleCreateComment}
      >
        Create Comment
      </button>
    </div>
  );
}

export default CreateComment;
