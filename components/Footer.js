import React from 'react';
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer>
      <div class="container">
        <div class="row" id="footer">
          <div class="col-sm-4">
            <Link href="https://adioscovid.org/" target="_blank" rel="noopener noreferrer" className="text-danger adio_header">¡Adiós COVID!</Link>
            <div id="copyright" class="copyright">
              <i class="fa fa-copyright fa-1x"> {t("Footer-Copyright")}</i>
              <ul class="list-group"><a href="research_PrivacyStatement.pdf" download class="text-dark">Privacy Statement</a></ul>
              <ul class="list-group"><a href="research_TOS.pdf" download class="text-dark">Terms of Service</a></ul>
            </div>
          </div>
          <div class="col-sm-4">
            <h3>{t("Footer-Title1")}</h3>
            <ul class="list-group">
              <li class="list-group-item"><a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer" class="text-dark">{t("Footer-Org0")}</a></li>
              <li class="list-group-item"><a href="https://latinocenterforhealth.org/" target="_blank" rel="noopener noreferrer" class="text-dark">{t("Footer-Org1")}</a></li>
            </ul>
          </div>
          <div class="col-sm-4">
            <h3>{t("Footer-Title2")}</h3>
            <ul class="list-group">
              <li class="list-group-item text-dark">{t("Footer-ContactUS")}</li>
              <li class="list-group-item"><a href="mailto:research@adioscovid.org" class="text-dark"><i class="fa fa-envelope" aria-hidden="true"></i>research@adioscovid.org</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
