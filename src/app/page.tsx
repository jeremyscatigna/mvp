import { Companies } from '@/components/companies';
import { CTA } from '@/components/cta';
import { Features, FeaturesSAFE, Features409a, FeaturesSecurities, FeaturesCaptable, FeaturesOpen } from '@/components/features';
import { BentoGridFeatures } from '@/components/features-grid';

import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Pricing } from '@/components/pricing';
import Testimonials from '@/components/testimonials';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <Navbar />
            <Hero />
            <Companies />

            <Features />
            <BentoGridFeatures />

            <Testimonials />

            <Pricing />
            <CTA />
            <Footer />
        </main>
    );
}
