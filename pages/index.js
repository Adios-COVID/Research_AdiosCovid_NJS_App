import Image from 'next/image'
import { Inter } from '@next/font/google'
import homepic from "../public/homepage.jpg"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div class="banner_main">
        <div class="container">
            <div class="row">
              <div class="col-md">
                    <h1 class="home-heading">Effects of Long COVID</h1>
                    <h3 class="home_sub_heading">On Latino Communities in Eastern Washington</h3>
                    <p class="home_p"> As Long COVID continues to run its course on Latinos in Eastern Washington, we’re here to help by educating those around us, and inspiring change for communities in need.  </p>
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
        </div>
      </div>

    </>
  )
}
