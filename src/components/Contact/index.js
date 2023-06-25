import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import React, { useState } from "react";

const data = [
    {
        section: "Youtube",
        title: "Blackboy96",
        link: "https://www.youtube.com/@blackboi96",
        icon: faYoutube,
    },
    {
        section: "Github",
        title: "tOxicV4p0r",
        link: "https://github.com/tOxicV4p0r",
        icon: faGithub,
    },
    {
        section: "linkedin",
        title: "Kraisorn",
        link: "https://www.linkedin.com/in/kraisorn-deelert/",
        icon: faLinkedin,
    },
]

function Contact() {
    const [isMouseEnter, setMouseEnter] = useState({})

    return (
        <section className="flex items-end pb-10 mb-10 lg:pb-0">
            <div className="flex">
                {
                    data.map(({ section, title, link, icon }) => (
                        <div key={section} className="px-3 -translate-x-3" onMouseEnter={() => setMouseEnter({ [section]: true })} onMouseLeave={() => setMouseEnter({ [section]: false })}>
                            <a className="underline underline-offset-4 text-gray-500" href={link} alt={title} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon} className={`${isMouseEnter[section] ? "text-primaryTitle scale-125" : ""} text-2xl transition-all`} />
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default Contact;