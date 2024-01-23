'use client';

import Link from 'next/link';
import React from 'react';
import { constants } from '@/lib/constants';
import { Button } from './ui/button';

export const Navbar = () => {
    return (
        <div className='sticky z-50 left-0 top-0 flex h-16 w-full items-center border-b px-4 sm:px-8 bg-white'>
            <Link href='/#' className='font-cal flex items-center gap-2 text-2xl hover:no-underline'>
                <p>{constants.title}</p>
            </Link>
            <div className='grow' />
            <div className='flex items-center gap-4 text-sm'>
                <div className='flex items-center gap-2'>
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
            </div>
        </div>
    );
};
