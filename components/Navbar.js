import logopic from '../public/Logo_AdiosCOVID.png'
import Link from "next/link";
import Image from "next/image";
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
            <Link href="/" className="nav-link"> {t("Home")} </Link>
          </li>
          <li class="nav-item">
            <Link href="/Data" className="nav-link">{t("Data")} </Link>
          </li>
          <li class="nav-item">
            <Link href="/about" className="nav-link">{t("About")} </Link>
          </li>
        </ul>
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
          </select>
        <button type="button" id="access_data" class="btn btn-danger btn-md me-3"><Link href="/RepoPage" id="access_data_toggle">{t("Access-Btn")}</Link></button>
        <button type="button" id="access_data" class="btn btn-info btn-md me-3"><Link href="/Data" id="access_data_toggle">{t("Submit-Btn")}</Link></button>
      </div>
    </nav>
    
  </div>

  );
};

/*
<NavDropdown title="Data" id="basic-nav-dropdown" className="navbarDropdown">
              <NavDropdown.Item href="/DataPage/#section1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/DataPage/#section3">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/DataPage/#section4">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>*/