import Layout from '@/components/layout/Layout';


export default function FriendsBanner({ friends }: { friends: any }) {
  // this is from getStaticProps
  return (
    <Layout>
      <div className='flex overflow-auto gap-3 pl-3 text-sm text-center'>
        {friends && friends.map((friend) => (
          <div  className='' key={friend.id}>
            {/* <Image
              src={friend.image.url}
              alt={friend.firstName}
              width={300}
              height={300}
            />
            {friend.firstName} {friend.lastName}
            <br /> */}
            <div className='relative w-[64px] rounded-full border-2 border-black '>
              <div
                className={`h-[60px] w-[60px]  justify-self-center rounded-full bg-cover bg-no-repeat `}
                style={{ backgroundImage: `url(${friend.image.url})` }}
              ></div>
              <div
                className={`absolute top-[45px] left-[45px] h-4 w-4 rounded-full border-[1.5px] border-black ${
                  friend.online ? 'bg-green-400' : 'bg-stone-400'
                }  `}
              />
            </div>
            {friend.firstName}
          </div>
        ))}
      </div>
    </Layout>
  );
}
