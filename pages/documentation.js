import React from 'react';
import Image from 'next/image';
import Doc_Image from '../public/documentation_illustration.png'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Dropdown from 'react-bootstrap/Dropdown'
import useTranslation from "next-translate/useTranslation";

export default function DocumentationPage() {
    const { t } = useTranslation("common");
    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row align-items-center" id='documentation_row'>
                    <div class="col-md-8">
                        <h1> {t("Documentation")} </h1>
                        <p> 
                            {t("Documentation-Content")}
                        </p>
                        <h1> {t("Documentation-Disclaimer")} </h1>
                        <p> 
                            {t("Documentation-Disclaimer-Content")}
                        </p>
                    </div>
                    <div class="col-md-4">
                        <Image src={Doc_Image} alt="Cartoon of woman and the download symbol" class="doc_image"/>
                    </div>
                </div>
                <div class="row" id='documentation_dropdown'>
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" className="btn-rounded btn-md">
                            {t("Select Documentation")}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="docu_link">            
                            <Dropdown.Item href="Data_Documentation_Long_COVID_Research.pdf">{t("Research Documentation")}</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="Data Pipeline Documentation.pdf">{t("Data Pipeline Documentation")}</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="Web_Page_Documentation.pdf">{t("Website Documentation")}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div >
            <Footer />
        </div>
    );
}
