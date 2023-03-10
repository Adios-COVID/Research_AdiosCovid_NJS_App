import { useEffect, useState, react } from 'react';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import useTranslation from "next-translate/useTranslation";

export default function RepoPage() {
    const [termAgree, setTermAgree] = useState(false);
    const [disclaimerAgree, setDisclaimerAgree] = useState(false);
    const { t } = useTranslation("common");

    const canBeSubmitted = () => {
        const isValid =
            termAgree && disclaimerAgree; //checkbox for terms & disclaimer

        if (isValid) {
            document.getElementById("btn1").removeAttribute("disabled");
        } else {
            document.getElementById("btn1").setAttribute("disabled", true);
        }
        console.log({ termAgree, disclaimerAgree });
    };

    useEffect(() => canBeSubmitted());
    return (
        <>
        <Navbar/>
        <div class="container" id="repo_container">
            <div class="row">
                <h2> {t("Our Data Repository")}</h2>
                <p>{t("OurDataRepo-Description")}</p>
            </div>
            <div class="row">
                <h2 class={"Terms of Usage"}>{t("Terms of Usage")}</h2>
                <ul class="terms">
                    <li class={"License"}>
                        {t("License")}
                    </li>
                    <li>
                        {t("Attribution")}
                    </li>
                    <li>
                        {t("Data-Quality")}
                    </li>
                    <li>
                        {t("Compliance")}
                    </li>
                </ul>
                <div class="form-check" >
                    <input
                        type="checkbox"
                        name="termAgree"
                        id="termAgree"
                        class="agree"
                        onClick={(e) => setTermAgree(e.target.checked)}
                    />
                    <label htmlFor="agree" class="agree_check"> {t("Compliance-Agree")}</label>
                </div>
            </div>
            <div class="row">
                <h2>{t("Disclaimer")}</h2>
                <p>{t("Disclaimer-Content")}</p>
                <div class="form-check">
                    <input
                        type="checkbox"
                        name="disclaimerAgree"
                        id="disclaimerAgree"
                        class="agree"
                        onClick={(e) => setDisclaimerAgree(e.target.checked)}    // Check these to agree to view repo.
                    />
                    <label htmlFor="agree" class="agree_check"> {t("Disclaimer-Agree")}</label>
                </div>
            </div>
            <div class="row">
                <button type="button"
                    class="col-6 mx-auto btn btn-danger btn-rounded btn-md btn-block"
                    id="btn1">
                    <a href="https://github.com/Adios-COVID/datarepo.git" target="_blank" rel="noopener noreferrer"
                        class="text-light">
                        {t("Repo-Link-Btn")}
                    </a>
                </button>
            </div>
        </div>
        <Footer/>
        </>
    )
}