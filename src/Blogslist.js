import { Link } from "react-router-dom";

const Blogslist = ({ blogs }) => {
  // const blogs = props.blogs;

  return (
    <div className="blog-list">
      {blogs.map((data) => (
        <Link to={"/blogdetails/" + data.id}>
          <div className="blog-preview" key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <p>{data.id}</p>
            {/* <button onClick={() => handleDelete(data.id)}>Delete</button> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogslist;
