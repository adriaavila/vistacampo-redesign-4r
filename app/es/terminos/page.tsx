import type { Metadata } from "next"

import { SiteLegalPage } from "@/components/site-page-primitives"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Vistacampo",
  description: "Términos y condiciones de uso de los servicios de Vistacampo.",
  keywords: "términos y condiciones, condiciones de uso, Vistacampo",
}

export default function TerminosPage() {
  return (
    <SiteLegalPage
      badge="Términos y condiciones"
      title="Condiciones de uso y alcance de nuestros servicios"
      description="Estos términos describen el marco general de uso del sitio y de la información compartida por Vistacampo."
      lastUpdated={`Última actualización: ${new Date().toLocaleDateString("es-ES")}`}
    >
      <section>
        <h2>1. Aceptación de los términos</h2>
        <p>
          Al acceder y utilizar este sitio o al interactuar con nuestros canales de atención, usted acepta estos
          términos y condiciones de manera general.
        </p>
      </section>

      <section>
        <h2>2. Descripción de los servicios</h2>
        <p>
          Vistacampo ofrece información y orientación relacionada con sus programas de tratamiento, evaluación,
          atención médica, intervención terapéutica y seguimiento.
        </p>
      </section>

      <section>
        <h2>3. Responsabilidades del paciente o familiar</h2>
        <p>
          La información suministrada debe ser veraz y suficiente para orientar adecuadamente el caso, y las decisiones
          clínicas finales dependerán de la evaluación profesional correspondiente.
        </p>
      </section>

      <section>
        <h2>4. Confidencialidad</h2>
        <p>
          Toda información compartida en el proceso de contacto o atención será manejada con la discreción y el respeto
          que exige la naturaleza del servicio.
        </p>
      </section>

      <section>
        <h2>5. Modificaciones</h2>
        <p>
          Vistacampo podrá actualizar estos términos cuando sea necesario. Los cambios serán efectivos una vez
          publicados en el sitio.
        </p>
      </section>

      <section>
        <h2>6. Contacto</h2>
        <p>Si desea hacer una consulta relacionada con estos términos, puede comunicarse a través de:</p>
        <ul>
          <li>Email: info@vistacampo.com</li>
          <li>Teléfono: (+58) 412-231-5968</li>
          <li>Ubicación: Colonia Tovar, Venezuela</li>
        </ul>
      </section>
    </SiteLegalPage>
  )
}
