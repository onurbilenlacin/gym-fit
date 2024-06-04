"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const links = [
    {
        name: "home",
        target: "home",
        offset: -100
    },
    {
        name: "about",
        target: "about",
        offset: -80
    },
    {
        name: "class",
        target: "class",
        offset: -80
    },
    {
        name: "team",
        target: "team",
        offset: 0
    },
    {
        name: "prices",
        target: "prices",
        offset: -40
    },
    {
        name: "testimonial",
        target: "testimonial",
        offset: 0
    },
    {
        name: "blog",
        target: "blog",
        offset: 0
    },
    {
        name: "contact",
        target: "contact",
        offset: 0
    }
];
const Nav = ({ containerStyles }: { containerStyles: string }) => {
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => (
                <ScrollLink
                    key={index}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    to={link.target}
                    // duration={500}
                    className="hover:text-accent transition all cursor-pointer"
                >
                    {link.name}
                </ScrollLink>
            ))}
        </nav>
    );
};

export default Nav;
