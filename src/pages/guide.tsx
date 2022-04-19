import Nav from '@/components/nav';
import Next from '@/components/next';
import Link from 'next/link';

export default function Guide() {
  return (
    <>
      <Link href='/explore'>
        <h3 className='bg-orange py-6 px-4 text-white'> Back</h3>
      </Link>
      <div className='p-8'>
        <Nav active='profile' />
        <h2 className=' pb-8 text-2xl'>Do you own a dog or planing for one?</h2>
        <div
          className='h-[200px] w-full bg-no-repeat'
          style={{ backgroundImage: `url(images/BigBanner.jpg)` }}
        ></div>
        <p className='py-8'>
          Feeding dogs require techniques! If you don&apos;t want your dog. Post
          navigation As a leader, it is your responsibility to provide food.
          Feeding on a schedule is a good way to keep an eye on what your dog is
          consuming as well as letting him know that you are the leader. When I
          say schedule, I do not mean feed the same time every day. I mean, feed
          at different times every day, and make each feeding a training
          session. You want your dog to know that feeding happens when you are
          ready, not because of what his internal clock says. Feeding at
          different times in the morning and at different times in the evening.
          There are two ways to feed your dog. Regular feeding occurs when you
          place the bowl on the floor allowing the dog to eat it all, at one
          time. Hand-feeding occurs when the dog has to work for each bite of
          food he receives. Hand-feeding is a technique that should be done the
          very first week with your foster dog. The goal of feeding for
          leadership is for your dog to learn problem-solving techniques as well
          as show self-control. This is the foundation of all training.
        </p>
      </div>
    </>
  );
}
