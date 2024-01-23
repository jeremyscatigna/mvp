import { Arc } from '@/assets/companies/arc';
import { CashApp } from '@/assets/companies/cash-app';
import { Descript } from '@/assets/companies/descript';
import { Hex } from '@/assets/companies/hex';
import { Mercury } from '@/assets/companies/mercury';
import { Ramp } from '@/assets/companies/ramp';
import { Raycast } from '@/assets/companies/raycast';
import { Remote } from '@/assets/companies/remote';
import { Retool } from '@/assets/companies/retool';
import { Runway } from '@/assets/companies/runway';
import { Super } from '@/assets/companies/super';
import { Vercel } from '@/assets/companies/vercel';
import Testimonials from './testimonials';

const companies = [
    {
        name: 'Arc',
        svg: Arc,
    },
    {
        name: 'Cash App',
        svg: CashApp,
    },
    {
        name: 'Descript',
        svg: Descript,
    },
    {
        name: 'Hex',
        svg: Hex,
    },
    {
        name: 'Mercury',
        svg: Mercury,
    },
    {
        name: 'Ramp',
        svg: Ramp,
    },
    {
        name: 'Raycast',
        svg: Raycast,
    },
    {
        name: 'Remote',
        svg: Remote,
    },
    {
        name: 'Retool',
        svg: Retool,
    },
    {
        name: 'Runway',
        svg: Runway,
    },
    {
        name: 'Super',
        svg: Super,
    },
    {
        name: 'Vercel',
        svg: Vercel,
    },
];

export function Companies() {
    return (
        <div className='w-full h-[30rem] flex flex-col justify-center items-center pb-24'>
            <h2 className='text-lg md:text-4xl font-semibold text-black dark:text-white text-center'>
                The foundation of the world’s best products. <br />
                From next-gen startups to established enterprises.
            </h2>
            <div className='w-full grid grid-cols-6 grid-rows-2 gap-4 max-w-7xl mt-8 md:mt-24'>
                {companies.map((company) => (
                    <div key={company.name} className='flex flex-col w-full justify-center items-center'>
                        <company.svg />
                    </div>
                ))}
            </div>
        </div>
    );
}
