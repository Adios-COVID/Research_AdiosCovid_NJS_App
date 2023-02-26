import React from 'react';
import Image from 'next/image'
import uwimg from '../public/UW.png'
import lat_img from '../public/Latino_Center_for_Health.png'
import avatar from '../public/Apple_Avatar.png'

export default function About(props) {
    const personData = props.personData;
    return (
        <div class="margindesign">
        <main class="body">
            <div class="aboutText">
                <section class="aboutText">
                    <h1 class="aboutTitle">Our Thesis</h1>
                    <p class="aboutText">
                    The lack of access to quality medical and health services, coupled with inadequate information and education about Long Covid 
                    has resulted in a public health crisis disproportionately affecting Latino communities in Eastern Washington, particularly those 
                    from low-income and rural backgrounds. This crisis is further exacerbated by a shortage of medical infrastructure, mistrust of the government, 
                    and limited financial assistance for medical treatments. To address this issue, there needs to be a comprehensive government intervention and 
                    policy reform that addresses these underlying issues and provides resources for training in the assessment and treatment of Long COVID and increasing 
                    the number of Spanish-speaking providers in Eastern Washington. To meet the needs of communities impacted by Long Covid, community-based organizations
                     need to be empowered with education about the illness and research-driven plans for assistance. 
                    </p>
                </section>
                
                
                <section class="space">
                    <h1 class="aboutTitle">Who we are</h1>
                    <p  class="aboutText">
                    We are a group of 14 undergraduate students from the <a href = "https://ischool.uw.edu/" target="_blank" rel="noopener noreferrer">University of Washington Information School </a> 
                    coming from all different backgrounds and concentrations. Led by Frank Martinez and Dr. Leo Morales, in partnership with the UW 
                    <a href = "https://latinocenterforhealth.org/" target="_blank" rel="noopener noreferrer"> Latino Center for Health </a> and Adios COVID, we have been brought in to 
                    research Long COVID—a little-known problem affecting communities across the world. Being from a Washington-based University, it was decided that we would uncover how Long COVID 
                    is affecting the population in our great state, in particular, Latinos in Eastern Washington. Throughout our 10-week quarter,
                    we have developed this website and created an open-source research system, collecting data from both field and pre-existing
                    research. To learn more about everyone involved, scroll down.
                    </p>
                </section>

                <section class="aboutText">
                    <h1 class="Title">Organizations Involved:</h1>
                    <p class="OrgName">
                        <Image
                            src={uwimg}
                            alt="UW-pic"
                            className="logo img-fluid"
                            priority
                        />
                        <b> University of Washington</b>
                    </p>
                    <p className="OrgName">
                        <Image
                            src={lat_img}
                            alt="Latino-pic"
                            className="logo"
                            priority
                        />
                        <b> UW Latino Center for Health</b>
                    </p>
                    <p class="aboutText">
                        Huge thanks to everyone from these organizations who helped us along the way! 
                    </p>
                    <h1 class="Title">Our Team</h1>
                    <div>
                        <Image
                            src={avatar}
                            alt="Apple_Avatar-pic"
                            className="people_avatar"
                            priority
                        />  
                    </div>
                </section>
            </div>
        </main >
    </div >
    );
}

export function ErrorPage() {
    return <p className="alert alert-danger">Page not found</p>;
}