import React from 'react';
import Link from "next/link";

export default function Footer() {
    return (
      <footer>
        <div class="container">
          <div class="row" id="footer">
            <div class="col-sm-4">
              <Link href="/" className="text-danger adio_header">¡Adiós COVID!</Link>
              <div id="copyright" class="copyright">
                <i class="fa fa-copyright fa-1x"> 2023 ¡Adiós COVID!. Todos los Derechos Reservados</i>
              </div>
            </div>
            <div class="col-sm-4">
              <h3>Organizaciones de Afinidad</h3>
              <ul class="list-group">
                <li class="list-group-item"><a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer" class="text-dark">Universidad de Washington</a></li>
                <li class="list-group-item"><a href="https://latinocenterforhealth.org/" target="_blank" rel="noopener noreferrer" class="text-dark">UW Latino Center for Health</a></li>
              </ul>
            </div>  
            <div class="col-sm-4">
              <h3>Por Más Informacion</h3>
              <ul class="list-group">
                <li class="list-group-item text-dark">Póngase en contacto con nosotros:</li>
                <li class="list-group-item"><a href="mailto:adiosCovid@gmail.com" class="text-dark"><i class="fa fa-envelope" aria-hidden="true"></i> adiosCovid@gmail.com</a></li>
              </ul>
            </div>  
          </div>
        </div>
      </footer>
    );
}
