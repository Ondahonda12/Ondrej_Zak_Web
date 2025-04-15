import { useState } from 'react';
import Zivotopis from './assets/zivotopis.jpg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="home">
        <h1>O mně</h1>
        <h2>Ahoj, jmenuji se Ondřej Žák.</h2>
        <h2>Na této stránce najdeš informace o mně a mé práci.</h2>
        <h2>Pokud máš nějaké dotazy, neváhej mě kontaktovat.</h2>
      </div>
      <section className="zivotopis-section">
        <div className="zivotopis-text" id="zivotopis">
          <h1>Životopis</h1>
          <h2>Osobní informace</h2>
          <strong>Středoškolské Vzdělání:</strong> Mendelova střední škola Nový Jičín - Obor Informatika, ukončeno 2020 s Maturitou
          <p></p>
          <strong>Vysokoškolské vzdělání:</strong> Vysoká škola Baňská - Obor Automobilové informatické a elektronické systémy, skončeno ve 3. semestru bez titulu.
          <h2>Současná práce</h2>
          <h3>Testing/Process Engineer</h3>
          <p>Nastavování a utilizace testovacího procesu, Level 1 IT support, SW a HW udržba Fixtur a testovacích zařízení používaných k diagnostice.</p>
          <p>Cisco Networking</p>
          <p>Psaní Scriptů .SH</p>
          <p>Analýza dat</p>
          <p>Psaní technických dokumentací k SW a následný trénink osob</p>
          <h2>Certifikáty</h2>
          <ul>
            <li>Certifikát 1</li>
            <li>Certifikát 2</li>
          </ul>
          <h2>Výpis dovedností</h2>
          <ul>
            <li>Programování v Pythonu</li>
            <li>Back-end vývoj v .NET</li>
            <li>Práce s databázemi</li>
            <li>Znalost verzovacích systémů (např. Git)</li>
            <li>Základy práce s GUI (např. macOS aplikace)</li>
            <li>Další relevantní dovednosti</li>
          </ul>
          <h2>Ostatní zkušenosti</h2>
          <p>Popis dalších zkušeností, projektů nebo aktivit, které mohou být relevantní pro tvou kariéru.</p>
        </div>
        <div className="zivotopis-image">
          <img src={Zivotopis} alt="Životopis" />
        </div>
      </section>

      <div id="contact" style={{ padding: "2rem" }}>
        <h1>Kontakty</h1>
        <p>Můžeš mě kontaktovat na: <strong><a href="mailto:ondraitachi@gmail.com">ondraitachi@gmail.com</a></strong></p>
        <p>Dále můžeš checknout můj <a href="https://github.com/Ondahonda12" target="_blank" rel="noreferrer">GitHub</a></p>
        <p>A nakonec můj <a href="https://www.linkedin.com/in/ondřej-žák-a53440222/" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>
    </>
  );
}

export default Home;