import logopic from '../public/Logo_AdiosCOVID.png'
import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";



// const Navbar = () => {
export default function Navbar(){

	// const handleClick = l => () => {
	// 	push(`/`, undefined, { locale: l })
	// }
  // const { t } = useTranslation("common");

  const { t } = useTranslation("common");
  const router = useRouter()
  const currentPath = router.pathname

  const { locale, locales, defaultLocale } = router
  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push(router.asPath, router.asPath, { locale })
  }

=======
import React, { useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";


export default function Navbar(){
  const { t } = useTranslation("common");
  const router = useRouter()

  const { locale, locales } = router
  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push(router.asPath, router.asPath, { locale })
  }
>>>>>>> origin/main
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white justify-content-between navbar-custom">
      <Link href="/" className="navbar-brand text-center col-2">
      <Image
                src={logopic} 
                alt="Adios COVID Research Logo"
                className="img_fluid img_logo"
        />
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
<<<<<<< HEAD
            <Link href="/" className="nav-link" class={"Home"}> {t("Home")} </Link>
          </li>
          <li class="nav-item">
            <Link href="/Data" className="nav-link" class={"Data"}>{t("Data")} </Link>
          </li>
          <li class="nav-item">
            <Link href="/about" className="nav-link" class={"About"}>{t("About")} </Link>
          </li>
<<<<<<< HEAD
          <li class="nav-item">
            <Link href="/documentation" className="nav-link"> Documentation </Link>
=======
            <Link href="/" className="nav-link"> {t("Home")} </Link>
          </li>
          <li class="nav-item">
            <Link href="/Data" className="nav-link">{t("Data")} </Link>
          </li>
          <li class="nav-item">
            <Link href="/about" className="nav-link">{t("About")} </Link>
>>>>>>> origin/main
          </li>
=======
          {/* <li class="nav-item">
            <Link href="/RepoPage" className="nav-link" class={"RepoPage"}>{t("RepoPage")} </Link>
          </li> */}
>>>>>>> 50c18e1a31d7b175914552f02859e058fad482f1
        </ul>
<<<<<<< HEAD
        {/* <Link href="/" locale="en">
            <h2>English</h2>
        </Link>  
        <Link href="/" locale="es">
            <h2>Spanish</h2>
        </Link> */}
        {/* <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href = {router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul> */}

        {/* <select id="switch" class="btn btn-light btn-md me-3" style={{ textAlignLast: 'center' }}>
            <option selected value="en">en</option>
            <option value="es">es</option>
        </select> */}

=======
>>>>>>> origin/main
        <select 
            onChange={changeLanguage}
            defaultValue={locale}
            id="switch" 
            class="btn btn-light btn-md me-3"
            style={{ textAlignLast: 'center' }}
            >
              {locales.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
              ))}
<<<<<<< HEAD
      </select>

        {/* <Link href="/" locale="en">
            <h2>English</h2>
        </Link>
        <Link href="/" locale="es">
            <h2>Spanish</h2>
        </Link> */}

        <button type="button" id="access_data" class="btn btn-danger btn-md me-3"><Link href="/RepoPage" id="access_data_toggle">{t("Access-Btn")}</Link></button>
        <button type="button" id="access_data" class="btn btn-info btn-md me-3"><Link href="/Data" id="access_data_toggle">{t("Submit-Btn")}</Link></button>
=======
          </select>
        <button type="button" id="access_data" class="btn btn-danger btn-md me-3"><Link href="/RepoPage" id="access_data_toggle">{t("Access-Btn")}</Link></button>
        <button type="button" id="access_data" class="btn btn-info btn-md me-3"><Link href="/SubmitData" id="access_data_toggle">{t("Submit-Btn")}</Link></button>
>>>>>>> origin/main
      </div>
    </nav>
    
  </div>

  );
};

<<<<<<< HEAD
// export default Navbar;
=======
/*
<NavDropdown title="Data" id="basic-nav-dropdown" className="navbarDropdown">
              <NavDropdown.Item href="/DataPage/#section1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/DataPage/#section3">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/DataPage/#section4">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>*/
>>>>>>> origin/main
