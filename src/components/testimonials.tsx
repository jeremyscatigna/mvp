import { JSX } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Balancer from 'react-wrap-balancer';

// Use this object to add an icon to the testimonial (optional) like the Product Hunt logo for instance.
// Only change the values if you add more referrings sites (currently Twitter & Product Hunt)
const refTypes: {
    productHunt: {
        id: string;
        ariaLabel: string;
        svg: JSX.Element;
    };
    twitter: {
        id: string;
        ariaLabel: string;
        svg: JSX.Element;
    };
    other: { id: string; ariaLabel?: null; svg?: null };
} = {
    productHunt: {
        id: 'product_hunt',
        ariaLabel: 'See user review on Product Hunt',
        svg: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.245 26.256' className='w-[18px] h-[18px]'>
                <path
                    d='M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128'
                    fill='#da552f'
                />
                <path
                    d='M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595'
                    fill='#fff'
                />
            </svg>
        ),
    },
    twitter: {
        id: 'twitter',
        ariaLabel: 'See user post on Twitter',
        svg: (
            <svg className='w-5 h-5 fill-[#00aCee]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'></path>
            </svg>
        ),
    },
    other: { id: 'other' },
};

// The list of your testimonials. It needs 11 items to fill the grid. The last one (11th) is featured on large devices (span 2 columns + big font)
const list: {
    username?: string;
    title?: string;
    name: string;
    text: string;
    type?: (typeof refTypes)[keyof typeof refTypes];
    link?: string;
    img?: string | StaticImageData;
}[] = [
    {
        username: 'mitchellh',
        title: 'Founder & CEO, Innovative Startup',
        name: 'Mitchell Hashimoto',
        text: 'In just two weeks, the team turned our rough concept into a sleek, functional MVP. Their process was transparent and efficient – exactly what we needed as a fast-moving startup.',
        type: refTypes.twitter,
        link: 'https://twitter.com/mitchellh/status/1744052396609941813',
    },
    {
        username: 'karrisaarinen',
        title: 'Founder & CEO, Tech Enterprise',
        name: 'Karri Saarinen',
        text: 'Their understanding of startup needs is unmatched. The MVP they delivered exceeded our expectations, both in design and functionality.',
        type: refTypes.twitter,
        link: 'https://twitter.com/karrisaarinen/status/1743398553500971331',
    },
    {
        username: '@paulg',
        title: 'Co-founder, Leading Accelerator',
        name: 'Paul Graham',
        text: 'This team understands the essence of lean startups. They helped us validate our idea quickly with a beautifully crafted MVP.',
        type: refTypes.twitter,
        link: 'https://twitter.com/paulg/status/1356643841659572227',
    },
    {
        name: 'Sean',
        text: 'The MVP was not only developed quickly but also had all the core features we needed to start getting user feedback. Impressive work!',
        type: refTypes.other,
    },
    {
        username: 'krishna',
        name: 'Krishna Kant',
        text: 'The MVP they built for us is a testament to their skill and efficiency. It has been crucial in securing our early user base.',
        type: refTypes.productHunt,
        link: 'https://www.producthunt.com/posts/shipfast-2?comment=2707061',
    },
    {
        username: 'imgyf',
        name: 'Yifan Goh',
        text: 'Their rapid development approach saved us months of work. The MVP is fantastic and exactly what we needed to start.',
        type: refTypes.twitter,
        link: 'https://twitter.com/imgyf/status/1697549891080532236?s=20',
    },
    {
        name: 'Yazdun',
        text: 'Working with this team was a breeze. They understood our vision perfectly and delivered an MVP that has become the cornerstone of our product strategy.',
        type: refTypes.other,
    },
    {
        username: 'welcometobriami',
        name: 'Brian Kang',
        text: 'The quality of the MVP and the speed of delivery were astounding. It’s clear they are experts in startup development.',
        type: refTypes.twitter,
    },
    {
        username: 'zawwadx',
        name: 'Zawwad Ul Sami',
        text: 'Their approach to MVP development is innovative and effective. The product they delivered is now central to our business operations.',
        type: refTypes.twitter,
    },
    {
        username: 'dan',
        name: 'Dan Mindru',
        text: 'They have a knack for turning ideas into reality swiftly. The MVP they created for us is not just functional but also visually stunning.',
        type: refTypes.productHunt,
        link: 'https://www.producthunt.com/posts/shipfast-2?comment=2706763',
    },
    {
        username: 'paulg',
        title: 'Co-founder, Y Combinator',
        name: 'Paul Graham',
        text: 'Their expertise in MVP development is impressive. They helped us validate our market fit quickly and effectively.',
        type: refTypes.twitter,
        link: 'https://twitter.com/paulg/status/1356643841659572227',
    },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }: { i: number }) => {
    const testimonial = list[i];

    if (!testimonial) return null;

    return (
        <li key={i}>
            <figure className='relative h-full p-6 bg-black rounded-lg'>
                <blockquote className='relative'>
                    <p className='text-sm text-white'>{testimonial.text}</p>
                </blockquote>
                <figcaption className='relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5'>
                    <div className='overflow-hidden rounded-full shrink-0'>
                        {testimonial.img ? (
                            <Image
                                className='w-10 h-10 rounded-full object-cover'
                                src={list[i].img || '/profile.jpg'}
                                alt={`${list[i].name}'s testimonial for Magnet.wtf`}
                                width={48}
                                height={48}
                            />
                        ) : (
                            <span className='w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-white text-black'>
                                {testimonial.name.charAt(0)}
                            </span>
                        )}
                    </div>
                    <div className='w-full flex items-end justify-between gap-2'>
                        <div>
                            <div className='text-sm font-medium text-white'>{testimonial.name}</div>
                            {testimonial.title && <div className='mt-0.5 text-sm text-white'>{testimonial.title}</div>}
                            {testimonial.username && <div className='mt-0.5 text-sm text-white'>@{testimonial.username}</div>}
                        </div>

                        {testimonial.link && testimonial.type?.svg && (
                            <a href={testimonial.link} target='_blank' className='shrink-0 ' aria-label={testimonial.type?.ariaLabel}>
                                {testimonial.type?.svg}
                            </a>
                        )}
                    </div>
                </figcaption>
            </figure>
        </li>
    );
};

const Testimonials = () => {
    return (
        <div className='pt-48 pb-24 bg-white' id='testimonials'>
            <div className=' px-8 max-w-7xl mx-auto'>
                <div className='mx-auto flex flex-col items-center space-y-4 text-center'>
                    <h1 className='mt-8 px-6 text-center font-sans text-4xl font-bold tracking-tight drop-shadow-sm sm:text-5xl lg:font-heading lg:text-6xl lg:tracking-normal'>
                        <p className='relative inline-block'>
                            <span className='z-0 pb-1 text-black dark:from-white dark:to-white'>What they say</span>
                        </p>
                    </h1>
                    <p className='max-w-[85%] leading-normal sm:text-lg sm:leading-7'>
                        Don&apos;t take our word for it. Here&apos;s what they have to say about us.
                    </p>
                </div>

                <div className='py-10'></div>

                <ul role='list' className='grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4'>
                    <li>
                        <ul role='list' className='flex flex-col gap-y-6 sm:gap-y-8'>
                            {[...Array(2)].map((e, i) => (
                                <Testimonial key={i} i={i} />
                            ))}
                        </ul>
                    </li>

                    <li className='hidden md:grid order-none md:order-first lg:order-none col-span-2 grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
                        {/* BIG FEATURED TESTIMONIAL — THE LAST ONE IN THE LIST (11th) */}
                        <ul className='col-span-2'>
                            <li>
                                <figure className='relative h-full p-6 bg-muted rounded-lg'>
                                    <blockquote className='relative p-4'>
                                        <p className='text-lg font-medium text-base-content'>{list[list.length - 1].text}</p>
                                    </blockquote>
                                    <figcaption className='relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5'>
                                        <div className='overflow-hidden rounded-full bg-base-300 shrink-0'>
                                            {list[list.length - 1].img ? (
                                                <Image
                                                    className='w-12 h-12 rounded-full object-cover'
                                                    src={list[list.length - 1].img || '/profile.jpg'}
                                                    alt={`${list[list.length - 1].name}'s testimonial for MakeLanding`}
                                                    width={48}
                                                    height={48}
                                                />
                                            ) : (
                                                <span className='w-12 h-12 rounded-full flex justify-center items-center text-xl font-medium bg-white text-black'>
                                                    {list[list.length - 1].name.charAt(0)}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <div className='text-base font-medium text-base-content'>{list[list.length - 1].name}</div>
                                            {list[list.length - 1].title && (
                                                <div className='mt-1 text-base text-base-content/80'>{list[list.length - 1].title}</div>
                                            )}
                                            {list[list.length - 1].username && (
                                                <div className='mt-1 text-base text-base-content/80'>@{list[list.length - 1].username}</div>
                                            )}
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                        <ul role='list' className='flex flex-col gap-y-6 sm:gap-y-8'>
                            {[...Array(2)].map((e, i) => (
                                <Testimonial key={i} i={i + 3} />
                            ))}
                        </ul>
                        <ul role='list' className='flex flex-col gap-y-6 sm:gap-y-8'>
                            {[...Array(2)].map((e, i) => (
                                <Testimonial key={i} i={i + 5} />
                            ))}
                        </ul>
                    </li>
                    <li>
                        <ul role='list' className='flex flex-col gap-y-6 sm:gap-y-8'>
                            {[...Array(3)].map((e, i) => (
                                <Testimonial key={i} i={i + 7} />
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
