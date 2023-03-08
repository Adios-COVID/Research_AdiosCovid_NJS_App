import React from 'react';
import Image from 'next/Image';
import Link from "next/link";
import Doc_Image from '../public/documentation_illustration.png'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import useTranslation from "next-translate/useTranslation";

export default function DocumentationPage() {
    const { t } = useTranslation("common");
    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row align-items-center" id='documentation_row'>
                    <div class="col">
                        <h1> {t("Documentation")} </h1>
                        <p> 
                            {t("Documentation-Content")}
                        </p>
                    </div>
                    <div class="col">
                        <Image src={Doc_Image} alt="Cartoon of woman and the download symbol" class="doc_image"/>
                    </div>
                </div>
                <div class="row align-items-center" id='documentation_row'>
                    <div class="col">
                        <button type="button" id="access_data" class="btn btn-danger btn-md me-3">
                            <Link href="Data_Documentation_Long_COVID_Research.pdf" target="_blank" rel="noreferrer" id="access_data_toggle">
                                {t("Research Documentation")}
                            </Link>
                        </button>
                    </div>
                    <div class="col">
                        <button type="button" id="access_data" class="btn btn-danger btn-md me-3">
                            <Link href="Documentation_Data_Pipeline.pdf" target="_blank" rel="noreferrer" id="access_data_toggle">
                                {t("Data Pipeline Documentation")}
                            </Link>
                        </button>
                    </div>
                    <div class="col">
                        <button type="button" id="access_data" class="btn btn-danger btn-md me-3">
                            <Link href="Web_Page_Documentation.pdf" target="_blank" rel="noreferrer" id="access_data_toggle">
                               {t("Website Documentation")}
                            </Link>
                        </button>
                    </div>
                </div>
            </div >
            <Footer />
        </div>
    );
}
