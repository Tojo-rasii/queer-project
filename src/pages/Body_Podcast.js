import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Body_Podcast() {
  const [scrollTops, setScrollTops] = useState(false);

  const handleTop = () => {
    setScrollTops(!scrollTops);
    // if(window.scroll(0, 0)){
    window.scroll(0, 0);
    // }
  };

  return (
    <div className="Podcast">
      <main>
        <section>
          <article>
            <div>
              <p>Queer Project / Pages</p>
              <p>PODCAST</p>
            </div>
            <div>
              <p>
                Podcast Page /{" "}
                <NavLink to="/" id="home" style={{ color: "#fff" }}>
                  Home
                </NavLink>
              </p>
            </div>
          </article>
        </section>
      </main>

      <aside>
        <section>
          <article>
            <picture>
              <img
                src="https://i.etsystatic.com/19005213/r/il/e51184/1971005049/il_794xN.1971005049_8ysp.jpg"
                alt=""
                srcset=""
              />
            </picture>
          </article>
          <article>
            <p>
              This topics is an audio or video program that explores issues,
              stories, and discussions relevant to the LGBT community. These
              podcasts aim to educate, inform, and provide a sense of community
              for listeners who identify as LGBT or who are interested in
              learning more about LGBT issues.
            </p>
          </article>
          <article>
            <i className="bi-mic"></i>
            <i className="bi-chevron-right"></i>
          </article>
        </section>
      </aside>

      <footer>
        <div>
          <section>
            <article>
              <i className="bi-mic"></i>
            </article>
            <article>
              <p>Coming out </p>
              <p>People who share their experience as theirself on family</p>
            </article>
          </section>
          <section>
            <article>
              <i className="bi-mic"></i>
            </article>
            <article>
              <p>Sexual orientation</p>
              <p>People who share their sexual orientation as theirself</p>
            </article>
          </section>
          <section>
            <article>
              <i className="bi-mic"></i>
            </article>
            <article>
              <p>Queer in sports</p>
              <p>People who share their experience as theirself in sports</p>
            </article>
          </section>
          <section>
            <article>
              <i className="bi-mic"></i>
            </article>
            <article>
              <p>Queer at work</p>
              <p>People who share their experience as herself at work</p>
            </article>
          </section>
        </div>
      </footer>
      <button id="top" onClick={handleTop}>
        <i className={scrollTops ? "bi-chevron-up" : "bi-chevron-down"}></i>
      </button>
    </div>
  );
}

export default Body_Podcast;
