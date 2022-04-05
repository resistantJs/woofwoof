import Banner from '@/components/Banner';
import Nav from '@/components/nav';
export default function Explore() {
  return (
    <div className='bg-gray-100'>
      <Nav active='explore'/>
      <div className='bg-orange py-20'></div>
      <Banner
        imgHeight='11rem'
        featured={false}
        imgLink='/images/BigBanner.jpg'
        big={true}
        title='Tips for healthy happy dogs'
        time=''
      />

      <h2 className='my-3 mx-10'>Care</h2>
      <div className='pl-10 pr-3 flex gap-3 overflow-x-auto'>
        <Banner
          time='10 min'
          imgHeight='8rem'
          featured={true}
          imgLink='/images/care1.jpg'
          big={false}
          title='The Best Cat Foods to Buy'
        />
        <Banner
          time='9 min'
          imgHeight='8rem'
          featured={false}
          imgLink='/images/care2.jpg'
          big={false}
          title='Pet Medical That You Sho...'
        />
        <Banner
          time='18 min'
          imgHeight='8rem'
          featured={false}
          imgLink='/images/care3.jpg'
          big={false}
          title='How to Feed a Turkey Well'
        />
      </div>
      <h2 className='my-3 mx-10'>Guides</h2>
      <div className='pl-10 pr-3 flex gap-3 overflow-x-auto pb-32'>
        <Banner
          time='12 min'
          imgHeight='8rem'
          featured={false}
          imgLink='/images/guides1.jpg'
          big={false}
          title='How to Train a Boarder Collie'
        />
        <Banner
          time='2 min'
          imgHeight='8rem'
          featured={true}
          imgLink='/images/guides2.jpg'
          big={false}
          title='How to Choose a Pet Food Brand'
        />
        <Banner
          time='5 min'
          imgHeight='8rem'
          featured={false}
          imgLink='/images/guides3.jpg'
          big={false}
          title='Know Your Pets in Five Minutes!'
        />
      </div>
    </div>
  );
}
