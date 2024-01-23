'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { constants } from '@/lib/constants';
import { OpenCapLogo } from './logo';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Loader2 } from 'lucide-react';

export const Navbar = () => {
    const [email, setEmail] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { handleSubmit } = useForm();

    const joinWaitlist = async () => {
        setLoading(true);
        const response = await fetch(`/api/waitlist?email=${email}`);

        if (response.ok) {
            toast('You have successfully joined the waitlist, you will be contacted shortly.');
        } else {
            toast('Failed to join the waitlist. Please try again later.');
        }

        setLoading(false);
        setModalOpen(false);
        setEmail('');
    };
    return (
        <div className='sticky z-50 left-0 top-0 flex h-16 w-full items-center border-b px-4 sm:px-8 bg-white'>
            <Link href='/#' className='font-cal flex items-center gap-2 text-2xl hover:no-underline'>
                <p>{constants.title}</p>
            </Link>
            <div className='grow' />
            <div className='flex items-center gap-4 text-sm'>
                <div className='flex items-center gap-2'>
                    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={() => setModalOpen(true)} className='hover:no-underline'>
                                See packages
                            </Button>
                        </DialogTrigger>
                        <DialogContent className='sm:max-w-[425px]'>
                            <form onSubmit={handleSubmit(joinWaitlist)}>
                                <DialogHeader>
                                    <DialogTitle>Waitlist</DialogTitle>
                                    <DialogDescription>Add your email to the waitlist. Click save when you&apos;re done.</DialogDescription>
                                </DialogHeader>
                                <div className='grid gap-4 py-4'>
                                    <div className='grid grid-cols-4 items-center gap-4'>
                                        <Label htmlFor='email' className='text-right'>
                                            Email
                                        </Label>
                                        <Input
                                            id='email'
                                            type='email' // Specify the input type as "email" for better validation
                                            placeholder='abc@example.com'
                                            className='col-span-3'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type='submit'>
                                        {loading ? (
                                            <>
                                                <Loader2 className='h-4 w-4 animate-spin' />
                                                <span className='ml-2'>Joining...</span>
                                            </>
                                        ) : (
                                            'Join the waitlist'
                                        )}
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>

                    <Button size='lg' variant='outline'>
                        <Link href={constants.github.url} className='hover:no-underline'>
                            Book a call
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
