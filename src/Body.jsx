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
        <h2>Ahoj, jmenuji se Ondřej Žák a jsem mladý nadšenec do technologií,
           který miluje spojení techniky s kreativitou.
             Mým cílem je rozvíjet své dovednosti v informatice a věnovat se tomu co mě baví nejvíce.
              Když zrovna neřeším bugy, rád fotím krajiny a ladím svůj vůz.</h2>
        </div>

        <section className="zivotopis-section">
        <div className="zivotopis-text left" id="zivotopis">
          <h1>Životopis</h1>
          <h2>Osobní informace:</h2>
          <strong>Středoškolské vzdělání:</strong> Mendelova střední škola Nový Jičín - obor Informatika, ukončeno 2020 s maturitou. 2016-2020
          <p></p>
          <strong>Vysokoškolské vzdělání:</strong> Vysoká škola báňská - obor Automobilové informatické a elektronické systémy, ukončeno po 2 letech. 2020-2022
          <h2>Pracovní Zkušenost:</h2>
          <h3>Testing/Process Engineer ve společnosti Pegatron Czech s.r.o.:</h3>
          <h4><i>březen 2022 - současnost</i></h4>
          <ul>
          <li>nastavování a utilizace testovacího procesu, Level 1-3 IT support, SW a HW udržba Fixtur a testovacích zařízení používaných k diagnostice</li>
          <li>Cisco Networking</li>
          <li>psaní bash scriptů</li>
          <li>analýza dat</li>
          <li>psaní technických dokumentací k SW a následný trénink osob</li>
          </ul>
          <h2>Certifikáty:</h2>
          <ul>
            <li>ECVET CERTIFICATE- INDUSTRY 4.0 – TA2
            </li>
            <li>ERASMUS+ Europass Internship Programme
            </li>
          </ul>
          <h2>Dovednosti:</h2>
          <ul>
            <li>programovací jazyky: Python, CSharp, C, JavaScript (Junior level)</li>
            <li>web development: CSS, React (Junior level)</li>
            <li>verzování: Git & GitHub</li>
            <li>jazyky: Angličtina - C1, aktivní mluvčí, studijní pobyty v zahraniční a 5 měsíců bussiness trip v USA v rámci sesterské společnosti Pegatron jako Testing Engineer</li>
            <li>ostatní: Řidičský průkaz – B</li>
          </ul>
          <h2>Zájmy:</h2>
          <ul>
            <li>motorsport a tuning</li>
            <li>badminton</li>
            <li>programování ve volném čase</li>
            <li>historický šerm a Larp(Live Action Role Play)</li>
            <li>gaming a hudba</li>
          </ul>
        </div>
        <div className="zivotopis-image right">
          <img src={Zivotopis} alt="Životopis" />
        </div>
      </section>

      <div className="hobby-section">
      <h2>Mezi mé další koníčky dále patří například fotografování</h2>
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
        <p>Můžete mě kontaktovat na <a href="mailto:ondraitachi@gmail.com">ondraitachi@gmail.com</a></p>
        <p>Dále můžete checknout můj <a href="https://github.com/Ondahonda12" target="_blank" rel="noreferrer">GitHub</a></p>
        <p>A nakonec můj <a href="https://www.linkedin.com/in/ondřej-žák-a53440222/" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>

    </>
  );
};
export default Home;