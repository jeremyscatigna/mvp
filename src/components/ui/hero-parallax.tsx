'use client';
import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Button } from './button';
import { Loader2 } from 'lucide-react';
import { Label } from './label';
import { Input } from './input';
import { constants } from '@/lib/constants';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
    return (
        <div
            ref={ref}
            className='h-[200vh] pt-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=''
            >
                <motion.div className='flex flex-row-reverse space-x-reverse space-x-20 mb-20'>
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className='flex flex-row  mb-20 space-x-20 '>
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className='flex flex-row-reverse space-x-reverse space-x-20'>
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
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
        <div className='max-w-7xl relative mx-auto pt-20 px-4 w-full left-0 top-0'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-semibold text-black dark:text-white text-center'>
                    Idea to launch in less than 2 weeks. <br />
                    <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                        We craft Minimum viable <u>Saas</u> products.
                    </span>
                </h1>
                <p className='mt-4 text-lg sm:mt-8'>
                    Helping founders bring their idea to life, attract early users, and validate their idea.
                </p>
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
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className='group/product h-96 w-[30rem] relative flex-shrink-0'
        >
            <Link href={product.link} className='block group-hover/product:shadow-2xl '>
                <Image
                    src={product.thumbnail}
                    height='600'
                    width='600'
                    className='object-cover object-left-top absolute h-full w-full inset-0'
                    alt={product.title}
                />
            </Link>
            <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div>
            <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>{product.title}</h2>
        </motion.div>
    );
};
