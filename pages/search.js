import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section>
          <p className="text-xs">Guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">Stays in </h1>
          <div>
            <p
              className="px-4 py-2 border rounded-full cursor-pointer
            hover:shadow-lg active:scale-95 active:background-gray-100 transition transform duration-100 ease-out"
            >
              Cancellation
            </p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
