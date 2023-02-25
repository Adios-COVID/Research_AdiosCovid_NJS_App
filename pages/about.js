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
                    <h1 class="aboutTitle">What is Long COVID?</h1>
                    <p class="aboutText">
                    It goes without saying that COVID-19 has impacted the lives of many across the world, but something that is seldom discussed is what happens to the body after 
                    COVID subsides. Symptoms lingering after an individual has recovered from COVID is what is known as Long COVID <a href = "https://ischool.uw.edu/"> <sup>[1]</sup></a>. These symptoms can range from brain fog to 
                    depression or anxiety and have an unknown duration as of right now. Even scarier, Long COVID has been noted as a cause of death on certain individuals’ death
                    certificates, with the highest Long COVID death rate being among American Indian or Alaska Native males ages 85+. Long COVID is still very much under research, 
                    as there is not a set definition of Long COVID, nor does anybody know what the cause is, all we know is that it is here and it is hitting many communities and 
                    populations across the world. The wide variety of symptoms affects the everyday life of those who are sick, impacting work, leisure activities, and even their 
                    wallets. The non-medical side effects of Long COVID are felt across the world in an economic sense. The total economic cost of Long COVID is estimated to sum
                    to about $3.7 trillion, spanning reduced quality of life, reduced earnings, and increased medical expenses. In the United States, millions are out of work
                    due to the effect of Long COVID, and this spread is distributed rather unequally between races/ethnicities, thus heavily impacting the economy.
                    </p>
                </section>

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
                         {/* <ul>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                        </ul> */}
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
                    <p className="aboutText"> 
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet  et dolore magna
                    </p>
                    <p className="aboutText">
                        Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet  et dolore magna 
                    </p>
                </section>
            </div>

            {/* <div className="aboutUs">
                <h1 className="center">Who We Are</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="cardPeople">
                                <div className="col-sm-auto col-xl-12">
                                    <img className="card-img-top" src="img/person1.jpg" alt="XXX Info" />
                                    <div className="card-body">
                                        <Link to={'/about/'+personData[0].Name} className="card-title">{personData[0].Name}</Link>
                                        <p className="card-text">Hobby: design, video</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="cardPeople">
                                <div className="col-sm-auto col-xl-12">
                                    <img className="card-img-top" src="img/person2.jpg" alt="XXX Info" />
                                    <div className="card-body">
                                        <Link to={'/about/'+personData[1].Name} className="card-title">{personData[1].Name}</Link>
                                        <p className="card-text">Hobby: Music, video game</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="cardPeople">
                                <div className="col-sm-auto col-xl-12">
                                    <img className="card-img-top" src="img/person3.jpg" alt="XXXX Info" />
                                    <div className="card-body">
                                        <Link to={'/about/'+personData[2].Name} className="card-title">{personData[2].Name}</Link>
                                        <p className="card-text">Hobby: Movies, travel</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="cardPeople">
                                <div className="col-sm-auto col-xl-12">
                                    <img className="card-img-top" src="img/person4.jpg" alt="=XXX Info" />
                                    <div className="card-body">
                                        <Link to={'/about/'+personData[3].Name} className="card-title">{personData[3].Name}</Link>
                                        <p className="card-text">Hobby:</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


        </main >
    </div >
    );
}

export function ErrorPage() {
    return <p className="alert alert-danger">Page not found</p>;
}