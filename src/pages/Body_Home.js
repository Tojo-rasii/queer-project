import React, { useState, useEffect } from 'react'

function Body_Home() {

    const [scrollTops, setScrollTops] = useState(false);


    const handleTop = () => {

        setScrollTops(!scrollTops);
        // if(window.scroll(0, 0)){
        window.scroll(0, 0)
        // }
    }






    return (
        <div className='Home'>
            <main>
                <section>
                    <article>
                        <div>
                            <p>Lorem, ipsum.lorem2 Lorem, ipsum.</p>
                            <p>Lorem ipsum dolor sit amet Lorem, ipsum.</p>
                            <button>Lorem, ipsum.</button>
                        </div>
                    </article>
                </section>
            </main>
            <main className='btn'>
                <button><i className="bi-arrow-left"></i></button>
                <button><i className="bi-arrow-right"></i></button>
            </main>
            <button id='top' onClick={handleTop}><i className={scrollTops ? 'bi-chevron-up' : 'bi-chevron-down'}></i></button>
        </div>
    )
}

export default Body_Home