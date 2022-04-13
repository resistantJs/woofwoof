import Layout from '@/components/layout/Layout';
import { GetStaticProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';
import Image from 'next/image';

const client = new GraphQLClient(
  'https://api-us-west-2.graphcms.com/v2/cl1md9tuz0ls801z089e6egmn/master'
);

export default function HomePage({ dogs }:{dogs:any}) { // this is from getStaticProps
  return (
    <Layout>
      <main>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <Image
              src={dog.image.url}
              alt={dog.name}
              width={300}
              height={300}
            />
            {dog.name}
            <br />
          </div>
        ))}
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
// this is your query
  const query = gql` 
    query Dogs() {
      dogs {
        id
        name
        image {
          id
          url
        }
      }
    }
  `;


//This is the request and awaiting the response
  const data: { dogs } = await client.request(query);

  if (!data.dogs) {
    return {
      notFound: true,
    };
  }

  return {
    props: { dogs: [...data.dogs] },
    revalidate: 60 * 60,
  };
};
