import Layout from '@/components/layout/Layout';
import { GetStaticProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';
import Image from 'next/image';

const client = new GraphQLClient(
  'https://api-us-west-2.graphcms.com/v2/cl1md9ra10mw601w4gfogcx4z/master'
);

export default function Messager({ friends }: { friends: any }) {
  const message = 'Theres somebody out there ...';
  const imglink = '/images/Masha_Kristin.jpeg';
  const lastName = 'Kristin';
  const firstName = 'Masha';
  const online = 2;
  return (
    // <Layout>
    //   <div className='flex gap-3 overflow-auto pl-3 text-center text-sm'>
    //     {friends &&
    //       friends.map((friend) => (
    //         <div className='' key={friend.id}>
    //           <div className='flex'>
    //             <div className='relative flex w-20 rounded-full bg-black '>
    //               <div
    //                 className={`h-20 w-20 rounded-full bg-cover bg-no-repeat `}
    //                 style={{ backgroundImage: `url(${friends.image.url})` }}
    //               ></div>
    //             </div>
    //             <div className='relative flex flex-col'>
    //               {friends.lastName} {friends.firstName}
    //               <div className='absolute top-10 text-stone-400 '>
    //                 {message}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //   </div>
    // </Layout>
    <div className='flex '>
      <div className=' flex items-center rounded-full px-1'>
        <div
          className={`mr-2 ml-1 flex h-4 w-4 rounded-full ${
            online ? 'bg-orange' : 'bg-white'
          }  p-1`}
        />
        <div
          className={`h-20 w-20 rounded-full bg-cover bg-no-repeat  `}
          style={{ backgroundImage: `url(${imglink})` }}
        ></div>
      </div>
      <div className='text- relative flex w-full flex-col pt-2 pl-3 text-base '>
        {lastName} {firstName}
        <div
          className={`absolute  bottom-2 overflow-auto text-sm ${
            online ? 'text-orange' : 'text-stone-400'
          } `}
        >
          {message}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // this is your query
  const query = gql`
    query MyQuery {
      friends {
        id
        firstName
        lastName
        online
        image {
          url
          id
        }
      }
    }
  `;

  //This is the request and awaiting the response
  const data: { friends } = await client.request(query);

  if (!data.friends) {
    return {
      notFound: true,
    };
  }

  return {
    props: { friends: [...data.friends] },
    revalidate: 60 * 60,
  };
};
