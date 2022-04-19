import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Nav from '@/components/nav';
import Vercel from '~/svg/Vercel.svg';
import Map from '@/components/svgs/map';
import SearchBar from '@/components/SearchBar';
import SwitchButton from '@/components/SwitchButton';
import GoButton from '@/components/GoButton';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (

      <div className='h-full w-full' style={{ backgroundImage: `url(images/map.jpg)` }}>
        <Nav active='map' />
        <SearchBar />

        <div className=' min-h-screen flex-col items-center justify-center text-center'>
        </div>
        <div className=' absolute w-full  bottom-[130px]'>
          <div className=' gap-12 flex justify-center '>
        <SwitchButton />
        <GoButton />
        </div>
        </div>
      </div>
      
  );
}
