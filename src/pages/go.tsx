import * as React from 'react';

import Nav from '@/components/nav';
import SwitchButton from '@/components/SwitchButton';
import GoButton from '@/components/GoButton';
import X from '@/components/X';

export default function Go() {
  return (
    <div
      className='h-full w-full'
      style={{ backgroundImage: `url(images/map.jpg)` }}
    >
      <X />
      <Nav active='map' />
      <div className=' min-h-screen flex-col items-center justify-center text-center'></div>
      <div className=' absolute bottom-[130px]  w-full'>
        <div className=' flex justify-center gap-12 '>
          <SwitchButton active={true}/>
          <GoButton />
        </div>
      </div>
    </div>
  );
}
