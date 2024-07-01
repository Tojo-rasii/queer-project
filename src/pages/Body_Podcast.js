import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Body_Podcast() {

    const [scrollTops, setScrollTops] = useState(false);


    const handleTop = () => {

        setScrollTops(!scrollTops);
        // if(window.scroll(0, 0)){
        window.scroll(0, 0)
        // }
    }






    return (
        <div className='Podcast'>
            <main>
                <section>
                    <article>
                        <div>
                            <p>Queer Project / Pages</p>
                            <p>PODCAST</p>
                        </div>
                        <div>
                            <p>Podcast Page / <NavLink to="/" id='home' style={{ color: '#fff' }}>
                                Home
                            </NavLink></p>
                        </div>
                    </article>
                </section>
            </main>

            <aside>
                <section>
                    <article>
                        <picture>
                            <img src="https://i.etsystatic.com/19005213/r/il/e51184/1971005049/il_794xN.1971005049_8ysp.jpg" alt="" srcset="" />
                        </picture>
                    </article>
                    <article>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dolorum. Distinctio illo dolor nulla a?</p>
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
                            <p>coming out </p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </article>
                    </section>
                    <section>
                        <article>
                            <i className="bi-mic"></i>
                        </article>
                        <article>
                            <p>Sexual orientation and gender identity</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </article>
                    </section>
                    <section>
                        <article>
                            <i className="bi-mic"></i>
                        </article>
                        <article>
                            <p>Queer in sports</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </article>
                    </section>
                    <section>
                        <article>
                            <i className='bi-mic'></i>
                        </article>
                        <article>
                            <p>Queer at work</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </article>
                    </section>
                </div>
            </footer>
            <button id='top' onClick={handleTop}><i className={scrollTops ? 'bi-chevron-up' : 'bi-chevron-down'}></i></button>
        </div>
    )
}

export default Body_Podcast