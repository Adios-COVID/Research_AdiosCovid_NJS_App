import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div class="banner_main" className={styles.banner_main}>
        <div class="container">
            <div class="row">
              <div class="col-md">
                    <h1 id="home-heading">Effects of Long COVID</h1>
                    <h3 id="home_sub_heading" className={styles.home_sub_heading}>On Latino Communities in Eastern Washington</h3>
                    <p id="home_p" className={styles.home_p}> As Long COVID continues to run its course on Latinos in Eastern Washington, we’re here to help by educating those around us, and inspiring change for communities in need.  </p>
              </div>
              <div class="col-md">
              <Image
                src="/homepage.jpg"
                alt="Homepage Logo"
                className={styles.home_p}
                priority
              />
              </div>
            </div>
        </div>
      </div>

    </>
  )
}
