import { useParams } from "react-router-dom";
import api from "../api/api";
import { useState, useEffect } from "react";

export default function BlogDetail() {
  const { slug } = useParams();
  const { post, setPost } = useState([]);
  useEffect(() => {
    api.get(`/posts/${slug}`).then((res) => {
      setPost(res.data);
    });
  });
  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  );
}
