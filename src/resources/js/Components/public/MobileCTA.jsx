import Button from '@/Components/public/Button';
import { whatsappLink } from '@/data/site';

/**
 * CTA fijo inferior — solo móvil. "Agendar evaluación" siempre a un toque.
 */
export default function MobileCTA() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-cocoa/10 bg-ivory/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl sm:hidden">
            <Button
                href={whatsappLink()}
                external
                variant="primary"
                size="lg"
                icon="calendar"
                className="w-full"
            >
                Agendar evaluación
            </Button>
        </div>
    );
}
