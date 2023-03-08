import React from 'react';
import Image from 'next/image'
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
            <div class="media" id="data_media">
              <Image
                src={dataimg1}
                alt="Data page First image"
                className="data_media_img mr-3"
              />
              <div class="media-body">
                <h2>{t("data-heading1")}</h2>
                <p>{t("data_p1")}</p>
              </div>
            </div>
          </div>
          <div class="row" id="data_row">
            <div class="media" id="data_media">
              <div class="media-body">
                <h2>{t("data-heading2")}</h2>
                <p>
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

            <div class="boxed">
              <div class="media-body">
                <p>
                  {t("Data-Viz1")}
                </p>
              </div>
              {/* The visualization below shows how many Latinos there are in each of the Eastern Washington counties that we track. */}
              <PopulationBarChart />
            </div>

          <div class="boxed">
            <div class="media-body">
              <p>
                {t("Data-Viz2")}
              </p>
            </div>
            {/* The visualization below shows the income rates of Latinos broken down by each county in Eastern Washington that we track. */}
            <IncomeVisualization />
          </div>

          <div class="boxed">
            <div class="media-body">
              <p>
                {t("Data-Viz3")}
              </p>
            </div>
            {/* Map below with various thesis proving information */}
            <MapPage />
          </div>
        </div>
        <Footer/>
       </>
      );
}