"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [openMobileNav, setOpenMobileNav] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                headerActive ? "h-[100px]" : "h-[124px]"
            } fixed top-0 max-w-[1220px] w-full bg-primary-200 transition-all z-50`}
        >
            <div className="container mx-auto h-full flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/assets/img/logo.png"
                        alt="logo"
                        width={117}
                        height={55}
                    />
                </Link>
                <MobileNav
                    containerStyles={`${
                        headerActive ? "top-[90px]" : "top-[124px]"
                    } ${
                        openMobileNav
                            ? "max-h-max pt-8 pb-10 border-t border-white/10"
                            : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
                    } text-white flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium transition-all xl:hidden`}
                />
                <Nav containerStyles="flex gap-4 hidden xl:flex text-white text-base uppercase transition-all font-medium" />

                <div className="flex items-center gap-4">
                    <div className="text-white flex gap-4 items-center">
                        <button className="hover:text-accent transition-all text-base uppercase font-medium">
                            login
                        </button>
                        <button className="hover:text-accent transition-all text-base uppercase font-medium">
                            register
                        </button>
                    </div>
                    <button
                        onClick={() => setOpenMobileNav(!openMobileNav)}
                        className="text-white xl:hidden"
                    >
                        <MdMenu className="text-4xl" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
