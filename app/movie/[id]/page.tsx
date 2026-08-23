declare const process: any;
import SearchBar from "@/component/SearchBar";
import MovieCard from "@/component/MovieCard";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export default async function MovieDetailPage({ params }: RouteParams) {
  const { id } = await params;
  
  const apiKey =
  process.env.NEXT_PUBLIC_OMDB_API_KEY || process.env.OMDB_API_KEY;

  const res = await fetch(
    `https://www.omdbapi.com/?i=${encodeURIComponent(id)}&plot=full&apikey=${apiKey}`,
  );
  const movie = await res.json();
  const downloadUrl = `https://vidsrc.me/embed/movie/${id}`;
  if (movie.Response === "False" || !movie.imdbID) {
    return (
      <main className="p-6 bg-background text-foreground min-h-screen flex items-center justify-center">
        <p className="italic text-foreground">
          "{id}" could not be retrieved from the Vault .
        </p>
      </main>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="p-6 max-w-4xl mx-auto container">
        <Header />

        <div className="mb-6">
          <a
            href="/"
            className="inline-flex items-center text-sm font-bold
					text-zinc-400 hover:text-brand transition-all gap-2"
          >
            <span
              className="p-4 py-2 bg-background text-foreground border
				border-foreground rounded-2xl shadow-xl active:scale-95 transition-all
				duration-300"
            >
              <span>&larr;</span> Return to Vault
            </span>
          </a>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start my-8 bg-background/30 p-6 rounded-2xl border border-background shadow-2xl">
          <div className="w-full aspect-[2/3] rounded-xl overflow-hidden shadow-xl border border-background bg-background">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <div>
              <span className="text-xs font-mono font-bold bg-brand/10 text-brand px-3 py-1 rounded-full border border-brand/20">
                Movie Index ID: {id}
              </span>
              <h1 className="text-2xl md:text-4xl font-black tracking-tight mt-3">
                {movie.Title}
              </h1>
            </div>

            <div className="border-t border-background pt-4 space-y-3 text-sm text-foreground ">
              <p>
                <span className="font-bold text-foreground  block text-xs uppercase tracking-wider mb-0.5">
                  Year of Release
                </span>
                <span className="text-base text-foreground font-semibold">
                  {movie.Year}
                </span>
              </p>
              <p>
                <span
                  className="font-bold text-foreground  block text-xs uppercase
								tracking-wider mb-0.5"
                >
                  Search Rank Priority
                </span>
                <span className="text-base text-brand font-mono font-bold">
                  Current Rankings:{" "}
                  {movie.imdbRating !== "N/A"
                    ? `★ ${movie.imdbRating} / 10`
                    : "N/A"}
                </span>
              </p>
              <div className="bg-background p-4 rounded-xl border border-background">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground  mb-2">
                  Plot Summary
                </h3>
                <p className="text-sm text-foreground  leading-relaxed">
                  {movie.Plot ||
                    "No official plot summary has been uploaded to Flix-Vault yet. Check back later for plot updates."}
                </p>
              </div>
              <p>
                <span className="font-bold text-foreground block text-xs uppercase tracking-wider mb-0.5">
                  Lead Actors
                </span>
                <span className="text-base text-foreground ">
                  {Array.isArray(movie.Actors)
                    ? movie.Actors.join(", ")
                    : movie.Actors || "N/A"}
                </span>
              </p>
            </div>

            <a
              href={downloadUrl}
              download={`${movie.Title || "Flix-Vault-movie"}.mp4`}
              target="_blank"
              rel="noopener norefferer "
            >
              <button
                className="w-full truncate 
							p-8 py-6 text-center font-bold bg-brand
							text-foreground text-xl uppercase
							 m-4 rounded-2xl shadow-xl truncate active:scale-95 transition-all
				duration-300 hover:scale-110"
              >
                Stream {movie.Title} Online
              </button>
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
