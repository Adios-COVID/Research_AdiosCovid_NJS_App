import React from 'react';
import Image from 'next/image';
import Doc_Image from '../public/documentation_illustration.png'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Dropdown from 'react-bootstrap/Dropdown';

export default function DocumentationPage() {
    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row align-items-center" id='documentation_row'>
                    <div class="col-md-8">
                        <h1> Documentation </h1>
                        <p> 
                            The end-to-end system that we have constructed has been created with the contribution of three teams. This page is meant to serve as a guide for navigating the code behind each of the different parts of our project. Each team has prepared a PDF to guide external viewers as they explore the infraestructure, you will find each team's PDF linked below.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <Image src={Doc_Image} alt="Cartoon of woman and the download symbol" class="doc_image"/>
                    </div>
                </div>
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
                </div>
            </div >
            <Footer />
        </div>
    );
}
