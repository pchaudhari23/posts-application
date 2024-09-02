import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav id="app-navbar" className="app-navbar">
      <Link to="/addpost">Add Post</Link> | <Link to="/myposts">My Posts</Link>{" "}
      |<Link to="/chats">Chats</Link>
    </nav>
  );
};

export default Navbar;
