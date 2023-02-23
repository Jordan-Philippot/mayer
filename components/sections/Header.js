import dynamic from "next/dynamic";
import React, { useState, useEffect } from 'react'

// ----- Components -----
const HeaderDesktop = dynamic(() => import("./HeaderDesktop"), {
    ssr: false,
});

const HeaderTablet = dynamic(() => import("./HeaderTablet"), {
    ssr: false,
});

export default function Header() {

    const [header, setHeader] = useState('')


    const displayHeader = () => {
        if (window.innerWidth < 1200 || document.documentElement.clientWidth < 1200) {
            setHeader(<HeaderTablet />)
        } else {
            setHeader(<HeaderDesktop />)
        }
    }

    useEffect(() => {
        displayHeader()

        window.addEventListener("resize", (e) => {
            displayHeader()
        });
    }, [])



    return (
        <header>
            {header && header}
        </header>
    )
}
