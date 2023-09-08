import axios from "axios";
import React, { useState, useEffect } from "react";

interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comments: React.FC = () => {
  const [commentsData, setCommentsData] = useState<CommentType[]>([]);

  useEffect(() => {
    async function getComments() {
      const response = await axios.get<CommentType[]>(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setCommentsData(response.data);
    }

    getComments();
  }, []);

  return (
    <div>
      <ul>
        {commentsData?.map((comment, index) => (
          <li key={index} data-testid="comment">
            {comment.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
