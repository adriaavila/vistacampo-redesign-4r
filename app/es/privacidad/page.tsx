import type { Metadata } from "next"

import { SiteLegalPage } from "@/components/site-page-primitives"

export const metadata: Metadata = {
  title: "Política de Privacidad | Vistacampo",
  description: "Política de privacidad y protección de datos personales de Vistacampo.",
  keywords: "política de privacidad, protección de datos, Vistacampo",
}

export default function PrivacidadPage() {
  return (
    <SiteLegalPage
      badge="Política de privacidad"
      title="Protección de datos con criterio y confidencialidad"
      description="Esta página resume cómo se recopila, utiliza y protege la información compartida con Vistacampo."
      lastUpdated={`Última actualización: ${new Date().toLocaleDateString("es-ES")}`}
    >
      <section>
        <h2>1. Información que recopilamos</h2>
        <p>
          Recopilamos la información que usted nos proporciona directamente cuando se comunica con nosotros por
          teléfono, correo electrónico, formularios del sitio o canales de mensajería.
        </p>
      </section>

      <section>
        <h2>2. Cómo utilizamos su información</h2>
        <p>
          Utilizamos la información recibida para responder consultas, orientar sobre nuestros servicios, facilitar la
          atención y mejorar la calidad de la experiencia ofrecida por Vistacampo.
        </p>
      </section>

      <section>
        <h2>3. Protección de la información</h2>
        <p>
          Implementamos medidas técnicas y organizativas razonables para proteger los datos personales frente a acceso
          no autorizado, alteración, divulgación o pérdida.
        </p>
      </section>

      <section>
        <h2>4. Sus derechos</h2>
        <p>
          Usted puede solicitar acceso, corrección o eliminación de su información personal, así como manifestar su
          oposición al tratamiento de datos cuando corresponda.
        </p>
      </section>

      <section>
        <h2>5. Contacto</h2>
        <p>Si tiene preguntas sobre esta política de privacidad, puede escribirnos a través de:</p>
        <ul>
          <li>Email: info@vistacampo.com</li>
          <li>Teléfono: (+58) 412-231-5968</li>
          <li>Ubicación: Colonia Tovar, Venezuela</li>
        </ul>
      </section>
    </SiteLegalPage>
  )
}
