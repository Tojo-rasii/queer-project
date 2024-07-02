import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Body_About() {

    const [scrollTops, setScrollTops] = useState(false);


    const handleTop = () => {

        setScrollTops(!scrollTops);
        // if(window.scroll(0, 0)){
        window.scroll(0, 0)
        // }
    }






    return (
        <div className='Podcast About'>
            <main>
                <section>
                    <article>
                        <div>
                            <p>Queer Project / Pages</p>
                            <p>About</p>
                        </div>
                        <div>
                            <p>About Page / <NavLink to="/" id='home' style={{ color: '#fff' }}>
                                Home
                            </NavLink></p>
                        </div>
                    </article>
                </section>
            </main>

            <footer>
                <div>
                    <section>
                        <article>
                            <p>What is lesbian? </p>
                            <p>The term "lesbian" refers to a woman who is romantically or sexually attracted to other women. The term is often used to describe a sexual orientation, indicating a preference for same-sex relationships. The word "lesbian" originates from the Greek island of Lesbos, which was home to the ancient poet Sappho, who wrote about love and attraction between women.</p>
                            <p>Lesbian identity and culture are diverse, encompassing a wide range of experiences and expressions. It is important to understand and respect each person's individual experience with their sexuality.</p>
                        </article>
                    </section>
                    <section>
                        <article>
                            <p>What is gay? </p>
                            <p>The term "gay" typically refers to a person who is romantically or sexually attracted to people of the same gender. While it can apply to individuals of any gender, it is often used to describe men who are attracted to other men. The term can also be used more broadly to refer to the LGBTQ+ community as a whole.</p>
                            <p>
                                Gay identity and culture are diverse, reflecting a wide range of experiences and expressions. Like other sexual orientations, it is important to respect and understand each person's individual experience with their sexuality.
                            </p>
                        </article>
                    </section>
                    <section>
                        <article>
                            <p>What is Bisexual?</p>
                            <p>isexual refers to a person who is romantically or sexually attracted to more than one gender. This can include attraction to both men and women, as well as to people of non-binary genders. Bisexuality is a valid and distinct sexual orientation, and individuals who identify as bisexual can experience varying levels of attraction to different genders.</p>
                            <p>Bisexuality is often misunderstood or stereotyped, so it's important to recognize that bisexual people can have committed relationships and their attraction to multiple genders does not diminish the validity of their orientation. The term is part of the broader LGBT (Lesbian, Gay, Bisexual, and Transgender) community, which encompasses a wide range of sexual orientations and gender identities.</p>
                        </article>
                    </section>
                    <section>
                        <article>
                            <p>what is Transgender?</p>
                            <p>Transgender, often abbreviated as trans, refers to individuals whose gender identity differs from the sex they were assigned at birth. This term encompasses a wide range of identities and experiences. Here are some key points:
                                Gender Identity: This is a deeply-held sense of being male, female, a blend of both, neither, or something else. For transgender people, their gender identity does not match the sex they were assigned at birth.
                                Transitioning: Many transgender individuals undergo a process called transitioning to align their physical appearance and gender expression with their gender identity. This can include hormone therapy, surgery, and changes in clothing, name, or pronouns. The extent and nature of transitioning vary widely among individuals.</p>
                            <p>Non-Binary and Genderqueer: These are terms used by some people whose gender identity doesn`t fit within the traditional categories of male or female. They may identify as both, neither, or a different gender altogether.
                                Pronouns: Transgender people may use a variety of pronouns that match their gender identity, such as he/him, she/her, they/them, or other pronouns.</p>
                        </article>
                    </section>
                </div>
            </footer>
            <button id='top' onClick={handleTop}><i className={scrollTops ? 'bi-chevron-up' : 'bi-chevron-down'}></i></button>
        </div>
    )
}

export default Body_About