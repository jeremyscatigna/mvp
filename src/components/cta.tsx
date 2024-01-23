'use client';

import { Button } from './ui/button';
import { constants } from '@/lib/constants';
import Link from 'next/link';

export function CTA() {
    return (
        <>
            <div className='relative -z-10 mt-24 px-6 lg:px-8 w-full flex flex-col justify-center items-center'>
                <div className='mx-auto max-w-4xl text-center'>
                    <h1 className='font-cal text-3xl text-foreground sm:text-4xl'>Empower Your Startup&apos;s Vision.</h1>
                    <p className='mx-auto mt-6 max-w-4xl text-sm md:text-lg md:leading-8 text-foreground/60'>
                        We envision a world where every startup has the tools and support to transform their ideas into reality, swiftly and
                        efficiently. Our mission is to empower founders by providing rapid, high-quality MVP development services.
                        We&apos;re committed to helping you validate your business idea, attract early adopters, and lay the groundwork for
                        future success. By combining innovative technology with a founder-focused approach, we strive to be the driving
                        force behind the next wave of breakthrough startups.
                    </p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Button className='hover:no-underline'>
                    <Link href='#pricing' className='hover:no-underline'>
                        See packages
                    </Link>
                </Button>

                <Button size='lg' variant='outline'>
                    <Link href={constants.github.url} target='_blank' className='hover:no-underline'>
                        Book a call
                    </Link>
                </Button>
            </div>
        </>
    );
}
