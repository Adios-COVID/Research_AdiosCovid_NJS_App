import React from 'react';
import Image from 'next/Image';
import Link from "next/link";
import Doc_Image from '../public/documentation_illustration.png'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DocumentationPage() {
    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row align-items-center" id='documentation_row'>
                    <div class="col">
                        <h1> Documentation </h1>
                        <p> 
                            The end-to-end system that we have constructed has been created with the contribution of three teams. This page is meant to serve as a guide for navigating the code behind each of the different parts of our project. Each team has prepared a PDF to guide external viewers as they explore the infraestructure, you will find each team's PDF linked below.
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
                                Research Documentation
                            </Link>
                        </button>
                    </div>
                    <div class="col">
                        <button type="button" id="access_data" class="btn btn-danger btn-md me-3">
                            <Link href="Documentation_Data_Pipeline.pdf" target="_blank" rel="noreferrer" id="access_data_toggle">
                                Data Pipeline Documentation
                            </Link>
                        </button>
                    </div>
                    <div class="col">
                        <button type="button" id="access_data" class="btn btn-danger btn-md me-3">
                            <Link href="Web_Page_Documentation.pdf" target="_blank" rel="noreferrer" id="access_data_toggle">
                                Website Documentation
                            </Link>
                        </button>
                    </div>
                </div>
            </div >
            <Footer />
        </div>
    );
}
