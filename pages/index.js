import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData, cardsData}) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull data from server -API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">x
          {exploreData?.map(item=>(
            <SmallCard
            key={item.img}
            img={item.img}
            location={item.location}
            distance={item.distance}
            />
          ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl text-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll p-3 -ml-3">
            {cardsData?.map(item =>(
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp").
  then(
    res => res.json
  );
  const cardsData = await fetch("https://links.papareact/zp1").then(
    res => res.json
  );
  return {
    props:{
      exploreData,
      cardsData,
    }
  }
}