import { useState } from 'react';
import Zivotopis from './assets/zivotopis.jpg';
import Kocur from './assets/kocur.jpg';
import Auto from './assets/auto.jpg';
import Komp from './assets/komp.jpg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
    
        <div className="about">
        <h1>O mně</h1>
        <h2>Ahoj, Jmenuji se Ondřej Žák a jsem mladý nadšenec do technologií,
           který miluje spojení techniky s kreativitou.
             Mým cílem je rozvíjet své dovednosti v Informatice a věnovat se tomu co mě baví nejvíce.
              Když zrovna neřeším bugy, rád fotím krajiny a ladím svůj vůz.</h2>
        </div>

        <section className="zivotopis-section">
        <div className="zivotopis-text left" id="zivotopis">
          <h1>Životopis</h1>
          <h2>Osobní informace</h2>
          <strong>Středoškolské Vzdělání:</strong> Mendelova střední škola Nový Jičín - Obor Informatika, ukončeno 2020 s Maturitou 2016-2020
          <p></p>
          <strong>Vysokoškolské vzdělání:</strong> Vysoká škola Baňská - Obor Automobilové informatické a elektronické systémy, ukončeno po 2 letech. 2020-2022 březen
          <h2>Současná práce</h2>
          <h3>Testing/Process Engineer ve společnosti Pegatron Czech s.r.o Březen 2022-Současnost</h3>
          <ul>
          <li>Nastavování a utilizace testovacího procesu, Level 1-3 IT support, SW a HW udržba Fixtur a testovacích zařízení používaných k diagnostice.</li>
          <li>Cisco Networking</li>
          <li>Psaní bash scriptů</li>
          <li>Analýza dat</li>
          <li>Psaní technických dokumentací k SW a následný trénink osob</li>
          </ul>
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
            <li>Jazyky: Angličtina - B2, Čeština - C2</li>
            <li>Ostatní: Řidičský průkaz – B</li>
          </ul>
          <h2>Zájmy</h2>
          <ul>
            <li>Motorsport a Tuning</li>
            <li>Badminton</li>
            <li>Programování ve volném čase</li>
            <li>Historický šerm a Larp</li>
            <li>Gaming</li>
          </ul>
        </div>
        <div className="zivotopis-image right">
          <img src={Zivotopis} alt="Životopis" />
        </div>
      </section>

      <div className="hobby-section">
      <h2>Mezi mé další koníčky dále patří například Fotografování</h2>
      <div className="hobby-items">
        <div className="hobby-item">
          <img src={Kocur} alt="Kocur" className="hobby-image" />
        </div>
        <div className="hobby-item">
          <img src={Auto} alt="Auto" className="hobby-image" />
        </div>
        <div className="hobby-item">
          <img src={Komp} alt="Komp" className="hobby-image" />
        </div>
        </div>
      </div>

      <div id="contact" style={{ padding: "2rem" }}>
        <h1>Kontakty</h1>
        <p>Můžeš mě kontaktovat na: <a href="mailto:ondraitachi@gmail.com">ondraitachi@gmail.com</a></p>
        <p>Dále můžeš checknout můj <a href="https://github.com/Ondahonda12" target="_blank" rel="noreferrer">GitHub</a></p>
        <p>A nakonec můj <a href="https://www.linkedin.com/in/ondřej-žák-a53440222/" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>

    </>
  );
};
export default Home;