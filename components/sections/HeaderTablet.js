import React, { useState } from 'react'
import dynamic from "next/dynamic"
import Link from 'next/link'
import Image from 'next/image'


// ----- Services -----
import { useTranslation } from '../UseTranslation';

// ----- Packages -----
import gsap, { Power2 } from "gsap"

// ----- Images -----
import LogoMayeur from '../../public/MYC_Mayeur_Couverture.png'


const ThemeToggle = dynamic(() => import("../ThemeToggle"), {
  ssr: false,
});


export default function HeaderTablet() {
  const { t, lang, setLang } = useTranslation();

  const changeLanguage = (e) => {
    setLang(e.target.value);
  };


  const [toggled, setToggled] = useState(false);
  const [nav, setNav] = useState(false);

  // ----- Show one section -----
  const toggledSection = (e) => {
    const idToggled = e.currentTarget.id;
    const tl = gsap.timeline()

    setToggled(toggled ? false : true)

    if (!toggled) {
      tl.to('#' + idToggled + '-section-dropdown', { display: 'flex', opacity: 1, height: 'auto', duration: .5 });
      tl.set('#' + idToggled + ' svg', { transform: 'rotate(180deg)' });
    } else {
      tl.to('#' + idToggled + '-section-dropdown', { display: 'none', opacity: 0, height: 0, duration: .5 });
      tl.set('#' + idToggled + ' svg', { transform: 'rotate(0deg)' });
    }
  };


  // ----- Show menu -----
  const toggledNavbar = (e) => {
    const tl = gsap.timeline()

    setNav(nav ? false : true)
    if (nav) {
      tl.to('#dropdown-container', { display: 'none', opacity: 0, y: "-350px", duration: .2, ease: Power2 });
    } else {
      tl.to('#dropdown-container', { display: 'flex', opacity: 1, y: 0, duration: .5, ease: Power2 });

    }
  }



  return (
    <div id="header-tablet">

      <nav>
        <div>
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
        <svg id="dropdown-icon" onClick={toggledNavbar} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </nav>



      <div id="dropdown-container">


        <div className="dropdown-section"
          id="solutions"
          onClick={toggledSection}
        >
          <div className="title-section">
            <p>{t("services")}</p>
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M11.561 1.061l-5.25 5.25-5.25-5.25" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            </svg>
          </div>

          <div className="toggled-section" id="solutions-section-dropdown">
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

        <div className="dropdown-divider"></div>

        <div>
          <Link href="/nos-realisations" className="title-section">{t("our_achievements")}</Link>
        </div>

        <div className="dropdown-divider"></div>

        <div>
          <Link href={"/about"} className="title-section" >{t("about")}</Link>
        </div>

        <div className="dropdown-divider"></div>

        <div>
          <Link href="/nos-realisations" className="title-section">{t("contact")}</Link>
        </div>

        <div className="dropdown-divider"></div>

        <div>
          <ThemeToggle />
        </div>

        <div className="dropdown-divider"></div>

        <div>
          <select value={lang} onChange={changeLanguage}>
            <option value="en">En</option>
            <option value="fr" defaultValue>Fr</option>
            <option value="es">Es</option>
          </select>
        </div>
      </div>

    </div>
  )
}