'use client';

import React from 'react';
import { HeroParallax } from './ui/hero-parallax';

const products = [
    {
        title: 'Moonbeam',
        link: 'https://gomoonbeam.com',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
    },
    {
        title: 'Cursor',
        link: 'https://cursor.so',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cursor.png',
    },
    {
        title: 'Rogue',
        link: 'https://userogue.com',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/rogue.png',
    },

    {
        title: 'Editorially',
        link: 'https://editorially.org',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editorially.png',
    },
    {
        title: 'Editrix AI',
        link: 'https://editrix.ai',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editrix.png',
    },
    {
        title: 'Pixel Perfect',
        link: 'https://app.pixelperfect.quest',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
    },

    {
        title: 'Algochurn',
        link: 'https://algochurn.com',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
    },
    {
        title: 'Aceternity UI',
        link: 'https://ui.aceternity.com',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
    },
    {
        title: 'Tailwind Master Kit',
        link: 'https://tailwindmasterkit.com',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
    },
    {
        title: 'SmartBridge',
        link: 'https://smartbridgetech.com',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
    },
    {
        title: 'Renderwork Studio',
        link: 'https://renderwork.studio',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
    },

    {
        title: 'Creme Digital',
        link: 'https://cremedigital.com',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
    },
    {
        title: 'Golden Bells Academy',
        link: 'https://goldenbellsacademy.com',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
    },
    {
        title: 'Invoker Labs',
        link: 'https://invoker.lol',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/invoker.png',
    },
    {
        title: 'E Free Invoice',
        link: 'https://efreeinvoice.com',
        thumbnail: 'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
    },
];

export function Hero() {
    return <HeroParallax products={products} />;
}

export const users = [
    {
        name: 'Manu Arora',
        designation: 'Founder, Algochurn',
        image: 'https://picsum.photos/id/10/300/300',
        badge: 'Mentor',
    },
    {
        name: 'Sarah Singh',
        designation: "Founder, Sarah's Kitchen",
        image: 'https://picsum.photos/id/11/300/300',
        badge: 'Mentor',
    },
    {
        name: 'John Doe',
        designation: 'Software Engineer, Tech Corp',
        image: 'https://picsum.photos/id/12/300/300',
        badge: 'Mentor',
    },
    {
        name: 'Jane Smith',
        designation: 'Product Manager, Innovate Inc',
        image: 'https://picsum.photos/id/13/300/300',
        badge: 'Mentor',
    },
    {
        name: 'Robert Johnson',
        designation: 'Data Scientist, DataWorks',
        image: 'https://picsum.photos/id/14/300/300',
        badge: 'Mentor',
    },
    {
        name: 'Emily Davis',
        designation: 'UX Designer, DesignHub',
        image: 'https://picsum.photos/id/15/300/300',
        badge: 'Mentor',
    },
    {
        name: 'Michael Miller',
        designation: 'CTO, FutureTech',
        image: 'https://picsum.photos/id/16/300/300',
        badge: 'Mentor',
    },
    {
        name: 'Sarah Brown',
        designation: 'CEO, StartUp',
        image: 'https://picsum.photos/id/17/300/300',
    },
    {
        name: 'James Wilson',
        designation: 'DevOps Engineer, CloudNet',
        image: 'https://picsum.photos/id/18/300/300',
        badge: 'Something',
    },
    {
        name: 'Patricia Moore',
        designation: 'Marketing Manager, MarketGrowth',
        image: 'https://picsum.photos/id/19/300/300',
        badge: 'Mentor',
    },
    {
        name: 'Richard Taylor',
        designation: 'Frontend Developer, WebSolutions',
        image: 'https://picsum.photos/id/20/300/300',
    },
    {
        name: 'Linda Anderson',
        designation: 'Backend Developer, ServerSecure',
        image: 'https://picsum.photos/id/21/300/300',
    },
    {
        name: 'William Thomas',
        designation: 'Full Stack Developer, FullStack',
        image: 'https://picsum.photos/id/22/300/300',
        badge: 'Badger',
    },
    {
        name: 'Elizabeth Jackson',
        designation: 'Project Manager, ProManage',
        image: 'https://picsum.photos/id/23/300/300',
        badge: 'Mentor',
    },
    {
        name: 'David White',
        designation: 'Database Administrator, DataSafe',
        image: 'https://picsum.photos/id/24/300/300',
        badge: 'Advocate',
    },
    {
        name: 'Jennifer Harris',
        designation: 'Network Engineer, NetConnect',
        image: 'https://picsum.photos/id/25/300/300',
    },
    {
        name: 'Charles Clark',
        designation: 'Security Analyst, SecureIT',
        image: 'https://picsum.photos/id/26/300/300',
    },
    {
        name: 'Susan Lewis',
        designation: 'Systems Analyst, SysAnalyse',
        image: 'https://picsum.photos/id/27/300/300',
    },
    {
        name: 'Joseph Young',
        designation: 'Mobile Developer, AppDev',
        image: 'https://picsum.photos/id/28/300/300',
        badge: 'Mentor',
    },
    {
        name: 'Margaret Hall',
        designation: 'Quality Assurance, BugFree',
        image: 'https://picsum.photos/id/29/300/300',
        badge: 'Developer',
    },
];
