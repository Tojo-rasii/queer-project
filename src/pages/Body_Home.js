import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'

function Body_Home() {
  const [scrollTops, setScrollTops] = useState(false);

  const handleTop = () => {
    setScrollTops(!scrollTops);
    // if(window.scroll(0, 0)){
    window.scroll(0, 0);
    // }
  };
  return (
    <div className="Home">
      <main>
        <section>
          <article>
            <div>
              <p>Because love is for everyone.</p>
              <p>Be proud, be yourself.</p>
              <NavLink to="/About">
                <button>DISCOVER MORE</button>
              </NavLink>
            </div>
          </article>
        </section>
      </main>
      {/* <main className="btn">
        <button>
          <i className="bi-arrow-left"></i>
        </button>
        <button>
          <i className="bi-arrow-right"></i>
        </button>
      </main> */}
      <button id="top" onClick={handleTop}>
        <i className={scrollTops ? "bi-chevron-up" : "bi-chevron-down"}></i>
      </button>
    </div>
  );
}

export default Body_Home;
