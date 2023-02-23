import React, { useState } from 'react'
import dynamic from "next/dynamic"
import Link from 'next/link'
import Image from 'next/image'


// ----- Packages -----
import gsap, { Power2 } from "gsap"
import { useTranslation } from '../UseTranslation';

// ----- Images -----
import Arrow from '../../public/arrow-down.svg'
import LogoMayeur from '../../public/MYC_Mayeur_Couverture.png'


const ThemeToggle = dynamic(() => import("../ThemeToggle"), {
  ssr: false,
});

export default function HeaderDesktop() {

  const { t, lang, setLang } = useTranslation();

  const changeLanguage = (e) => {
    setLang(e.target.value);
  };


  const [toggled, setToggled] = useState(false);

  // ----- Toggled dropdown menu -----
  const toggledMenu = (e) => {
    const idToggled = e.currentTarget.id;
    const tl = gsap.timeline()

    setToggled(toggled ? false : true)

    if (!toggled) {
      tl.to('.dropdown-container', { display: 'none', opacity: 0, height: 0, duration: .2 });
      tl.to('#' + idToggled + '-dropdown', { display: 'flex', opacity: 1, height: "auto", duration: .5, ease: Power2 });
      tl.set('#' + idToggled + ' img', { transform: 'rotate(180deg)' });

    } else {
      tl.to('.dropdown-container', { display: 'none', opacity: 0, height: 0, duration: .5, ease: Power2 });
      tl.set('#' + idToggled + ' img', { transform: 'rotate(0deg)' });
    }
  };

  return (
    <div id="header-desktop">

      {/* ----- Navbar Visible  -----*/}
      <nav>
        {/* ----- Left  -----*/}
        <div id="nav-left">
          <Link href={"/"}>
            <div id="logo-container">
              <Image
                alt="Mayeur couverture"
                src={LogoMayeur}
                width={120}
                height={120}
              />
            </div>
          </Link>
        </div>


        {/* ----- Centered -----*/}
        <div id="nav-centered">
          <div className="item-container"
            id="services"
            onMouseEnter={toggledMenu}
            onMouseLeave={toggledMenu}>
            <div className="item-toggled"
            >
              <p>{t("services")}</p>
              <Image
                alt="Flèche blanche"
                src={Arrow}
                width={25}
                height={25}
              />
            </div>
            {/*  ---- Dropdown menu ----- */}
            <div className="dropdown-container" id="services-dropdown">
              <ul>
                <li>
                  <Link href="/nos-services/couverture">{t("roof_covering")}</Link>
                </li>
                <li>
                  <Link href="/nos-services/traitement-de-charpente">{t("structural_treatment")}</Link>
                </li>
                <li>
                  <Link href="/nos-services/gouttiere">{t("gutter")}</Link>
                </li>
                <li>
                  <Link href="/nos-services/demoussage">{t("defoaming")}</Link>
                </li>
                <li>
                  <Link href="/nos-services/peinture">{t("paint")}</Link>
                </li>
                <li>
                  <Link href="/nos-services/hydroguge">{t("water_repellent")}</Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="item-container">
            <Link href={"/nos-realisations"}>{t("our_achievements")}</Link>
          </div>

          <div className="item-container">
            <Link href={"/about"}>{t("about")}</Link>
          </div>

          <div className="item-container">
            <Link href={"/contact"}>{t("contact")}</Link>
          </div>
        </div>


        {/*  ---- Right ----- */}
        <div id="nav-right">
          <select value={lang} onChange={changeLanguage}>
            <option value="en">En</option>
            <option value="fr" defaultValue>Fr</option>
            <option value="es">Es</option>
          </select>

          <ThemeToggle />
        </div>
      </nav>
    </div >
  )
}
