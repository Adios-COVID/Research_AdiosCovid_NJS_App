import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => (
    <div className="Layout">
      <Navbar />
       <div className="Content">
        {props.children}
       </div>
       <Footer />
    </div>
)

export default Layout;