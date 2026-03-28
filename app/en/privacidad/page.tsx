import type { Metadata } from "next"

import { SiteLegalPage } from "@/components/site-page-primitives"

export const metadata: Metadata = {
  title: "Privacy Policy | Vistacampo",
  description: "Privacy policy and personal data protection for Vistacampo.",
  keywords: "privacy policy, data protection, Vistacampo",
}

export default function PrivacyPage() {
  return (
    <SiteLegalPage
      badge="Privacy policy"
      title="Data protection handled with confidentiality and care"
      description="This page outlines how information shared with Vistacampo is collected, used, and protected."
      lastUpdated={`Last updated: ${new Date().toLocaleDateString("en-US")}`}
    >
      <section>
        <h2>1. Information we collect</h2>
        <p>
          We collect the information you provide directly when you contact us by phone, email, website forms, or
          messaging channels.
        </p>
      </section>

      <section>
        <h2>2. How we use your information</h2>
        <p>
          The information received is used to answer inquiries, guide people through our services, facilitate care, and
          improve the quality of the Vistacampo experience.
        </p>
      </section>

      <section>
        <h2>3. Information protection</h2>
        <p>
          We implement reasonable technical and organizational measures to protect personal data against unauthorized
          access, alteration, disclosure, or loss.
        </p>
      </section>

      <section>
        <h2>4. Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information, and object to data
          processing where applicable.
        </p>
      </section>

      <section>
        <h2>5. Contact</h2>
        <p>If you have questions about this privacy policy, you may contact us through:</p>
        <ul>
          <li>Email: info@vistacampo.com</li>
          <li>Phone: (+58) 412-231-5968</li>
          <li>Location: Colonia Tovar, Venezuela</li>
        </ul>
      </section>
    </SiteLegalPage>
  )
}
