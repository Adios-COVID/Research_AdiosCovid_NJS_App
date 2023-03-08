import React from 'react';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function SubmitData() {
    return (
        <>
            <Navbar />
            <div class="row" id="section4">
                <div class="testbox">
                    <form action="/">
                        <div class="banner">
                            <h1 id="form-title">Submit Your Data</h1>
                        </div>
                        <p>Share your own experience with long covid to help us!</p>
                        <p>Please fill out this form. Your submission of data will help us a lot with our research!</p>
                        <hr />
                        <fieldset>
                            <legend>Your Information</legend>
                            <div class="item">
                                <div class="name-item">
                                    <div>
                                        <input type="text" name="code" placeholder="ZIP Code" />
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <label for="description">Are you Hispanic/Latino?<span>*</span></label>
                                <select class="latinoSelect">
                                    <option>Select your answer</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="item">
                                <label for="description">What is Your Experience with Long COVID?<span>*</span></label>
                                <input id="description" type="text" name="text" required />
                            </div>
                        </fieldset>
                        <div class="btn-block">
                            <button id="submit_button" type="submit" href="/">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )

}
