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
                    <h1 class="aboutTitle">Nuestra Tésis</h1>
                    <p class="aboutText">
                    La falta de acceso a servicios médicos de calidad y la inadecuada información y educación sobre Long Covid han dado lugar a una crisis de salud pública que afecta de forma desproporcionada a las comunidades latinas del este de Washington. En particular, la gente de zonas rurales y bajos recursos se encuentran afectados. Esta crisis se ve agravada por la escasez de infraestructuras médicas, la desconfianza en el gobierno y la falta de ayuda económica para tratamientos médicos. Para enfrentar a estos problemas, es necesario que haya una intervención gubernamental y una reforma de la política que aborde las raises de estos temas. Para satisfacer las necesidades de las comunidades afectadas por el Long Covid, las organizaciones comunitarias tienen que estar apoyados por planes de ayuda basados en métodos científicos y recibir más recursos para educar a los miembros de sus comunidades sobre la enfermedad.</p>
                </section>
                
                
                <section class="space">
                    <h1 class="aboutTitle">¿Quienes somos?</h1>
                    <p  class="aboutText"> 
                        Somos un grupo de 14 estudiantes universitarios asistiendo a la  
                            <a href = "https://ischool.uw.edu/" target="_blank" rel="noopener noreferrer">
                                Escuela de Información de la Universidad de Washington. 
                            </a> 
                        Tenemos una gran variedad de enfoques y de experiencias que nos han atraido a este proyecto. Frank Martinez y Dr. Leo Morales nos han líderado durante el proceso, junto con la Universidad de Washington,
                        <a href = "https://latinocenterforhealth.org/" target="_blank" rel="noopener noreferrer"> 
                        el UW Latino Center for Health,
                        </a> 
                        y Adios COVID. Nos han llamado para investigar al Long Covid, una enfermedad poco conocida que afecta a comunidades por todo el mundo. Siendo estudiantes de una universidad en el estado de Washington, nos reclutaron para descubrir cómo el Long Covid afecta a la población de nuestro gran estado, y en particular a la población latina del este de Washington. En estás últimas 10 semanas, desarrollamos esta página web y creamos un sistema de investigación de código abierto, coleccionando datos de nuestras propias investigaciones y de las ya existentes. Para obtener más información sobre toda la gente involucrada, desplácese hacia abajo.
                    </p>
                </section>

                <section class="aboutText">
                    <h1 class="Title">Organizaciones Involucradas:</h1>
                    <p class="OrgName">
                        <Image
                            src={uwimg}
                            alt="UW-pic"
                            className="logo img-fluid"
                            priority
                        />
                        <b> La Universidad de Washington</b>
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
                        Muchísimas gracias a todos que nos han ayudado de estas organizaciones durante este proyecto!
                    </p>
                    <h1 class="Title">Nuestro Equipo</h1>
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
    return <p className="alert alert-danger">La Página que Quiere Accesar No Existe</p>;
}