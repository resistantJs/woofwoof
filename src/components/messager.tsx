import Layout from '@/components/layout/Layout';
import { GetStaticProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';
import Image from 'next/image';

const client = new GraphQLClient(
  'https://api-us-west-2.graphcms.com/v2/cl1md9ra10mw601w4gfogcx4z/master'
);

export default function Messager({ friends }: { friends: any }) {
  const message = 'Theres somebody out there ...';

  return (
    <Layout>
      <div className=''>
        {friends &&
          friends.map((friend) => (
            // <div className='' key={friend.id}>
            //   <div className='flex relative'>
            //     <div className=' flex w-20 rounded-full bg-black '>
            //       <div
            //         className={`h-20 w-20 rounded-full bg-cover bg-no-repeat `}
            //         style={{ backgroundImage: `url(${friend.image.url})` }}
            //       ></div>
            //     </div>

            //     <div className='absolute flex flex-col'>
            //       {friend.lastName} {friend.firstName}

            //     </div>
            //     <div className='absolute w-full top-10 text-stone-400 '>
            //         {message}
            //       </div>
            //   </div>
            // </div>
            <div>
              <div className='flex py-[14px]'>
                <div className=' flex items-center rounded-full '>
                  <div
                    className={`m-3  flex h-3 w-3 rounded-full ${
                      friend.online ? 'bg-orange' : 'bg-white'
                    }  p-1`}
                  />
                  <div
                    className={`h-16 w-16 rounded-full bg-cover bg-no-repeat  `}
                    style={{ backgroundImage: `url(${friend.image.url})` }}
                  ></div>
                </div>
                <div className='relative -z-10 flex w-full flex-col pt-2 pl-3 text-left text-base '>
                  {friend.lastName} {friend.firstName}
                  <div
                    className={`absolute -z-10 bottom-2 overflow-auto text-sm ${
                      friend.online ? 'text-orange' : 'text-stone-400'
                    } `}
                  >
                    
                    {message}
                  </div>
                  <div
                    className={`absolute -z-10 right-3 top-0 overflow-auto text-xs ${
                      friend.online ? 'text-orange' : 'text-stone-400'
                    } `}
                  >
                    
                    21:45
                  </div>
                </div>
              </div>
              {/* <div className='w-full h-[1px] bg-stone-400'/> */}
            </div>
          ))}
      </div>
    </Layout>
  );
}
