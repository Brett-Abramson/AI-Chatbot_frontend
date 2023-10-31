import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          padding: 20,
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center" }}>
          Built following
          <span>
            <Link
              className="nav-link"
              to={"https://youtube.com/indiancoders"}
              style={{ color: "white" }}
            >
              freeCodeCamp tutorial
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
