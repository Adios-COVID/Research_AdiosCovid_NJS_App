import React from 'react';
import Image from 'next/image'
<<<<<<< HEAD
// import styles from '@/styles/Data.module.css'
import dataimg1 from '../public/data_img_1.png'
import dataimg2 from '../public/data_img_2.png'
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// export default function DataPage() {
//     return (
//         <div class="container" id="data_page">
//         <div class="row" id="data_row">
//             <div class="media" id="data_media">
//                 <Image
//                     src={dataimg1}
//                     alt="Data page First image"
//                     className="data_media_img mr-3"
//                 />

//                 <div class="media-body">
//                     <h2 class={"home-heading"}>How We Collect Data</h2>
//                     <p>Our team gathered two types of datasets: qualitative and quantitative data. Qualitative data was collected through surveys and interviews focused on the social aspects affecting individuals with Long COVID. The collected data was anonymized to protect the privacy of participants, with any identifying indicators removed. In addition, we collected quantitative data by performing web scraping and aggregating demographic data from Grant, Douglas, Okanogan, Lincoln, Ferry, Stevens, and Pend Oreille. These datasets were primarily obtained from the U.S. Census, the Washington State Department of Health, the Bureau of Labor Statistics, and the Pew Research Center. To ensure accuracy and consistency, we cleaned and normalized these datasets using Jupyter Notebook.</p>
//                 </div>
//             </div>
//         </div>
//         <div class="row" id="data_row">
//             <div class="media" id="data_media">
//                 <div class="media-body">
//                     <h2>Data & Findings</h2>
//                     <p>
//                     Based on our extensive research, we have determined that approximately 90,000 Latinos may be suffering from Long COVID, representing approximately 9-10% of the total Latino population. Those with more severe hospitalized conditions have a higher probability of developing Long COVID. Individuals under 18 years of age have a lower probability of developing Long COVID, while those in older age groups have the highest probability. Our research also indicates that female Latinos have a relatively higher probability of developing Long COVID. Even among individuals who were not hospitalized, females have approximately 6% higher probability of experiencing Long COVID compared to males.
//                     </p>
//                 </div>
//                 <Image
//                     src={dataimg2}
//                     alt="Data page second image"
//                     className="data_media_img mr-3"
//                 />
//             </div>
//         </div>
//         <div class="row" id="section4">
//             <div class="testbox">
//                 <form action="/">
//                 <div class="banner">
//                 <h1 id="form-title">Submit Your Data</h1>
//                 </div>
//                 <p>Share your own experience with long covid to help us!</p>
//                 <p>We have google form that you can fill out. Your submission of data will help us a lot with our research!</p>
//                 <hr/>
//             <fieldset>
//             <legend>Your Information</legend>
//             <div class="item">
//                 <div class="name-item">
//                 <div>
//                 <input type="text" name="code" placeholder="ZIP Code" />
//                 </div>
//                 </div>
//             </div>
//             <div class="item">
//             <label for="description">What is Your Experience with Long COVID?<span>*</span></label>
//             <input id="description" type="text" name="text" required />
//             </div>
//             </fieldset>
//             <div class="btn-block">
//             <button id="submit_button" type="submit" href="/">SUBMIT</button>
//             </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//     );
// }

export default function DataPage() {
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
        <div class="container" id="data_page">
        <div class="row" id="data_row">
            <div class="media" id="data_media">
=======
import dataimg1 from '../public/data_img_1.png'
import dataimg2 from '../public/data_img_2.png'
import IncomeVisualization from '../components/Income_viz.js'
import PopulationBarChart from '../components/population_bar_vis'
import MapPage from './Map.js'
import { Black_And_White_Picture } from '@next/font/google';
import useTranslation from "next-translate/useTranslation";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function DataPage() {
  const { t } = useTranslation("common");
  return (
    <>
    <Navbar />
   
      <div class="container" id="data_page">
          <div class="row" id="data_row">
            <div id="data_media">
              <div class="col-md-6 float-md-left">
>>>>>>> origin/main
                <Image
                  src={dataimg1}
                  alt="Data page First image"
                  className="data_media_img"
                />
<<<<<<< HEAD

                <div class="media-body">
                    <h2 class={"data-heading1"}>{t("data-heading1")}</h2>
                    <p class={"data_p1"}>{t("data_p1")}</p>
                </div>
            </div>
        </div>
        <div class="row" id="data_row">
            <div class="media" id="data_media">
                <div class="media-body">
                    <h2 class={"data-heading2"}>{t("data-heading2")}</h2>
                    <p class={"data_p2"}>
                        {t("data_p2")}
                    </p>
                </div>
                <Image
                    src={dataimg2}
                    alt="Data page second image"
                    className="data_media_img mr-3"
                />
            </div>
        </div>
        <div class="row" id="section4">
            <div class="testbox">
                <form action="/">
                <div class="banner">
                <h1 id="form-title" class={"form-title"}>{t("form-title")}</h1>
                </div>
                <p class={"form-content"}>{t("form-content")}</p>
                <p class={"form-content2"}>{t("form-content2")}</p>
                <hr/>
            <fieldset>
            <legend class = {"form-legend"}>{t("form-legend")}</legend>
            <div class="item">
                <div class="name-item">
                <div>
                <input type="text" name="code" placeholder="ZIP Code" />
                </div>
                </div>
            </div>
            <div class="item">
            <label for="description" class={"form-description"}>{t("form-description")}<span>*</span></label>
            <input id="description" type="text" name="text" required />
            </div>
            </fieldset>
            <div class="btn-block">
            <button id="submit_button" class={"SUBMIT"} type="submit" href="/">{t("SUBMIT")}</button>
=======
              </div>
              <div class="col-md-6 float-md-right">
                <h2>{t("data-heading1")}</h2>
                <p>{t("data_p1")}</p>
              </div>
            </div>
          </div>
          <div class="row" id="data_row">
              <div class="col-md-6 float-md-left">
                <h2>{t("data-heading2")}</h2>
                <p>
                  {t("data_p2")}
                </p>
              </div>
              <div class="col-md-6 float-md-right">
              <Image
                src={dataimg2}
                alt="Data page second image"
                className="data_media_img"
              />
            </div>
          </div>

            <div class="boxed">
              <div class="pop">
                <p>
                {t("Data-Viz1")}
                </p>
              {/* The visualization below shows how many Latinos there are in each of the Eastern Washington counties that we track. */}
              <PopulationBarChart />
              </div>
>>>>>>> origin/main
            </div>

          <div class="boxed">
            <div class="income">
              <p>
              {t("Data-Viz2")}
              </p>
            {/* The visualization below shows the income rates of Latinos broken down by each county in Eastern Washington that we track. */}
            <IncomeVisualization />
            </div>
          </div>

          <div class="boxed">
              <p>
              {t("Data-Viz3")}
              </p>
            {/* Map below with various thesis proving information */}
            <MapPage />
          </div>
        </div>
<<<<<<< HEAD
    </div>
    <Footer />
    </>
    );
=======
        <Footer/>
       </>
      );
>>>>>>> origin/main
}