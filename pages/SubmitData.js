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
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfpfRDn4qVNpUVGxizBp1N-V__JsDbipu_bTZf6Jex8G5uVgA/viewform?embedded=true" width="640" height="2158" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
            <Footer />
        </>
    )

}
