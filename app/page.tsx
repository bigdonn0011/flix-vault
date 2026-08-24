declare const process: any;
import SearchBar from "@/component/SearchBar";

import MovieCard from "@/component/MovieCard";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Modal from "@/component/Modal";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const searchTerm = q?.toLowerCase().trim() || "smurfs";
  const apiKey =
    process.env.NEXT_PUBLIC_OMDB_API_KEY || process.env.OMDB_API_KEY;

  const res = await fetch(
    `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${apiKey}`,
  );
  // const res = await fetch(
  // `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(searchTerm)}`,
  ///);
  const data = await res.json();
  if (data.Response === "False") {
    console.log("OMDb API Error:", data.Error);
  }
  const movies = data.Search || [];

  return (
    <>
      <div className="">
        <main className="p-6 max-w-4xl mx-auto container min-h-screen">
          <Header />

          <SearchBar />

          <section className="">
            <h2 className="text-xl font-bold mb-6">
              Search Results for "{searchTerm}"
            </h2>
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-6 no-scrollbar">
              {movies.length > 0 ? (
                movies.map((movie: any) => {
                  // Check for OMDb properties, not the old API properties
                  if (!movie.imdbID || !movie.Poster || movie.Poster === "N/A")
                    return null;

                  return (
                    <MovieCard
                      id={movie.imdbID}
                      key={movie.imdbID}
                      title={movie.Title}
                      img={movie.Poster}
                      year={movie.Year}
                      rating={movie.imdbRating}
                    />
                  );
                })
              ) : (
                <p className="text-muted italic py-10 text-center w-full">
                  "{searchTerm}" could not be found in the vault.
                </p>
              )}
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}
