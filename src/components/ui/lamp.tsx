'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function LampFeature() {
    return (
        <LampContainer>
            <h1 className='relative z-20 bg-gradient-to-b from-black/30 to-black bg-clip-text text-center font-cal text-4xl font-bold text-transparent sm:text-7xl pb-4'>
                By Founders, For Founders.
            </h1>
            <div className='max-w-4xl text-center'>
                <p className='mt-6 text-lg leading-8 text-foreground/60'>
                    As founders ourselves, we know the importance of moving quickly and getting it right the first time. Our team is
                    dedicated to transforming your ideas into functional and appealing MVPs in record time. With our expertise, we
                    don&apos;t just build products; we craft experiences tailored to attract and engage your early users, setting a solid
                    foundation for your startup&apos;s success. Embrace the journey of entrepreneurship with a partner who gets it – because
                    we&apos;ve been there.
                </p>
            </div>
        </LampContainer>
    );
}

export const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={cn(
                'relative z-0 flex min-h-[42rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white',
                className,
            )}
        >
            <div className='relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center '>
                <motion.div
                    initial={{ opacity: 0.5, width: '15rem' }}
                    whileInView={{ opacity: 1, width: '30rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className='bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[58rem] overflow-visible from-blue-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
                >
                    <div className='absolute  bottom-0 left-0 z-20 h-40 w-[100%] bg-white [mask-image:linear-gradient(to_top,white,transparent)]' />
                    <div className='absolute  bottom-0 left-0 z-20 h-[100%]  w-40 bg-white [mask-image:linear-gradient(to_right,white,transparent)]' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: '15rem' }}
                    whileInView={{ opacity: 1, width: '30rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className='bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-blue-500 text-white [--conic-position:from_290deg_at_center_top]'
                >
                    <div className='absolute  bottom-0 right-0 z-20 h-[100%]  w-40 bg-white [mask-image:linear-gradient(to_left,white,transparent)]' />
                    <div className='absolute  bottom-0 right-0 z-20 h-40 w-[100%] bg-white [mask-image:linear-gradient(to_top,white,transparent)]' />
                </motion.div>
                <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white blur-2xl'></div>
                <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
                <div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/4 rounded-full bg-blue-500 opacity-40 blur-3xl'></div>
                <motion.div
                    initial={{ width: '8rem' }}
                    whileInView={{ width: '16rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className='absolute inset-auto z-30 h-32 w-64 -translate-y-[6rem] rounded-full bg-blue-400 blur-2xl'
                ></motion.div>
                <motion.div
                    initial={{ width: '15rem' }}
                    whileInView={{ width: '30rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-blue-400'
                ></motion.div>

                <div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white '></div>
            </div>

            <div className='relative z-50 flex -translate-y-[9rem] flex-col items-center py-4 px-5'>{children}</div>
        </div>
    );
};
