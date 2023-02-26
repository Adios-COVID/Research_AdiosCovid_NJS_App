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
        console.log({ termAgree, disclaimerAgree });
    };

    useEffect(() => canBeSubmitted());
    return (
        <div class="container" id="repo_container">
            <div class="row">
                <h2>Our Data Repository</h2>
                <p>The Long COVID data repository is a public, open source data repository that contains anonymized data related to the social and demographic impacts of Long COVID. The repository includes both qualitative and quantitative data, collected through surveys, interviews, and web scraping. The data has been contributed by various individuals and organizations, and has been subjected to data cleaning and validation to ensure accuracy and consistency. The repository is intended to support research and analysis of Long COVID, and to inform public health efforts to address the long-term impacts of COVID-19. To access the data repository, you must agree to the terms of usage and disclaimer.</p>
            </div>
            <div class="row">
                <h2>Terms of Usage</h2>
                <ul class="terms">
                    <li>
                        License: The Long COVID data in this repository is licensed under the MIT License. By using the data, you agree to comply with the terms of this license.
                    </li>
                    <li>
                        Attribution: If you use the Long COVID data in any way, you must attribute the source of the data by citing the repository and its contributors.
                    </li>
                    <li>
                        Data Quality: The Long COVID data in this repository has been contributed by various individuals and organizations, and has been subjected to data cleaning and validation. However, the data may still contain errors and inconsistencies, and it is your responsibility to assess the quality of the data before using it.
                    </li>
                    <li>
                        Compliance: The Long COVID data in this repository is for research and informational purposes only, and should not be used for diagnostic or treatment purposes. Any use of the data for clinical purposes must comply with relevant regulatory requirements, such as HIPAA, CCPA or GDPR.
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
                    <label htmlFor="agree" class="agree_check"> I agree to the terms of usage.</label>
                </div>
            </div>
            <div class="row">
                <h2>Disclaimer</h2>
                <p>The Long COVID data in this repository is provided `&quot;`as is`&quot;` and without warranty of any kind, express or implied. The repository and its contributors make no representations or warranties regarding the accuracy, completeness, reliability, or suitability of the data for any particular purpose. The repository and its contributors shall not be liable for any damages or injuries arising from the use of the data, or for any direct, indirect, incidental, special, or consequential damages arising from any use of the data or the inability to use the data. By using the Long COVID data in this repository, you assume all risks and responsibility for the use of the data. This disclaimer applies to all uses of the data, whether for research, clinical, or other purposes.</p>
                <div class="form-check">
                    <input
                        type="checkbox"
                        name="disclaimerAgree"
                        id="disclaimerAgree"
                        class="agree"
                        onClick={(e) => setDisclaimerAgree(e.target.checked)}    // Check these to agree to view repo.
                    />
                    <label htmlFor="agree" class="agree_check"> I agree to the disclaimer.</label>
                </div>
            </div>
            <div class="row">
                <button type="button"
                    class="col-6 mx-auto btn btn-danger btn-rounded btn-md btn-block"
                    id="btn1">
                    <a href="https://github.com/Adios-COVID/research_adioscovid_app.git" target="_blank" rel="noopener noreferrer"
                        class="text-light">
                        LINK TO OPEN SOURCE REPOSITORY
                    </a>
                </button>
            </div>
        </div>
    )
}