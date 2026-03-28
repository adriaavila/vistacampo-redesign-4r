import type { Metadata } from "next"

import { SiteLegalPage } from "@/components/site-page-primitives"

export const metadata: Metadata = {
  title: "Terms and Conditions | Vistacampo",
  description: "Terms and conditions of use for Vistacampo services.",
  keywords: "terms and conditions, terms of use, Vistacampo",
}

export default function TermsPage() {
  return (
    <SiteLegalPage
      badge="Terms and conditions"
      title="General conditions for using our site and services"
      description="These terms describe the general framework for using the website and the information shared by Vistacampo."
      lastUpdated={`Last updated: ${new Date().toLocaleDateString("en-US")}`}
    >
      <section>
        <h2>1. Acceptance of terms</h2>
        <p>
          By accessing and using this site, or by interacting with our care channels, you agree in general to these
          terms and conditions.
        </p>
      </section>

      <section>
        <h2>2. Description of services</h2>
        <p>
          Vistacampo provides information and guidance related to its treatment programs, evaluation, medical care,
          therapeutic intervention, and follow-up.
        </p>
      </section>

      <section>
        <h2>3. Patient or family responsibilities</h2>
        <p>
          Information provided should be accurate and sufficient to guide the case properly, while final clinical
          decisions depend on the corresponding professional assessment.
        </p>
      </section>

      <section>
        <h2>4. Confidentiality</h2>
        <p>
          All information shared during contact or care is handled with the discretion and respect required by the
          nature of the service.
        </p>
      </section>

      <section>
        <h2>5. Modifications</h2>
        <p>
          Vistacampo may update these terms when needed. Changes become effective once they are published on the site.
        </p>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>If you have questions related to these terms, you may contact us through:</p>
        <ul>
          <li>Email: info@vistacampo.com</li>
          <li>Phone: (+58) 412-231-5968</li>
          <li>Location: Colonia Tovar, Venezuela</li>
        </ul>
      </section>
    </SiteLegalPage>
  )
}
