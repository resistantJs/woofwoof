import Layout from '@/components/layout/Layout';
import { GetStaticProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';
import Image from 'next/image';

const client = new GraphQLClient(
  'https://api-us-west-2.graphcms.com/v2/cl1md9ra10mw601w4gfogcx4z/master'
);

export default function Friend() {
  const imglink = '/images/Masha_Kristin.jpeg';
  const lastName = 'Kristin';
  const firstName = 'Masha';
  const online = 2;
  return (
    <>
    
      <div className='relative flex w-20 rounded-full bg-black p-0.5'>
        <div
          className={`h-20 w-20 justify-self-center rounded-full bg-cover bg-no-repeat `}
          style={{ backgroundImage: `url(${imglink})` }}
        ></div>
        <div
          className={`absolute top-[60px] left-[60px] h-5 w-5 rounded-full border-[1.5px] border-black ${
            online ? 'bg-green-400' : 'bg-stone-400'
          }  `}
        />
      </div>
      {lastName} {firstName}
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
