import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/dictionary/${word}`);
  };

  return (
    <div className="container-head">
      <div className="image-container">
        <img src="/vocab.jpeg" alt="pic" />
      </div>
      <div className="header">
        <button className="btn-menu">
          <Link to="/">
            <BiHomeAlt size="1rem" />
            Home
          </Link>
        </button>
        <button className="btn-menu">
          <Link to="/search">Find</Link>
        </button>
        <button className="btn-menu">
          <Link to="/make">Add a vocab</Link>
        </button>
        <div
          className="container-input"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <input
            className="input"
            style={{ margin: "2px", height: "30px" }}
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button onClick={handleSearch} className="btn-menu">
            <FaSearch
              size="1rem"
              style={{ marginTop: "3px", padding: "2px" }}
            />
            Dictionary
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
