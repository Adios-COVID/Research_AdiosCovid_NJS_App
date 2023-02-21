import React from 'react';
import styles from '@/styles/News.module.css'



export default function NewsPage() {
  return (
  <div className={styles.App}>
  <h1>COVID & Long Covid Related News</h1>
  <iframe allowfullscreen id="wallsio-iframe" src="https://my.walls.io/h55mw?nobackground=1&amp;show_header=0" style={{border:'0', height:'800px', width:'100%' }} loading="lazy" title="Adios Covid"></iframe>
  </div>
  );
};


