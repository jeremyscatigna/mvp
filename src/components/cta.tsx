'use client';

import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { constants } from '@/lib/constants';
import Link from 'next/link';

export function CTA() {
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
        <>
            <div className='relative -z-10 mt-24 px-6 lg:px-8 w-full flex flex-col justify-center items-center'>
                <div className='mx-auto max-w-4xl text-center'>
                    <h1 className='font-cal text-3xl text-foreground sm:text-4xl'>Empower Your Startup&apos;s Vision.</h1>
                    <p className='mx-auto mt-6 max-w-4xl text-lg leading-8 text-foreground/60'>
                        We envision a world where every startup has the tools and support to transform their ideas into reality, swiftly and
                        efficiently. Our mission is to empower founders by providing rapid, high-quality MVP development services.
                        We&apos;re committed to helping you validate your business idea, attract early adopters, and lay the groundwork for
                        future success. By combining innovative technology with a founder-focused approach, we strive to be the driving
                        force behind the next wave of breakthrough startups.
                    </p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
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
        </>
    );
}
