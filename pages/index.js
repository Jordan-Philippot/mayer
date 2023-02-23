// import dynamic from "next/dynamic";
// import styled from "@emotion/styled";
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// ----- Services -----
import { useTranslation } from '../components/UseTranslation';

// ----- Images -----
import Illustrations from '../public/illustrations.png'



export default function Home() {
  const { t } = useTranslation();


  return (
    <div id="home">

      <main>
        <div className="container home-container">




          <div className="one-side">
            <div className="bubble-bg bubble-1"></div>
            <div className="bubble-bg bubble-2"></div>
            <div className="bubble-bg bubble-3"></div>
            <div className="bubble-bg bubble-4"></div>

            <Image
              alt="Couvreur rennovant la charpente d'une toiture"
              src={Illustrations}
              className="illustrations"
            />

          </div>

          <div className="one-side text-side">

            <div className="bubble-bg bubble-5"></div>
            <div className="bubble-bg bubble-6"></div>
            <div className="bubble-bg bubble-7"></div>
            <div className="bubble-bg bubble-8"></div>

            <p className='location'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              {t("homepage_location")}
            </p>
            <h1>{t("homepage_title")}</h1>
            <h3>{t("homepage_subtitle")}</h3>
            <Link className="btn-default" href="/contact">{t("contact_us")}</Link>
          </div>



        </div>
      </main>
    </div>
  );
}