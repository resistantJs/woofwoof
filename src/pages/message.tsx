import Nav from '@/components/nav';
import Friend from '@/components/friend';
import Messager from '@/components/messager';
import FriendsBanner from '../components/graphiccmsdemo';

import { GetStaticProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(
  'https://api-us-west-2.graphcms.com/v2/cl1md9ra10mw601w4gfogcx4z/master'
);

export default function Message({friends}) {
  return (
    <>
      <div>
        <Nav active='message' />

        <div className='p-7 flex justify-between'>
          <h1 className=''>Messages</h1>
          <div className='self-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              fill='#000'
              fillRule='evenodd'
              d='M11 20a1 1 0 102 0v-7h7a1 1 0 100-2h-7V4a1 1 0 10-2 0v7H4a1 1 0 100 2h7v7z'
              clipRule='evenodd'
            ></path>
          </svg>
          </div>
        </div>
        <FriendsBanner friends={friends}/>
        <Messager friends = {friends}/>
      </div>
    </>
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
  