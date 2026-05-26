import SearchBar from "@/component/SearchBar";
// import MovieCard from "@/component/MovieCard";
// import { json } from 'react-router-dom';
import MovieCard  from "@/component/MovieCard";
import Footer  from "@/component/Footer";

export default async function Home({ searchParams }: {
	searchParams:
	Promise<{ q?: string }>
}) {

	const { q } = await searchParams;
	const searchTerm = q || "goat";

	const res = await
		fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(searchTerm)}`);
	const data = await res.json();
	const movies = data.description || [];


	return (
		<>
		<div className="">
		<main className="p-6 max-w-4xl mx-auto">
			<header className="flex justify-between items-center mb-8">
			<span className="material-symbols-outlined text-foreground active:scale-95
				text-xl	hover:scale-105 border
					border-zinc-800/50 active:border-brand active:ring-2 active:ring-brand
					active:outline-brand active:scale-110 shadow-xl transition-all duration-300
					truncate">menu</span>
				<h1 className="text-brand font-black italic text-2xl tracking-tighter">FLIX-VAULT</h1>
				<span className="material-symbols-outlined text-foreground active:scale-95
				text-xl	hover:scale-105 border
					border-zinc-800/50 active:border-brand active:ring-2 active:ring-brand
					active:outline-brand active:scale-110 shadow-xl transition-all duration-300
					truncate
">account_circle</span>
			</header>

			<SearchBar />

			<section>
				<h2 className="text-xl font-bold mb-6">Search Results for "{searchTerm}"</h2>
				<div className="flex overflow-x-auto gap-4 snap-x pb-6 no-scrollbar">
					{movies.length > 0 ? (
						movies.map((movie: any) => (
							<MovieCard
								key={movie["#IMDB_ID"]}
								title={movie["#TITLE"]}
								img={movie["#IMG_POSTER"]}
								year={movie["#YEAR"]}
							 rating={movie["#RANK"] || "5.0"}
							 
							/>
						))) : <p className="text-muted italic py-10 text-center w-full">
						"{searchTerm}" could not be found in the vault.
					</p>}
				</div>
			</section>
		</main>
		<Footer />
		</div>
		</>
	)
}
