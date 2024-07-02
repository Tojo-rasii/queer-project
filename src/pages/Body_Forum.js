import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Body_Forum() {
  const [scrollTops, setScrollTops] = useState(false);

  const handleTop = () => {
    setScrollTops(!scrollTops);
    // if(window.scroll(0, 0)){
    window.scroll(0, 0);
    // }
  };

  return (
    <div className="Podcast Forum">
      <main>
        <section>
          <article>
            <div>
              <p>Queer Project</p>
              <p>FORUM</p>
            </div>
            <div>
              <p>
                Forum Page /{" "}
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
            <p>FORUM</p>
          </article>
          <article>
            {/* <i className="bi-mic"></i>
                        <i className="bi-chevron-right"></i> */}
          </article>
        </section>
      </aside>

      <footer>
        <section>
          {/* <article> */}
          <div>
            <u>What does it mean coming out?</u>
          </div>
          <p>
            “Coming out” refers to the process of revealing one`s sexual
            orientation or gender identity to others. It can be a significant
            and personal experience, and it is a choice that each individual
            makes based on their comfort and circumstances.
          </p>
          {/* </article> */}

          {/* <article> */}
          <div>
            <u>How can I support LGBT people in my community?</u>
          </div>
          <div>
            {" "}
            You can support LGBT people by being an ally—showing acceptance,
            educating yourself and others, using inclusive language, advocating
            for LGBT rights, and standing against discrimination and prejudice.
          </div>
          {/* </article> */}

          {/* <article> */}
          <div>
            <u> What are some ways to be a good ally to the LGBT community?</u>
          </div>
          <p>
            To be a good ally, you can educate yourself about LGBT issues, stand
            up against discrimination, listen to and support your LGBT friends,
            and use inclusive language. Showing kindness and respect helps make
            the community stronger.
          </p>
          {/* </article> */}

          {/* <article> */}
          <div>
            <u> What should I do if my friend comes out to me? </u>
          </div>
          <p>
            If your friend comes out to you, listen to them, be supportive, and
            keep their trust. You can show support by being understanding,
            asking how you can help, and keeping their feelings confidential if
            they ask you to.
          </p>
          {/* </article> */}

          {/* <article> */}
          <div>
            <u>Can you change your mind about being gay or straight? </u>
          </div>
          <p>
            Sexual orientation isn’t something you choose or change like a
            decision. It’s a part of who you are. It’s okay to explore and
            understand your feelings, but being gay, straight, or bisexual is
            about who you are attracted to naturally.
          </p>
          {/* </article> */}
        </section>
      </footer>
      <button id="top" onClick={handleTop}>
        <i className={scrollTops ? "bi-chevron-up" : "bi-chevron-down"}></i>
      </button>
    </div>
  );
}

export default Body_Forum;
