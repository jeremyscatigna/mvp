import { LampFeature } from '@/components/ui/lamp';
import clsx from 'clsx';
import {
    Brain,
    Building,
    Calendar,
    Focus,
    Gauge,
    HardDrive,
    Keyboard,
    LineChart,
    LucideIcon,
    Newspaper,
    Orbit,
    Rocket,
    ShipWheel,
    Sparkles,
    Timer,
    Workflow,
} from 'lucide-react';
import Image from 'next/image';

export function Features() {
    return (
        <div className='bg-white w-full py-18 sm:py-32' id='features'>
            <LampFeature />
        </div>
    );
}

export function FeaturesWithImage(props: {
    imageSide: 'left' | 'right';
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: {
        name: string;
        description: string;
        icon: LucideIcon;
    }[];
}) {
    return (
        <div className='overflow-hidden w-full bg-white py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto grid max-w-2xl grid-cols-1 items-center justify-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                    <div className={clsx('lg:pt-4', props.imageSide === 'left' ? 'lg:ml-auto lg:pl-4' : 'lg:mr-auto lg:pr-4')}>
                        <div className='lg:max-w-lg'>
                            <h2 className='inline-block bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text font-cal text-base leading-7 text-transparent'>
                                {props.title}
                            </h2>
                            <p className='mt-2 font-cal text-3xl text-foreground sm:text-4xl'>{props.subtitle}</p>
                            <p className='mt-6 text-lg leading-8 text-foreground/80'>{props.description}</p>
                            <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-foreground/60 lg:max-w-none'>
                                {props.features.map((feature) => (
                                    <div key={feature.name} className='relative pl-9'>
                                        <dt className='inline font-semibold text-foreground'>
                                            <feature.icon className='absolute left-1 top-1 h-5 w-5 text-blue-600' aria-hidden='true' />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className='inline'>{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            'relative flex items-start',
                            props.imageSide === 'left' ? 'justify-end lg:order-first' : 'justify-start lg:order-last',
                        )}
                    >
                        <div className='relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl lg:p-4'>
                            <div className='absolute inset-0 h-full w-full scale-[0.90] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl' />
                            <Image
                                src={props.image}
                                alt='Product screenshot'
                                className='relative w-[48rem] max-w-none rounded-xl shadow-2xl ring-1 ring-foreground/20 sm:w-[57rem]'
                                width={2400}
                                height={1800}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const features409a = [
    {
        name: 'Regulatory Adherence',
        description: 'Navigate the complexities of IRS regulations with tools designed for compliance and ease.',
        icon: Rocket,
    },
    {
        name: 'Defensible Valuation',
        description: 'Achieve a clear and justifiable valuation process, providing you with confidence in your financial reporting.',
        icon: HardDrive,
    },
];

export function Features409a() {
    return (
        <FeaturesWithImage
            imageSide='left'
            title='409A Valuations'
            subtitle='Compliance and Clarity in Valuation'
            description='Effortlessly conduct 409 A valuations and stay compliant with IRS regulations. Our tools offer a clear and defensible approach to valuation, ensuring you adhere to regulatory requirements without hassle.'
            image='/images/stats.png'
            features={features409a}
        />
    );
}

const featuresSAFE = [
    {
        name: 'Effortless Fundraising',
        description:
            'Manage your fundraising initiatives with precision. From SAFEs to other financial instruments, ensure every transaction is secure and seamless.',
        icon: Newspaper,
    },
    {
        name: 'Enhanced Stakeholder Interactions',
        description: 'Improve interactions with stakeholders through a platform designed for efficiency and security.',
        icon: Gauge,
    },
];

export function FeaturesSAFE() {
    return (
        <FeaturesWithImage
            imageSide='right'
            title='SAFEs and Beyond'
            subtitle='Streamline Transactions with Confidence'
            description='Facilitate secure and seamless financial transactions with ease. Our platform is equipped to handle Simple Agreements for Future Equity (SAFEs) and other financial instruments, simplifying fundraising and stakeholder interactions.'
            image='/images/newsletters.png'
            features={featuresSAFE}
        />
    );
}

const featuresSecurities = [
    {
        name: 'Simplified Compliance',
        description:
            'With our intuitive platform, stay compliant effortlessly. We handle the complexities, so you focus on what’s important - your business growth.',
        icon: Sparkles,
    },
    {
        name: 'Precision in Transactions',
        description: 'Accurate and streamlined handling of securities transactions, ensuring every detail is meticulously managed.',
        icon: Orbit,
    },
];

export function FeaturesSecurities() {
    return (
        <FeaturesWithImage
            imageSide='left'
            title='Securities Handling'
            subtitle='Navigate Financial Nuances with Ease'
            description='Efficiently manage the intricacies of securities issuance, transfers, and conversions. Our platform is designed to simplify complex financial processes, ensuring compliance and precision, making the handling of financial instruments straightforward and stress-free.'
            image='/images/stats.png'
            features={featuresSecurities}
        />
    );
}

const featuresCaptable = [
    {
        name: 'Real-Time Updates',
        description:
            'Navigate the complexities of equity with up-to-the-minute accuracy. Our system keeps you informed and ready for any scenario.',
        icon: Timer,
    },
    {
        name: 'Informed Decisions',
        description:
            "Leverage comprehensive reporting and scenario modeling tools to make strategic choices about your company's equity structure confidently.",
        icon: Brain,
    },
];

export function FeaturesCaptable() {
    return (
        <FeaturesWithImage
            imageSide='right'
            title='Cap Table Management'
            subtitle='Encrypted. Self-hosted. Compliant.'
            description="Transform the way you handle equity with our Cap Table Management. It’s not just about tracking shares; it’s about empowering decision-making. With real-time updates, scenario modeling, and detailed reporting, gain control and clarity over your company's equity structure."
            image='/images/newsletters.png'
            features={featuresCaptable}
        />
    );
}

const featuresOpen = [
    {
        name: 'Community Driven',
        description:
            'Our platform thrives on the contributions of a vibrant community. Open-source means everyone can contribute, bringing unique insights and innovations.',
        icon: ShipWheel,
    },
    {
        name: 'Transparency as a Foundation',
        description:
            "We believe that openness breeds trust. Trust forms the bedrock of OpenCap, ensuring that our users feel confident and secure in our platform's integrity and future.",
        icon: Building,
    },
];

export function FeaturesOpen() {
    return (
        <FeaturesWithImage
            imageSide='left'
            title='Openness'
            subtitle='Fostering Collaboration and Trust.'
            description="Our commitment to openness is reflected in our open-source approach, inviting a community of diverse minds to contribute and innovate. By sharing our code, we not only enhance our platform's capabilities but also foster a culture of trust and collective growth."
            image='/images/newsletters.png'
            features={featuresOpen}
        />
    );
}
