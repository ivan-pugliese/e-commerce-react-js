import React from "react";
import "./About.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import store1 from "../../assets/tienda-1.jpg";
import store2 from "../../assets/tienda-2.jpg";
import store3 from "../../assets/tienda-3.jpg";
import ActionAreaCard from "../ActionAreaCard/ActionAreaCard";

export default function About() {
  return (
    <section className="About">
      <aside className="Hero-image-aside">
        <article className="Hero-image-content">
          <h1>
            Hola! Somos <SportsSoccerIcon />
            FutOne
          </h1>
          <p>
            Emprendimiento familiar de camisetas y botines importados!
            Trabajamos hace mas de 10 años, logrando satisfacer las necesidades
            de nuestros clientes con una excelente calidad de servicio y calidad
            de productos. Seleccione los productos que desea llevar y sumelos a
            su carrito con confianza. Enseguida le mandamos su comprobante y
            puede retirar cuando lo desee en nuestras sucursales!
          </p>
        </article>
        <article className="About-stores">
          <div className="About-card">
            <ActionAreaCard
              title="Palermo"
              image={store1}
              alt="Store Palermo"
            />
          </div>
          <div className="About-card">
            <ActionAreaCard
              title="Av. 9 de Julio"
              image={store3}
              alt="Store 9 de Julio"
            />
          </div>
          <div className="About-card">
            <ActionAreaCard
              title="Av. Corrientes"
              image={store2}
              alt="Store Corrientes"
            />
          </div>
        </article>
      </aside>
    </section>
  );
}
