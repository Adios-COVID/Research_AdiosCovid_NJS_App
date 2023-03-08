import React from 'react';
import Image from 'next/image'
import uwimg from '../public/UW.png'
import lat_img from '../public/Latino_Center_for_Health.png'
import avatar from '../public/Apple_Avatar.png'
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About(props) {
    const personData = props.personData;
    const { t } = useTranslation("common");

    const {locale,locales, push} = useRouter()
    const router = useRouter()
  
    const changeLanguage = (e) => {
        const locale = e.target.value
        router.push(router.asPath, router.asPath, { locale })
    }
    
    return (
        <>
        <Navbar />
        <div class="margindesign">
        <main class="body">
            <div class="aboutText">
                <section class="aboutText">
                    <h1 class={"aboutTitle1"}>{t("aboutTitle1")}</h1>
                    <p class={"aboutText1"}>
                        {t("aboutText1")}
                    </p>
                </section>
                
                <section class="space">
                    <h1 class={"aboutTitle2"}>{t("aboutTitle2")}</h1>
                    <p class={"aboutText2"}>
                    {/* We are a group of 14 undergraduate students from the  
                    <a href = "https://ischool.uw.edu/" target="_blank" rel="noopener noreferrer">University of Washington Information School </a> 
                    coming from all different backgrounds and concentrations. Led by Frank Martinez and Dr. Leo Morales, in partnership with the UW 
                    <a href = "https://latinocenterforhealth.org/" target="_blank" rel="noopener noreferrer"> Latino Center for Health </a> 
                    and Adios COVID, we have been brought in to 
                    research Long COVID—a little-known problem affecting communities across the world. Being from a Washington-based University, it was decided that we would uncover how Long COVID 
                    is affecting the population in our great state, in particular, Latinos in Eastern Washington. Throughout our 10-week quarter,
                    we have developed this website and created an open-source research system, collecting data from both field and pre-existing
                    research. To learn more about everyone involved, scroll down. */}
                    {t("aboutText2")}
                    </p>
                </section>

                <section class="aboutText">
                    <h1 class={"aboutTitle3"}>{t("aboutTitle3")}</h1>
                    <p class="OrgName">
                        <Image
                            src={uwimg}
                            alt="UW-pic"
                            className="logo img-fluid"
                            priority
                        />
                        <b class={"OrgName1"}> {t("OrgName1")}</b>
                    </p>
                    <p className="OrgName">
                        <Image
                            src={lat_img}
                            alt="Latino-pic"
                            className="logo img-fluid"
                            priority
                        />
                        <b class={"OrgName2"}> {t("OrgName2")}</b>
                    </p>
                    <p class={"aboutText4"}>
                        {t("aboutText4")}
                    </p>
                    <h1 class={"aboutTitle4"}>{t("aboutTitle4")}</h1>
                    <div>
                        <Image
                            src={avatar}
                            alt="Apple_Avatar-pic"
                            className="people_avatar img-fluid"
                            priority
                        />
                    </div>
                </section>
            </div>
        </main >
    </div >
    <Footer /> 
    </>
    );
}

export function ErrorPage() {
    return <p className="alert alert-danger">Page not found</p>;
}