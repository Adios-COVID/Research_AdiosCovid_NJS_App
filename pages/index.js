import Image from 'next/image'
import { Inter } from '@next/font/google'
import homepic from "../public/homepage.jpg"
import persona from "../public/transparent_personas.png"
import location from "../public/Where.png"
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { Dropdown } from "@nextui-org/react";
import { useRouter } from "next/router";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <>
//       <div class="banner_main" id="home_banner">
//         <div class="container">
//             <div class="row">
//               <div class="col-md">
//                     <h1 class="home-heading">Effects of Long COVID</h1>
//                     <h3 class="home_sub_heading1">On Latino Communities in Eastern Washington</h3>
//                     <p class="home_p1"> As Long COVID continues to run its course on Latinos in Eastern Washington, we’re here to help by educating those around us, and inspiring change for communities in need.  </p>
//               </div>
//               <div class="col-md">
//               <Image
//                 src={homepic}
//                 alt="Homepage Logo"
//                 className="home_img"
//                 priority
//               />
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-md">
//               <Image
//                 src={persona}
//                 alt="Cartoon portrayal of latin family. Grandma is working on embroidery. Daughter is reading. Mother is adjusting grandmother's chair. Son is bringing in groceries."
//                 className="home_img"
//                 priority
//               />
//               </div>
//               <div class="col-md">
//                     <h3 class="home_sub_heading2"> Who are our participants?</h3>
//                     <p class="home_p2"> The Latino spirit is mighty, proud, warm, and driven. Although our participants have found themselves experiencing a significant amount of hardship, there is little that can be done to prevent the Latino spirit from perservering. However, things could be made easier for them. During our interviews, we heard that our participants have a hard time accessing medical care and basic health services. For those that are experiencing Long COVID, they are often forced to return to work prematurely to make ends meet and take care of their families. This reality could be improved upon, and we hope to inspire a part of that change.</p>
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-md">
//                     <h3 class="home_sub_heading3"> Where are our participants from? </h3>
//                     <p class="home_p3"> Eastern Washington is home to some of the most beautiful sceneries that exist in the United States. The most notable feature of this landscape is undoubtably the tall mountains and wide rivers. However, this beautiful environment brings about significant challenges to the people living there. The cold winters often make working out in the orchards and fields difficult, and the closest medical facility may be a few miles out of reach. Our participants have proven themselves to be optimistic individuals despite the challenges that they face.</p>
//               </div>
//               <div class="col-md">
//               <Image
//                 src={location}
//                 alt="Washington state divided by county, with pins in Grant county, Okanogan County, and Chelan county. In the background are pictures of different cities from those three counties."
//                 className="home_img"
//                 priority
//               />
//               </div>
//             </div>
//         </div>
//       </div>

//     </>
//   )
// }

export default function Home() {
  const { t } = useTranslation("common");


  // const [selected, setSelected] = React.useState(new Set(["English"]));
  // const selectedValue = React.useMemo(
  //   () => Array.from(selected).join(", ").replaceAll("_", " "),
  //   [selected]
  // );

  return (
    <>
      <Navbar />
      <div class="banner_main" id="home_banner">
        <div class="container">
            <div class="row">
              <div class="col-md">
                <h1 class={"home-heading"}>{t("home-heading")}</h1>
                <h3 class={"home_sub_heading1"}>{t("home_sub_heading1")}</h3>
                <p class={"home_p1"}>{t("home_p1")}</p>
              </div>
              <div class="col-md">
              <Image
                src={homepic}
                alt="Homepage Logo"
                className="home_img"
                priority
              />
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