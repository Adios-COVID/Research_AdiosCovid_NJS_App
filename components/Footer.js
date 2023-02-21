import React from 'react';
import styles from '@/styles/footer.module.css'
import Link from "next/link";

export default function Footer() {
    return (
      <footer>
        <div class="container" className={styles.container}>
          <div class="row" id="footer" className={styles.footer}>
            <div class="col-sm-4">
              <Link href="/" class="text-danger" className={styles.adio_header}>¡Adiós COVID!</Link>
              <div id="copyright" className={styles.copyright}>
                <i class="fa fa-copyright fa-1x"> 2023 ¡Adiós COVID!. All rights reserved</i>
              </div>
            </div>
            <div class="col-sm-4">
              <h3>Affinity Organizations</h3>
              <ul class="list-group">
                <li class="list-group-item"><a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer" class="text-dark">University of Washington</a></li>
                <li class="list-group-item"><a href="https://latinocenterforhealth.org/" target="_blank" rel="noopener noreferrer" class="text-dark">UW Latino Center for Health</a></li>
              </ul>
            </div>  
            <div class="col-sm-4">
              <h3>Further Information</h3>
              <ul class="list-group">
                <li class="list-group-item text-dark">Contact Us:</li>
                <li class="list-group-item"><a href="mailto:adiosCovid@gmail.com" class="text-dark"><i class="fa fa-envelope" aria-hidden="true"></i> adiosCovid@gmail.com</a></li>
              </ul>
            </div>  
          </div>
        </div>
      </footer>
    );
}
