import { useEffect, useState, react } from 'react';

export default function RepoPage() {
    const [termAgree, setTermAgree] = useState(false);
    const [disclaimerAgree, setDisclaimerAgree] = useState(false);

    const canBeSubmitted = () => {
        const isValid =
          termAgree && disclaimerAgree; //checkbox for terms & disclaimer
    
        if (isValid) {
          document.getElementById("btn1").removeAttribute("disabled");
        } else {
          document.getElementById("btn1").setAttribute("disabled", true);
        }
        console.log({termAgree, disclaimerAgree});
      };

      useEffect(() => canBeSubmitted());
    return (
        <div class="container" id="repo_container">
            <div class="row">
                <h2>Términos y Condiciones</h2>
                <ul class="terms">
                    <li>
                        Licencia: Los datos de Long Covid en este repositorio están licenciados bajo la Licencia MIT. Al utilizar los datos, aceptas cumplir con los términos de esta licencia.
                    </li>
                    <li>
                        Atribución: Si utilizas los datos de Long Covid de cualquier forma, debes atribuir la fuente de los datos citando el repositorio y a sus colaboradores.
                    </li>
                    <li>
                        Calidad de los datos: Los datos de Long Covid en este repositorio han sido aportados por varios individuos y organizaciones, y han sido sometidos a limpieza y validación de datos. No obstante, los datos pueden contener errores e incoherencias, es la responsabilidad del usuario evaluar la calidad de los datos antes de utilizarlos.
                    </li>
                    <li>
                        Conformidad: Los datos de Long Covid en este repositorio son únicamente para propósitos de investigación e información, y no deben utilizarse para propósitos de diagnóstico o tratamiento. Cualquier uso de los datos con objetivos clínicos debe cumplir con los requerimientos normativos, como la HIPAA o el GDPR.
                    </li>
                </ul>
                    <div class="form-check" >
                        <input
                            type="checkbox"
                            name="termAgree"
                            id="termAgree"
                            class="agree"
                            onClick={(e) => setTermAgree(e.target.checked)}
                            />
                        <label htmlFor="agree" class="agree_check"> Acepto las condiciones de uso.</label>
                    </div>
                </div>
            <div class="row">
                <h2> Aviso legal </h2>
                <p>Los datos de Long COVID en este repositorio se proporcionan `&quot;tal cual`&quot; y sin garantía de ningún tipo, expresa o implícita. El repositorio y sus colaboradores no representan ni garantizan la exactitud, integridad, confiabilidad o pertinencia de los datos para cualquier propósito en particular. El repositorio y sus colaboradores no serán responsables de ningún daño o perjuicio derivado del uso de los datos, ni de ningún daño directo, indirecto, incidental, especial o consecuente derivado de cualquier uso de los datos o de la imposibilidad de utilizarlos. Al utilizar los datos de Long COVID en este repositorio, usted asume todos los riesgos y la responsabilidad por el uso de los datos. Este descargo de responsabilidad se aplica a todos los usos de los datos, ya sea con propósitos de investigación, clínica u otros.</p>
                <div class="form-check">
                    <input
                        type="checkbox"
                        name="disclaimerAgree"
                        id="disclaimerAgree"
                        class="agree"
                        onClick={(e) => setDisclaimerAgree(e.target.checked)}
                        />
                    <label htmlFor="agree" class="agree_check"> Acepto el aviso legal.</label>
                </div>
            </div>
            <div class="row" id="data_repo">
                <h2>Nuestro repositorio de datos</h2>
                <p>El repositorio de datos de Long Covid es un repositorio de datos público y de código abierto que contiene datos anónimos relacionados con el impacto social y demográfico del Long Covid. El repositorio incluye datos cualitativos y cuantitativos, obtenidos a través de encuestas, entrevistas y web scraping. Los datos han sido extraídos por varias personas y organizaciones, y han sido sometidos a un proceso de limpieza y validación para garantizar su exactitud y coherencia. El objetivo del repositorio es apoyar la investigación y el análisis de Long Covid, e informar los esfuerzos de salud pública para hacer frente a los impactos a largo plazo de COVID-19. Para acceder al repositorio de datos, debe aceptar las condiciones de uso y la cláusula del aviso legal.</p>
                <button type="button" 
                        class="col-6 mx-auto btn btn-danger btn-rounded btn-md btn-block"
                        id="btn1">
                    <a href="https://github.com/Adios-COVID/research_adioscovid_app.git" 
                       class="text-light">
                        ENLACE AL REPOSITORIO DE CÓDIGO ABIERTO
                    </a>
                </button>
            </div>
        </div>
    )
}