import { useState } from 'react';
import Zivotopis from './assets/zivotopis.jpg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="home">
        <h1>O mně</h1>
        <h2>Ahoj, Jmenuji se Ondřej Žák. Je mi 24 let a pocházím ze Studénky. Pracuji v Ostravě již 3. rokem v oblasti Informačních Technologií.</h2>
        <h2>Ve svém volném čase trávím čas s přáteli a se svou přítelkyní nebo se věnuji svým koníčkům. Mezi které patří například Badminton, programování a nebo třeba hiking. </h2>
        <h2></h2>
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
          <p>Nastavování a utilizace testovacího procesu, Level 1-3 IT support, SW a HW udržba Fixtur a testovacích zařízení používaných k diagnostice.</p>
          <p>Cisco Networking</p>
          <p>Psaní Scriptů .SH</p>
          <p>Analýza dat</p>
          <p>Psaní technických dokumentací k SW a následný trénink osob</p>
          <h2>Certifikáty</h2>
          <ul>
            <li>ECVET CERTIFICATE- INDUSTRY 4.0 – TA2
            </li>
            <li>ERASMUS+ Europass Internship Programme
            </li>
          </ul>
          <h2>Dovednosti</h2>
          <ul>
            <li>Programovací jazyky: Python, CSharp, C, JavaScript (Junior level)</li>
            <li>Web Development: CSS, React (Junior level)</li>
            <li>Verzování: Git & GitHub</li>
            <li>Jazyky: English - B2, Czech - C2</li>
            <li>Ostatní: Řidičský průkaz – B</li>
          </ul>
        </div>
        <div className="zivotopis-image">
          <img src={Zivotopis} alt="Životopis" />
        </div>
      </section>
      <div id="contact" style={{ padding: "2rem" }}>
        <h1>Kontakty</h1>
        <p>Můžeš mě kontaktovat na: <a href="mailto:ondraitachi@gmail.com">ondraitachi@gmail.com</a></p>
        <p>Dále můžeš checknout můj <a href="https://github.com/Ondahonda12" target="_blank" rel="noreferrer">GitHub</a></p>
        <p>A nakonec můj <a href="https://www.linkedin.com/in/ondřej-žák-a53440222/" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>
    </>
  );
}
export default Home;