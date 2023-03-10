import React from 'react';
import Image from 'next/image'
import uwimg from '../public/UW.png'
import lat_img from '../public/Latino_Center_for_Health.png'
import avatar from '../public/Apple_Avatar.png'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import useTranslation from "next-translate/useTranslation";

export default function About(props) {
    const personData = props.personData;
    const { t } = useTranslation("common");
    return (
        <> <Navbar />
        <div class="margindesign">
            <main class="body">
                <div class="aboutText">
                    <section class="aboutText">
                        <h1 class="aboutTitle">{t("aboutTitle0")}</h1>
                        <p class="aboutText">
                            {/* It goes without saying that COVID-19 has impacted the lives of many across the world, but something that is seldom discussed is what happens to the body after
                            COVID subsides. Symptoms lingering after an individual has recovered from COVID is what is known as Long COVID <a href="https://www.seattletimes.com/seattle-news/health/long-covid-grips-some-washingtonians-and-perplexes-scientists-new-research-underway/" target="_blank" rel="noopener noreferrer"> <sup>[1]</sup></a>.
                            These symptoms can range from brain fog to depression or anxiety and have an unknown duration as of right now. Even scarier, Long COVID has been noted as a cause of death on certain individuals’ death
                            certificates <a href="https://yourlocalepidemiologist.substack.com/p/long-covid-an-update-and-gauging" target="_blank" rel="noopener noreferrer"> <sup>[2]</sup></a>, with the highest Long COVID death rate being among American Indian or Alaska Native males ages 85+ <a href="https://yourlocalepidemiologist.substack.com/p/long-covid-an-update-and-gauging" target="_blank" rel="noopener noreferrer"> <sup>[2]</sup></a>. Long COVID is still very much under research,
                            as there is not a set definition for the term ‘Long COVID’ <a href="https://pubmed.ncbi.nlm.nih.gov/33791733/" target="_blank" rel="noopener noreferrer"> <sup>[3]</sup></a>,
                            all we know is that it’s here and impacting many communities and populations across the world. The
                            wide variety of symptoms affect the everyday life of those who are sick, impacting work, leisure activities, and even their wallets. The non-medical side effects
                            of Long COVID are also felt across the world. The total economic cost of Long COVID in the U.S. is estimated to sum to about $3.7 trillion <a href="https://www.cnbc.com/2022/11/30/why-long-covid-could-be-the-next-public-health-disaster.html" target="_blank" rel="noopener noreferrer"> <sup>[4]</sup></a>,
                            including reduced quality of life, reduced earnings, and increased medical expenses. In the United States, millions are out of work due to the effect of Long COVID, and this
                            spread is distributed rather unequally between races/ethnicities, thus heavily impacting the economy. */}
                            {/* {t("aboutText0Test")}  */}
                            {t("aboutText0")} <a href="https://www.seattletimes.com/seattle-news/health/long-covid-grips-some-washingtonians-and-perplexes-scientists-new-research-underway/" target="_blank" rel="noopener noreferrer"> <sup>[1]</sup></a>.
                            {t("aboutText0_1")} <a href="https://yourlocalepidemiologist.substack.com/p/long-covid-an-update-and-gauging" target="_blank" rel="noopener noreferrer"> <sup>[2]</sup></a> 
                            {t("aboutText0_2")} <a href="https://yourlocalepidemiologist.substack.com/p/long-covid-an-update-and-gauging" target="_blank" rel="noopener noreferrer"> <sup>[2]</sup></a>
                            {t("aboutText0_3")} <a href="https://pubmed.ncbi.nlm.nih.gov/33791733/" target="_blank" rel="noopener noreferrer"> <sup>[3]</sup></a>, 
                            {t("aboutText0_4")} <a href="https://www.cnbc.com/2022/11/30/why-long-covid-could-be-the-next-public-health-disaster.html" target="_blank" rel="noopener noreferrer"> <sup>[4]</sup></a>,
                            {t( "aboutText0_5")}
                        </p>
                    </section>

                    <section class="aboutText">
                        <h1 class="aboutTitle">{t("aboutTitle1")}</h1>
                        <p class="aboutText">
                            {t("aboutText1")}
                        </p>
                    </section>


                    <section class="space">
                        <h1 class="aboutTitle">{t("aboutTitle2")}</h1>
                        <p class="aboutText">
                            {/* We are a group of 14 undergraduate students from the <a href="https://ischool.uw.edu/" target="_blank" rel="noopener noreferrer" class="text-dark"> University of Washington Information School </a>
                            coming from all different backgrounds and concentrations. Led by Frank Martinez and Dr. Leo Morales, in partnership with the UW <a href="https://latinocenterforhealth.org/" target="_blank" rel="noopener noreferrer" class="text-dark">Latino Center for Health </a> and Adios COVID, we have been brought in to
                            research Long COVID—a little-known problem affecting communities across the world. Being from a Washington-based University, it was decided that we would uncover how Long COVID
                            is affecting the population in our great state, in particular, Latinos in Eastern Washington. Throughout our 10-week quarter,
                            we have developed this website and created an open-source research system, collecting data from both field and pre-existing
                            research. To learn more about everyone involved, scroll down. */}
                            {t("aboutText2Test")}
                        </p>
                    </section>

                    <section class="aboutText">
                        <h1 class="Title">{t("aboutTitle3")}</h1>
                        <p class="OrgName">
                            <Image
                                src={uwimg}
                                alt="UW-pic"
                                className="logo img-fluid"
                                priority
                            />
                            <b> {t("OrgName1")}</b>
                        </p>
                        <p className="OrgName">
                            <Image
                                src={lat_img}
                                alt="Latino-pic"
                                className="logo img-fluid"
                                priority
                            />
                            <b> {t("OrgName2")}</b>
                        </p>
                        <p class="aboutText">
                            {t("aboutText4")}
                        </p>
                        <h1 class="Title">{t("aboutTitle4")}</h1>
                        <div class="Names">
                            <p><a href="https://www.frankmartinez.xyz/" target="_blank" rel="noopener noreferrer" class="text-dark">Frank Martinez </a></p>
                            <p><a href="https://www.linkedin.com/in/valeria-fraga-495420248/" target="_blank" rel="noopener noreferrer" class="text-dark">Valeria Fraga </a></p>
                            <p><a href="mailto:erickim912@gmail.com" class="text-dark">Eric Kim </a></p>
                            <p><a href="https://www.linkedin.com/in/jeremy-dondoyano" target="_blank" rel="noopener noreferrer" class="text-dark">Jeremy Dondoyano </a></p>
                            <p><a href="mailto:xxb@uw.edu" class="text-dark">Xiaobing Xu </a></p>
                            <p><a href="https://github.com/raina" target="_blank" rel="noopener noreferrer" class="text-dark">Raina Scherer </a></p>
                            <p>Eunji Ahn </p>
                            <p><a href="https://www.linkedin.com/in/jyun1998/" target="_blank" rel="noopener noreferrer" class="text-dark">Jangwon Yun </a></p>
                            <p><a href="https://www.linkedin.com/in/kaarina-tulleau/" target="_blank" rel="noopener noreferrer" class="text-dark">Kaarina Tulleau </a></p>
                            <p><a href="https://www.linkedin.com/in/yash-katwal/" target="_blank" rel="noopener noreferrer" class="text-dark">Yash Katwal </a></p>
                            <p><a href="https://irisd-1.web.app/" target="_blank" rel="noopener noreferrer" class="text-dark">Yunyi Ding</a></p>
                            <p><a href="https://www.linkedin.com/in/jacqueline-cy-hsu" target="_blank" rel="noopener noreferrer" class="text-dark">Jacqueline Hsu </a></p>
                            <p><a href="https://www.linkedin.com/in/avirajsingh25" target="_blank" rel="noopener noreferrer" class="text-dark">Avi </a></p>
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