import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [modale, setModale] = useState(false);
  const [modaleHome, setModaleHome] = useState(false);

  const handleSearch = () => {
    setModale(!modale);
  };

  const handleHover = () => {
    setModaleHome(!modaleHome);
  };

  return (
    <div className="Navbar">
      <header>
        <section>
          <article>
            <div>
              <i className="bi-geo-alt-fill"></i>
              <p>76 san francisco Mexique</p>
            </div>
            <div>
              <i className="bi-envelope-fill"></i>
              <p>loremipsum@gmail.com</p>
            </div>
          </article>
          <article>
            <div>
              <i className="bi-facebook"></i>
              <i className="bi-instagram"></i>
              <i className="bi-twitter"></i>
              <i className="bi-youtube"></i>
            </div>
          </article>
        </section>
        <section>
          <article>
            <picture>
              <NavLink to="/">
                <p>Queer Project</p>
              </NavLink>
            </picture>
          </article>
          <article>
            <p
              onClick={handleHover}
              style={modaleHome ? { color: "#e51a3c" } : { color: "#fff" }}
            >
              {modaleHome ? "Home" : "Home"}
            </p>
            <div
              className="modaleHome"
              style={
                modaleHome
                  ? { opacity: "1", height: "139%" }
                  : { height: "0", opacity: "0" }
              }
            >
              <ul>
                <NavLink
                  to="/"
                  className={(nav) => (nav.isActive ? "nav-activebtn" : "")}
                >
                  <li>
                    <p>Home</p>
                  </li>
                </NavLink>
                <li>
                  <p>About</p>
                </li>
              </ul>
            </div>
            <NavLink
              className={(nav) => (nav.isActive ? "nav-active" : "")}
              to="/Podcast"
            >
              <p>Podcast</p>
            </NavLink>
            <NavLink
              className={(nav) => (nav.isActive ? "nav-active" : "")}
              to="/Forum"
            >
              <p>Forum</p>
            </NavLink>
            <NavLink
              className={(nav) => (nav.isActive ? "nav-active" : "")}
              to="/Help"
            >
              <p>Help</p>
            </NavLink>
          </article>
          <article>
            <i className="bi-search" onClick={handleSearch}></i>
          </article>
        </section>
      </header>
      <nav
        className="modalSearch"
        style={modale ? { height: "40%" } : { height: "0%" }}
      >
        <section>
          <article>
            <p>Queer project</p>
            <i className="bi-x" onClick={handleSearch}></i>
          </article>
          <article>
            <input type="text" placeholder="Type here to search..." />
            <i className="bi-search"></i>
          </article>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
