import React from 'react';
import useTranslation from "next-translate/useTranslation";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function SubmitData() {
    const { t } = useTranslation("common");
    return (
        <>
            <Navbar />
            <div class="row" id="section4">
                <div class="testbox">
                    <form action="mailto:louiseliu828@gmail.com?subject=Long Covid Research University of Washington - Data Submission" method="post" enctype="text/plain">
                        <div class="banner">
                            <h1 id="form-title">{t("form-title")}</h1>
                        </div>
                        <p>{t("form-content1")}</p>
                        <p>{t("form-content2")}</p>
                        <hr />
                        <fieldset>
                            <legend>{t("form-legend")}</legend>
                            <div class="item">
                                <div class="name-item">
                                    <div>
                                        <input type="text" name="zipcode" placeholder="ZIP Code" />
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <label for="description">{t("form-description0")}<span>*</span></label>
                                <div>
                                        <input type="text" name="hispanic/latino" placeholder="Yes/No" />
                                </div>
                            </div>
                            <div class="item">
                                <label for="description">{t("form-description1")}<span>*</span></label>
                                <input id="description" type="text" name="description" required />
                            </div>
                        </fieldset>
                        <div class="btn-block">
                            <button id="submit_button" type="submit" value="send" href="/">{t("SUBMIT")}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )

}
