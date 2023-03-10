import logopic from '../public/Logo_AdiosCOVID.png'
import Link from "next/link";
import Image from "next/image";
import React from "react";
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
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li class="nav-item" id="navbar_link">
            <Link href="/" className="nav-link"> {t("Home")} </Link>
          </li>
          <li class="nav-item" id="navbar_link">
            <Link href="/Data" className="nav-link">{t("Data")} </Link>
          </li>
          <li class="nav-item" id="navbar_link">
            <Link href="/about" className="nav-link">{t("About")} </Link>
          </li>
          <li class="nav-item" id="navbar_link">
            <Link href="/documentation" className="nav-link">{t("Documentation")} </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item" id="navbar_link">
          <select 
              onChange={changeLanguage}
              defaultValue={locale}
              id="switch" 
              class="btn btn-secondary btn-md me-3"
              style={{ textAlignLast: 'center' }}
              >
                {locales.map((e) => (
                      <option value={e} key={e}>
                        {e}
                      </option>
                ))}
            </select>
          </li>
          <li className="nav-item"><button type="button" id="access_data" class="btn btn-danger btn-md me-3"><Link href="/RepoPage" id="access_data_toggle">{t("Access-Btn")}</Link></button></li>
          <li className="nav-item"><button type="button" id="access_data" class="btn btn-info btn-md me-3"><Link href="/SubmitData" id="access_data_toggle">{t("Submit-Btn")}</Link></button></li>
        </ul>
      </div>
    </nav>
    
  </div>
  );
};
