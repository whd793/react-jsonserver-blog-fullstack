import { Link } from "react-router-dom";

//LINK VS A
//LINK DOES NOT REQUEST TO SERVER
//WHICH MAKES LINK FASTER
//SO LINK IS BASICALLY CLIENT SIDE RENDERING

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Sample Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px"
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
