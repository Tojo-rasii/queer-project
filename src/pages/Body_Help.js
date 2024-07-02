import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Body_Help() {
  const [scrollTops, setScrollTops] = useState(false);

  const handleTop = () => {
    setScrollTops(!scrollTops);
    // if(window.scroll(0, 0)){
    window.scroll(0, 0);
    // }
  };

  return (
    <div className="Help">
      <main>
        <section>
          <article>
            <div>
              <p>Here are some contacts you might find helpful.</p>
              <p>HELP</p>
            </div>
            <div>
              <p>
                {/* Help Page /{" "} */}
                <NavLink to="/" id="home" style={{ color: "#fff" }}>
                 Back Home
                </NavLink>
              </p>
            </div>
          </article>
        </section>
      </main>

      <aside>
        <section>
          <div>
            <p>You need help?</p>
          </div>
        </section>
        <section>
          <article>
            <picture>
              <i className="bi-heart-pulse-fill"></i>
            </picture>
            <div>
              <p>Doctor</p>
              <p>
                <i className="bi-telephone">&nbsp;</i> 034 XXXXXXXXXXX
              </p>
              <p>
                <i className="bi-envelope">&nbsp;</i> *******@gmail.com
              </p>
            </div>
          </article>
          <article>
            <picture>
              <i className="bi-heart-pulse-fill"></i>
            </picture>
            <div>
              <p>Psy</p>
              <p>
                <i className="bi-telephone">&nbsp;</i> 034 XXXXXXXXXXX
              </p>
              <p>
                <i className="bi-envelope">&nbsp;</i> *******@gmail.com
              </p>
            </div>
          </article>
          <article>
            <picture>
              <i className="bi-heart-pulse-fill"></i>
            </picture>
            <div>
              <p>Gynecologist</p>
              <p>
                <i className="bi-telephone">&nbsp;</i> 034 XXXXXXXXXXX
              </p>
              <p>
                <i className="bi-envelope">&nbsp;</i> *******@gmail.com
              </p>
            </div>
          </article>
        </section>
      </aside>

      <button id="top" onClick={handleTop}>
        <i className={scrollTops ? "bi-chevron-up" : "bi-chevron-down"}></i>
      </button>
    </div>
  );
}

export default Body_Help;
