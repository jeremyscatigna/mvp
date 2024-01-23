'use client';

import { useState } from 'react';
import { CheckIcon, CreditCardIcon } from 'lucide-react';
import clsx from 'clsx';
import { Button } from './ui/button';

const frequencies = [
    { value: 'monthly' as const, label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually' as const, label: 'Annually', priceSuffix: '/year' },
];

const tiers = [
    {
        name: 'Starter',
        id: 'tier-starter',
        href: '/consultation',
        price: { fixed: '$4,999' },
        description: 'Basic feature set MVP development with essential integrations.',
        features: [
            'Basic feature set MVP development',
            'Up to two integrations',
            'Basic UI/UX design',
            'Project completion within 2 weeks',
        ],
        cta: 'Book a call',
    },
    {
        name: 'Pro',
        id: 'tier-pro',
        href: '/proposal',
        checkout: true,
        price: { fixed: '$9,999' },
        description: 'Advanced features and design for a comprehensive MVP.',
        features: [
            'Everything in MVP Starter',
            'Advanced feature set with up to four integrations',
            'Enhanced UI/UX design with user feedback integration',
            'Basic market viability assessment',
            'Priority support',
        ],
        cta: 'Upgrade',
        mostPopular: true,
    },
];

const LIFETIME_PRICE = 199;

const lifetimeFeatures = [
    'Fully customized MVP development',
    'Unlimited integrations and complex feature sets',
    'In-depth market analysis and user testing',
    'Ongoing support and development post-MVP launch',
];

export function Pricing() {
    return (
        <div id='pricing' className='relative isolate mx-auto max-w-7xl bg-white px-6 pb-32 pt-24 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center lg:max-w-4xl'>
                <h2 className='bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text font-cal text-base leading-7 text-transparent'>
                    Pricing
                </h2>
                <p className='mt-2 font-cal text-4xl text-foreground sm:text-5xl'>Take your startup to the next level.</p>
            </div>
            <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-foreground/60'>
                Tailored to fit your needs, with straightforward and transparent packages.
            </p>

            <div className='mx-auto pt-12 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-24 justify-items-center'>
                {tiers.map((tier, tierIdx) => (
                    <div className='flex flex-col justify-between w-full' key={tier.id}>
                        <div className='relative h-full'>
                            <div className='absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl' />

                            <div className='relative flex h-full flex-col items-start justify-between overflow-hidden rounded-2xl border border-white/10 bg-white px-6 py-8 shadow-xl'>
                                <div className='w-full'>
                                    <div className='flex items-center justify-between gap-x-4'>
                                        <h1
                                            id={tier.id}
                                            className={clsx(
                                                tier.mostPopular
                                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text font-cal text-transparent'
                                                    : 'text-black',
                                                'relative z-50 font-cal text-xl font-bold leading-8',
                                            )}
                                        >
                                            {tier.name}
                                        </h1>
                                        {tier.mostPopular ? (
                                            <div className='rounded-full bg-black px-2.5 py-1 font-cal text-xs leading-5 text-blue-600'>
                                                <p className='font-cal text-white'>Most popular</p>
                                            </div>
                                        ) : null}
                                    </div>
                                    <p className='mt-4 text-sm leading-6 text-slate-500'>{tier.description}</p>
                                    <p className='mt-6 flex items-baseline gap-x-1'>
                                        <span className='text-4xl font-bold tracking-tight text-black'>
                                            {tier.mostPopular ? '$1999' : '999'}
                                        </span>
                                    </p>
                                    <ul role='list' className='mt-8 space-y-3 text-sm leading-6 text-slate-500'>
                                        {tier.features.map((feature) => (
                                            <li key={feature} className='flex gap-x-3'>
                                                <CheckIcon className='h-6 w-5 flex-none text-blue-600' aria-hidden='true' />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href='https://cal.com/mvp.studio/30min'
                                    target='_blank'
                                    aria-describedby={tier.id}
                                    className={clsx(
                                        tier.mostPopular
                                            ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-sm hover:bg-gradient-to-r hover:from-blue-500/40 hover:to-teal-500/40'
                                            : 'text-black ring-1 ring-inset ring-black hover:ring-black/60',
                                        'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
                                    )}
                                >
                                    Book a call
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <LifetimePricing />
        </div>
    );
}

function LifetimePricing() {
    return (
        <div className='mt-4 flex flex-col justify-between max-w-7xl'>
            <div className='relative h-full w-full'>
                <div className='relative overflow-hidden rounded-2xl border border-white/10 px-6 py-8 shadow-xl'>
                    <div className='flex flex-col md:flex-row w-full'>
                        <div className='p-8 sm:p-10 lg:flex-auto'>
                            <h3 className='flex items-center font-cal text-2xl text-black'>
                                Custom
                                <div className='ml-4'></div>
                            </h3>
                            <p className='mt-4 text-base leading-7 text-slate-500'>
                                Fully customized MVP development tailored to your unique needs.
                            </p>
                            <div className='mt-10 flex items-center gap-x-4'>
                                <h4 className='flex-none bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text font-cal text-sm leading-6 text-transparent'>
                                    What’s included
                                </h4>
                                <div className='h-px flex-auto items-center justify-center bg-slate-500' />
                            </div>
                            <ul
                                role='list'
                                className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-500 sm:grid-cols-2 sm:gap-6'
                            >
                                {lifetimeFeatures.map((feature) => (
                                    <li key={feature} className='flex gap-x-3'>
                                        <CheckIcon className='h-6 w-5 flex-none text-blue-600' aria-hidden='true' />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='relative -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
                            <div className='absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl' />

                            <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-black px-6 py-8 text-center shadow-xl ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
                                <div className='mx-auto max-w-xs px-8'>
                                    <p className='text-base font-semibold text-white'>Custom</p>
                                    <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                                        <span className='text-4xl font-bold tracking-tight text-white'>Price on quote</span>
                                    </p>
                                    <a
                                        href='https://cal.com/mvp.studio/30min'
                                        target='_blank'
                                        className='mt-10 block w-full rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                                    >
                                        Book a call
                                    </a>
                                    <p className='mt-6 text-xs leading-5 text-slate-500'>
                                        Invoices and receipts available for easy company reimbursement
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
