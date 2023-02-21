import React from 'react';
import Image from 'next/image'
import styles from '@/styles/About.module.css'

export default function About(props) {
    const personData = props.personData;
    return (
        <div className="margindesign">
        <main className={styles.body}>
            <div className={styles.aboutText}>
                <section className={styles.aboutText}>
                    <h1 className={styles.aboutTitle}>Our Thesis</h1>
                    <p className={styles.aboutText}>
                    The lack of access to quality medical and health services, coupled with inadequate information and education about Long Covid 
                    has resulted in a public health crisis disproportionately affecting Latino communities in Eastern Washington, particularly those 
                    from low-income and rural backgrounds. This crisis is further exacerbated by a shortage of medical infrastructure, mistrust of the government, 
                    and limited financial assistance for medical treatments. To address this issue, there needs to be a comprehensive government intervention and 
                    policy reform that addresses these underlying issues and provides resources for training in the assessment and treatment of Long COVID and increasing 
                    the number of Spanish-speaking providers in Eastern Washington. To meet the needs of communities impacted by Long Covid, community-based organizations
                     need to be empowered with education about the illness and research-driven plans for assistance. 
                    </p>
                </section>
                
                
                <section className="space">
                    <h1 className={styles.aboutTitle}>Who we are</h1>
                    <p  className={styles.aboutText}>
                    We are a group of 14 undergraduate students from the <a href = "https://ischool.uw.edu/" target="_blank" rel="noopener noreferrer">University of Washington Information School </a> 
                    coming from all different backgrounds and concentrations. Led by Frank Martinez and Dr. Leo Morales, in partnership with the UW 
                    <a href = "https://latinocenterforhealth.org/" target="_blank" rel="noopener noreferrer"> Latino Center for Health </a> and Adios COVID, we have been brought in to 
                    research Long COVID—a little-known problem affecting communities across the world. Being from a Washington-based University, it was decided that we would uncover how Long COVID 
                    is affecting the population in our great state, in particular, Latinos in Eastern Washington. Throughout our 10-week quarter,
                    we have developed this website and created an open-source research system, collecting data from both field and pre-existing
                    research. To learn more about everyone involved, scroll down.
                    </p>
                </section>

                <section className={styles.aboutText}>
                    <h1 className="Title">Organizations Involved:</h1>
                    <p className={styles.OrgName}>
                        <Image
                            src="/UW.png"
                            alt="UW-pic"
                            className={styles.logo}
                            priority
                        />
                        <b> University of Washington</b>
                    </p>
                    <p className={styles.OrgName}>
                        <Image
                            src="/Latino_Center_for_Health.png"
                            alt="Latino-pic"
                            className={styles.logo}
                            priority
                        />
                        <b> UW Latino Center for Health</b>
                    </p>
                    <p className={styles.aboutText}>
                        Huge thanks to everyone from these organizations who helped us along the way! 
                         {/* <ul>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                        </ul> */}
                    </p>
                    <h1 className="Title">Our Team</h1>
                    <div>
                        <Image
                            src="/Apple_Avatar.png"
                            alt="Apple_Avatar-pic"
                            className={styles.people_avatar}
                            priority
                        />
                        
                    </div>
                    <p className={styles.aboutText}> 
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet  et dolore magna
                    </p>
                    <p className={styles.aboutText}>
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