import axios from "axios";
import React, { useEffect, useState } from "react";

const WithUseState = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        // console.log(res.data);
        setPost(res.data);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        // console.log(error);
        setError("Something went wrong");
        setPost({});
        setLoading(false);
      });
  }, []);
  return <div>{loading ? "loading" : post.name}</div>;
};

export default WithUseState;
