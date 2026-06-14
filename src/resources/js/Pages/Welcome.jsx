import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import Hero from '@/Components/public/sections/Hero';
import TreatmentExplorer from '@/Components/public/sections/TreatmentExplorer';
import TrustSection from '@/Components/public/sections/TrustSection';
import PatientJourney from '@/Components/public/sections/PatientJourney';
import DoctorAuthority from '@/Components/public/sections/DoctorAuthority';
import Testimonials from '@/Components/public/sections/Testimonials';
import EducationPreview from '@/Components/public/sections/EducationPreview';
import FaqSection from '@/Components/public/sections/FaqSection';
import LocationSection from '@/Components/public/sections/LocationSection';
import FinalCTA from '@/Components/public/sections/FinalCTA';
import { site } from '@/data/site';

const SEO_TITLE = 'Dra. Isabel Piérola | Medicina Estética Avanzada';
const SEO_DESCRIPTION =
    'Tratamientos médico-estéticos personalizados para realzar tu belleza natural con respaldo médico, seguridad y resultados armónicos. Atención en Bolivia y Chile.';

const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: site.name,
    description: SEO_DESCRIPTION,
    medicalSpecialty: 'Dermatology',
    url: site.social.website,
    sameAs: [site.social.instagram],
    areaServed: site.locations
        .filter((l) => l.active)
        .map((l) => ({ '@type': 'City', name: `${l.city}, ${l.country}` })),
};

export default function Welcome({ auth }) {
    return (
        <PublicLayout auth={auth}>
            <Head title="Medicina Estética Avanzada">
                <meta name="description" content={SEO_DESCRIPTION} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={SEO_TITLE} />
                <meta property="og:description" content={SEO_DESCRIPTION} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={SEO_TITLE} />
                <meta name="twitter:description" content={SEO_DESCRIPTION} />
            </Head>

            {/* Datos estructurados para SEO (clínica médico-estética) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
            />

            <Hero />
            <TreatmentExplorer />
            <TrustSection />
            <PatientJourney />
            <DoctorAuthority />
            <Testimonials />
            <EducationPreview />
            <FaqSection />
            <LocationSection />
            <FinalCTA />
        </PublicLayout>
    );
}
