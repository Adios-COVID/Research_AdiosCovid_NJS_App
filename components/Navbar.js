import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from '@/styles/nav.module.css'
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbar = () => {
  return (


    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white justify-content-between navbar-custom" className={styles["navbar-custom"]}>
      <Link href="/" class="navbar-brand col-2" className={styles["navbar-brand"]}>
      <Image
                src="/Logo_AdiosCOVID.png"
                alt="Adios COVID Research Logo"
                className= "navbar-brand col-2"
                id="logo"
                class="img-fluid"
                priority
        />
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" className={styles["navbar-nav"]}>
          <li class="nav-item">
            <Link href="/" className="nav-link"> Home </Link>
          </li>
          <NavDropdown title="Data" id="basic-nav-dropdown" className={styles.navbarDropdown}>
              <NavDropdown.Item href="/DataPage/#section1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/DataPage/#section3">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/DataPage/#section4">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          <li class="nav-item">
            <Link href="/about" className="nav-link">About </Link>
          </li>
          <li class="nav-item">
            <Link href="/news" className="nav-link">News </Link>
          </li>
        </ul>
        <button type="button" id="access_data" className={styles.access_data} class="btn btn-danger btn-md me-3"><Link href="/RepoPage" id="access_data_toggle" className={styles.access_data_toggle}>Access Our Data</Link></button>
        <button type="button" id="access_data" className={styles.access_data} class="btn btn-info btn-md me-3"><Link href="/Data/#section4" id="access_data_toggle" className={styles.access_data_toggle}>Submit Your Data</Link></button>
      </div>
    </nav>
    
  </div>

  );
};

export default Navbar;
