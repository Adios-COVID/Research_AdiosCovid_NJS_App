import React from 'react';
import Image from 'next/image'
import dataimg1 from '../public/data_img_1.png'
import dataimg2 from '../public/data_img_2.png'
import IncomeVisualization from '../components/Income_viz.js'
import PopulationBarChart from '../components/population_bar_vis'
import AgeBarVis from '../components/age_bar_vis'
import GenderBarVis from '../components/gender_bar_vis'
import MapPage from './Map.js'
import useTranslation from "next-translate/useTranslation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link'

export default function DataPage() {
  const { t } = useTranslation("common");
  return (
    <>
    <Navbar />
      <div class="container" id="data_page">
          <div class="row" id="data_row">
            <div id="data_media">
              <div class="col-md-6 float-md-left">
                <Image
                  src={dataimg1}
                  alt="Data page First image"
                  className="data_media_img"
                />
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
              <p>
              {t("Data-Viz3")}
              </p>
            {/* Map below with various thesis proving information */}
            <MapPage />
          </div>

            <div class="boxed">
              <div class="pop">
                <p>
                {t("Data-Viz1")}{" "}
                <Link href="https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-populations" target="_blank" rel="noopener noreferrer"> API. </Link>{" "}
                {t("Data-Viz1-0")}
                </p>
                <p>
                {t("Data-Viz1-1")}
                </p>
              {/* The visualization below shows how many Latinos there are in each of the Eastern Washington counties that we track. */}
              <PopulationBarChart />
              </div>
            </div>

          <div class="boxed">
            <div class="income">
              <p>
              {t("Data-Viz2")}{" "}
              <Link href="https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-income" target="_blank" rel="noopener noreferrer"> API </Link>{" "}
              {t("Data-Viz2-0")}
              </p>
              <p>
                {t("Data-Viz2-1")}
              </p>
            {/* The visualization below shows the income rates of Latinos broken down by each county in Eastern Washington that we track. */}
            <IncomeVisualization />
            </div>
          </div>

          <div class="boxed">
            <p>This bar chart breaks down the estimated Latino Hospitalized population and Non Hospitalized population for the different age and gender group that we track in Eastern Washington. This data is updated in 03/10/23 and is sourced from our API. The yellow portion of the chart represents the hospitalized population and the red portion represents the non-hospitalized population in the given group. Hover over any of the bars to toggle a tooltip, and click on the 'Hospitalized' / 'Non Hospitalized' portions of the key to filter the data to your liking. Please note these numbers are estimates.</p>
            <p>It is notable that the 18-49 age group had a higher likelihood of hospitalization than other age groups. Additionally, females were more likely to be hospitalized than males. These visualizations suggest that working-age groups are more vulnerable to hospitalization, which may result in an increased economic burden. Also, they support our thesis statement that Latino communities encounter a shortage of medical resources, irrespective of age or gender.</p>
            <div class="vis-container">
              <div class="age">
              {/* The visualization below shows the Hospitalized status broken down by age group in Eastern Washington that we track. */}
              <AgeBarVis />
              </div>
              <div class="gender">
              {/* The visualization below shows the Hospitalized status broken down by gender group in Eastern Washington that we track. */}
              <GenderBarVis />
              </div>
            </div>
          </div>

        </div>
      <Footer />
      </>
   );
}