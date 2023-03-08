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
              <div class="pop">
                <p>
                  This bar chart breaks down the estimated Latino population for the counties
                  that we track in Eastern Washington. This data is updated ____________________________,
                  and is sourced from our API ______________________________
                  The yellow portion of the chart represents the non-Latino population and
                  the red portion represents the Latino population in the given county. Hover over any of the
                  bars to toggle a tooltip, and click on the "Total Population" / "Latino Population" portions of the
                  key to filter the data to your liking. Please note these numbers are estimates.
                </p>
              {/* The visualization below shows how many Latinos there are in each of the Eastern Washington counties that we track. */}
              <PopulationBarChart />
              </div>
            </div>

          <div class="boxed">
            <div class="income">
              <p>
                This radial chart shows the income rates of Latinos by each county that we track. This data
                is updated _______________________________________, and is sourced from our API ____________________________
                Click on the green drop down-button to choose the county you would like to examine. See the key
                for details about what the colors on the chart mean. Note that the vertical labels on the chart are in
                terms of percentages, 0.1 being 10% and 1 being 100%. Please note these numbers are estimates.
              </p>
            {/* The visualization below shows the income rates of Latinos broken down by each county in Eastern Washington that we track. */}
            <IncomeVisualization />
            </div>
          </div>

          <div class="boxed">
              <p>
                This interactive map intends to show the impact of COVID and Long Covid on Washington communities. This map
                will show a heat map of COVID data and other relevent points such as healthcare access points, race and ethnic population,
                and more. Currently a work in progress
              </p>
            {/* Map below with various thesis proving information */}
            <MapPage />
          </div>
        </div>
        <Footer/>
       </>
      );
}