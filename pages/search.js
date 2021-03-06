import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${guests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            100+ stays - {range} - for {guests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 whitespace-nowrap text-gray-800">
            <p className="button">Cancellation</p>
            <p className="button">Price</p>
            <p className="button">Rooms</p>
            <p className="button">Beds</p>
            <p className="button">Type of filter</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults: searchResults,
    },
  };
}
