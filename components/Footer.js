import React from 'react';
import Link from "next/link";
//import privacy from '../public/Adios COVID Research Privacy Statement.pdf'

export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row" id="footer">
          <div class="col-sm-4">
            <Link href="https://adioscovid.org/" target="_blank" rel="noopener noreferrer" className="text-danger adio_header">¡Adiós COVID!</Link>
            <div id="copyright" class="copyright">
              <i class="fa fa-copyright fa-1x"> 2023 ¡Adiós COVID!. All rights reserved</i>
              <ul class="list-group"><a href="https://docs.google.com/document/u/3/d/e/2PACX-1vTwiQau-iw1LdAOSANsa9LYFZz3QosAb1zk14hdVdFgtjNF6gqD0E3ew0eI9l7Egt7WGe46_v41tXtb/pub" target="_blank" rel="noopener noreferrer">Privacy Statement</a></ul>
              <ul class="list-group"><a href="https://docs.google.com/document/d/e/2PACX-1vT1UvCf9BD6GzOzMN8AwnPXq_TJs4fULe6p8bKvIuCPjrXVgjRTb5izWzsDLeMtVMkRDoAcgVJ7Bj3Z/pub" target="_blank" rel="noopener noreferrer">Terms of Service</a></ul>
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
              <li class="list-group-item"><a href="mailto:research@adioscovid.org" class="text-dark"><i class="fa fa-envelope" aria-hidden="true"></i> research@adioscovid.org</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
