/**
 * Site-wide settings. Everything Mustafa may need to change later lives here.
 */

export const BRAND = 'Mustafa the Athlete';
export const TRAINER = 'Mustafa';
export const BASE_GYM = 'Fitness First Oxford Street';

/** WhatsApp number in international format, digits only (no +, spaces or leading 0). */
export const WHATSAPP_NUMBER = '447867871618';
export const WHATSAPP_MESSAGE =
  "Hi Mustafa, I found you on your website and I'd like to book an intro session.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/**
 * Social profiles. TODO: paste the full profile URLs when ready.
 * While a URL is empty, the icon still shows but is marked "coming soon".
 */
export const SOCIALS = {
  instagram: '', // e.g. 'https://www.instagram.com/mustafatheathlete'
  tiktok: '', // e.g. 'https://www.tiktok.com/@mustafatheathlete'
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/testimonials/', label: 'Testimonials' },
  { href: '/client-workouts/', label: 'Client Workouts' },
];

export const SERVICES = [
  {
    slug: 'strength-and-conditioning',
    name: 'Strength & Conditioning',
    short: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    body: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio.',
      'Curabitur pretium tincidunt lacus, nulla gravida orci a odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    slug: 'sport-specific',
    name: 'Sport-Specific Training',
    short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    body: [
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
  },
  {
    slug: 'calisthenics',
    name: 'Calisthenics',
    short: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    body: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio.',
      'Curabitur pretium tincidunt lacus, nulla gravida orci a odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    slug: 'body-recomposition',
    name: 'Body Recomposition',
    short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    body: [
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
  },
  {
    slug: 'weight-loss',
    name: 'Weight Loss',
    short: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    body: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio.',
      'Curabitur pretium tincidunt lacus, nulla gravida orci a odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    slug: 'mobility-and-flexibility',
    name: 'Mobility & Flexibility',
    short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    body: [
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
  },
  {
    slug: 'rehabilitation',
    name: 'Rehabilitation',
    short: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    body: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio.',
      'Curabitur pretium tincidunt lacus, nulla gravida orci a odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
] as const;

/**
 * Home page rotating media. Put files in /public/media and set `src`,
 * e.g. { type: 'video', src: '/media/deadlift.mp4', alt: 'Mustafa deadlifting' }.
 * Items without a `src` show as empty placeholders.
 */
export const HOME_MEDIA: { type: 'image' | 'video'; src?: string; alt: string }[] = [
  { type: 'video', alt: 'Mustafa training video 1' },
  { type: 'image', alt: 'Mustafa training photo 1' },
  { type: 'video', alt: 'Mustafa training video 2' },
  { type: 'image', alt: 'Mustafa training photo 2' },
];
