import Hero from "../components/Hero";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="Presentacion1">
        <h3 className="Saludo1">Hola, soy Catalina Aguilar</h3>
        <p className="ParrafoDescrip">, arquitecta de formación y actualmente desarrolladora front-end en práctica en Seidor. A lo largo de mi carrera he trabajado en el diseño de espacios educativos y comunitarios, aplicando principios de accesibilidad, participación y experiencia usuaria. Esa mirada espacial y estructural hoy la llevo al desarrollo web, creando interfaces claras, funcionales y pensadas para las personas. Me apasiona unir el diseño y la lógica para construir soluciones digitales que tengan un impacto real.
        </p>
      </div>


    </main>
  );
}
