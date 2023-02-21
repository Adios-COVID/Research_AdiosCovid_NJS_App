import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Data.module.css'

export default function DataPage() {
    return (
        <div class="container" className={styles.container}>
        <div class="row" id="section1">
            <div className={styles.media}>
                <Image
                    src="/data_img_1.png"
                    alt="..."
                    className={styles.media_img}
                    class="mr-3 img-fluid"
                    priority
                />

                <div class="media-body">
                    <h2>How We Collect Data</h2>
                    <p>Our team gathered two types of datasets: qualitative and quantitative data. Qualitative data was collected through surveys and interviews focused on the social aspects affecting individuals with Long COVID. The collected data was anonymized to protect the privacy of participants, with any identifying indicators removed. In addition, we collected quantitative data by performing web scraping and aggregating demographic data from Grant, Douglas, Okanogan, Lincoln, Ferry, Stevens, and Pend Oreille. These datasets were primarily obtained from the U.S. Census, the Washington State Department of Health, the Bureau of Labor Statistics, and the Pew Research Center. To ensure accuracy and consistency, we cleaned and normalized these datasets using Jupyter Notebook.</p>
                </div>
            </div>
        </div>
        <div class="row" className={styles.section3}>
            <div class="media">
                <div class="media-body">
                    <h2>Data & Findings</h2>
                    <p>
                    Based on our extensive research, we have determined that approximately 90,000 Latinos may be suffering from Long COVID, representing approximately 9-10% of the total Latino population. Those with more severe hospitalized conditions have a higher probability of developing Long COVID. Individuals under 18 years of age have a lower probability of developing Long COVID, while those in older age groups have the highest probability. Our research also indicates that female Latinos have a relatively higher probability of developing Long COVID. Even among individuals who were not hospitalized, females have approximately 6% higher probability of experiencing Long COVID compared to males.
                    </p>
                </div>
                <Image
                    src="/data_img_2.png"
                    alt="..."
                    className={styles.media_img}
                    class="mr-3 img-fluid"
                    priority
                />
            </div>
        </div>
        <div class="row" className={styles.section4}>
            <div className={styles.testbox}>
                <form action="/">
                <div class="banner">
                <h1 id="form-title">Submit Your Data</h1>
                </div>
                <p>Share your own experience with long covid to help us!</p>
                <p>We have google form that you can fill out. Your submission of data will help us a lot with our research!</p>
                <hr/>
            <fieldset>
            <legend>Your Information</legend>
            <div class="item" className={styles.item}>
                <div class="name-item" className={styles['name-item']}>
                <div>
                <input type="text" name="code" placeholder="ZIP Code" />
                </div>
                </div>
            </div>
            <div class="item">
            <label for="description">What is Your Experience with Long COVID?<span>*</span></label>
            <input id="description" type="text" name="text" required />
            </div>
            </fieldset>
            <div class="btn-block">
            <button id="submit_button" className={styles.submit_button} type="submit" href="/">SUBMIT</button>
            </div>
                </form>
            </div>
        </div>
    </div>
    );
}