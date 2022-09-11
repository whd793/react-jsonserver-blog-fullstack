import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
  const { id } = useParams();
  const { data: blog } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  return (
    <div className="home">
      <h2> {blog.title}</h2>
      <p> {blog.body}</p>
      <p> This is a detail page</p>
    </div>
  );
};

export default Blogdetails;
