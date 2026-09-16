import withLogger from "./withLogger";
import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">Dev Insights</div>
      <nav>
        <a href="#" className="header__nav-link">
          New Post
        </a>
      </nav>
    </header>
  );
};

export default withLogger(Header, "Header");