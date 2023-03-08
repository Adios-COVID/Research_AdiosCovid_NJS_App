import Image from 'next/image'
import { Inter } from '@next/font/google'
import homepic from "../public/homepage.jpg"
import persona from "../public/transparent_personas.png"
import location from "../public/Where.png"
import useTranslation from "next-translate/useTranslation"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Navbar />
      <div class="banner_main" id="home_banner">
        <div class="container">
          <div class="row">
            <div class="col-md">
              <Image
                src={homepic}
                alt="Homepage Logo"
                className="home_img"
                priority
              />
            </div>
            <div class="col-md">
                <h1 class={"home-heading"}>{t("home-heading")}</h1>
                <h3 class={"home_sub_heading1"}>{t("home_sub_heading1")}</h3>
                <p class={"home_p1"}>{t("home_p1")}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <Image
                src={persona}
                alt="Cartoon portrayal of latin family. Grandma is working on embroidery. Daughter is reading. Mother is adjusting grandmother's chair. Son is bringing in groceries."
                className="home_img"
                priority
              />
            </div>
            <div class="col-md">
                <h3 class={"home_sub_heading2"}> {t("home_sub_heading2")}</h3>
                <p class={"home_p2"}> {t("home_p2")}</p>
              <button type="button" id="tell_story" class="btn btn-info btn-md me-3"><a href="/SubmitData" id="access_data_toggle">{t("Tell Your Story")}</a></button>            
            </div>
          </div>
          <div class="row">
            <div class="col-md">
                <h3 class={"home_sub_heading3"}> {t("home_sub_heading3")}</h3>
                <p class={"home_p3"}> {t("home_p3")}</p>
            </div>
            <div class="col-md">
              <Image
                src={location}
                alt="Washington state divided by county, with pins in Grant county, Okanogan County, and Chelan county. In the background are pictures of different cities from those three counties."
                className="home_img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
