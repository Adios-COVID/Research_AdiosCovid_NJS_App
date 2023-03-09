import React from 'react';
import Image from 'next/image';
import Doc_Image from '../public/documentation_illustration.png'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
<<<<<<< HEAD
import Dropdown from 'react-bootstrap/Dropdown';
=======
import useTranslation from "next-translate/useTranslation";
>>>>>>> origin/main

export default function DocumentationPage() {
    const { t } = useTranslation("common");
    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row align-items-center" id='documentation_row'>
<<<<<<< HEAD
                    <div class="col-md-8">
                        <h1> Documentation </h1>
=======
                    <div class="col">
                        <h1> {t("Documentation")} </h1>
>>>>>>> origin/main
                        <p> 
                            {t("Documentation-Content")}
                        </p>
                    </div>
                    <div class="col-md-4">
                        <Image src={Doc_Image} alt="Cartoon of woman and the download symbol" class="doc_image"/>
                    </div>
                </div>
<<<<<<< HEAD
                <div class="row" id='documentation_dropdown'>
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" className="btn-rounded btn-md">
                            Select Documentation
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="docu_link">            
                            <Dropdown.Item href="Data_Documentation_Long_COVID_Research.pdf">Research Documentation</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="Documentation_Data_Pipeline.pdf">Data Pipeline Documentation</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="Web_Page_Documentation.pdf">Website Documentation</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
=======
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
>>>>>>> origin/main
                </div>
            </div >
            <Footer />
        </div>
    );
}
