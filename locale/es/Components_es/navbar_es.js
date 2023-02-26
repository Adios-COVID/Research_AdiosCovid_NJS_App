import logopic from '../public/Logo_AdiosCOVID.png'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  return (
    
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white justify-content-between navbar-custom">
      <Link href="/" className="navbar-brand col-2">
      <Image
                src={logopic}
                alt="Adios COVID Research Logo"
                className="img-fluid img_logo"
        />
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link href="/" className="nav-link"> Página Principal </Link>
          </li>
          <li class="nav-item">
            <Link href="/Data" className="nav-link"> Data </Link>
          </li>
          <li class="nav-item">
            <Link href="/about" className="nav-link"> Sobre el Proyecto </Link>
          </li>
        </ul>
        <button type="button" id="access_data" class="btn btn-danger btn-md me-3"><Link href="/RepoPage" id="access_data_toggle"> Accesa Nuestra Data</Link></button>
        <button type="button" id="access_data" class="btn btn-info btn-md me-3"><Link href="/Data" id="access_data_toggle"> Mándanos Su Data</Link></button>
      </div>
    </nav>
    
  </div>

  );
};

export default Navbar;