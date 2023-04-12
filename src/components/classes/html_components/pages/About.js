import React, { useState, useEffect } from 'react';
import Header from '../header';

function About() {
  const [siswa, setSiswa] = useState([]);

  useEffect(() => {
    const savedSiswa = localStorage.getItem('siswa');
    setSiswa(savedSiswa ? JSON.parse(savedSiswa) : []);
  }, []);

  return (
    <div>
        <br></br>
        <Header />
        <br />
      <span style={{ letterSpacing: "-3px" }}>/  /</span> &nbsp; <span>{window.location.href}</span>
      <br />
      <span style={{ letterSpacing: "-3px" }}>/  /</span> &nbsp; <span>{new Date().toISOString()}</span>
      <br /><br />
      <pre>{JSON.stringify(siswa, null, 2)}</pre>
    </div>
  );
}

export default About;
