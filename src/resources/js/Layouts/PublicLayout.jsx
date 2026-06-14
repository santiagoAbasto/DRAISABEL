import PublicNavbar from '@/Components/public/PublicNavbar';
import PublicFooter from '@/Components/public/PublicFooter';
import FloatingWhatsApp from '@/Components/public/FloatingWhatsApp';
import MobileCTA from '@/Components/public/MobileCTA';
import { useSmoothScroll } from '@/hooks/useGsap';

/**
 * Estructura de las páginas públicas: navbar sticky, contenido, footer,
 * WhatsApp flotante y CTA fijo en móvil. Activa el scroll suave cinemático.
 */
export default function PublicLayout({ auth, children }) {
    useSmoothScroll();

    return (
        <div className="min-h-screen bg-ivory text-ink">
            <PublicNavbar auth={auth} />
            {/* pb-24 evita que el CTA fijo móvil tape contenido final */}
            <main className="pb-24 sm:pb-0">{children}</main>
            <PublicFooter />
            <FloatingWhatsApp />
            <MobileCTA />
        </div>
    );
}
