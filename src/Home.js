// import { useState, useEffect } from "react";
import Blogslist from "./Blogslist";
import useFetch from "./useFetch";

//https://jsonplaceholder.typicode.com/posts

const Home = () => {
  // const [name, setName] = useState("mario");
  // const [age, setAge] = useState(25);

  // const handleClick = () => {
  //   // name = 'luigi';
  //   setName("luigi");
  //   setAge(30);
  // };

  //SAMPLE BLOG DATA
  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   { title: "Blah Blah!", body: "lorem ipsum...", author: "yoshi", id: 3 },
  //   {
  //     title: "Web dev top tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 4
  //   }
  // ]);

  //MOVE THIS TO THE CUSTOM HOOK == USEFETCH
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       // console.log(res);
  //       if (!res.ok) {
  //         throw Error("Could not fetch the data!!");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setBlogs(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  const { data: blogs, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // const handleDelete = (id) => {
  //   console.log(id);
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   console.log(newBlogs);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      <h2>Newsfeed</h2>
      {/* MOVE THIS CODE BELOW TO THE BLOGSLIST COMPONENT */}
      {/* {blogs.map((data) => (
        <div className="blog-preview">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <p>{data.id}</p>
        </div>
      ))} */}

      {isLoading && <div>It's loading!!......</div>}
      <Blogslist
        blogs={blogs}
        // handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
