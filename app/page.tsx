import SearchBar from "@/component/SearchBar";
// import MovieCard from "@/component/MovieCard";
// import { json } from 'react-router-dom';
import MovieCard from "@/component/MovieCard";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Modal from "@/component/Modal";
export default async function Home({ searchParams }: {
	searchParams:
	Promise<{ q?: string }>
}) {

	const { q } = await searchParams;
	const searchTerm = q?.toLowerCase() || "fish";

	const res = await
		fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(searchTerm)}`);
	const data = await res.json();
	const movies = data.description || [];


	return (
		<>

			<div className="">
				<main className="p-6 max-w-4xl mx-auto container min-h-screen">
					<Header />

					<SearchBar />

					<section className="">

						<h2 className="text-xl font-bold mb-6">Search Results for "{searchTerm}"</h2>
						<div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-6 no-scrollbar">
							{movies.length > 0 ? (
								movies.map((movie: any) => {
									if (!movie["#IMDB_ID"] || !movie["#IMG_POSTER"]) return null;
									return (
										<MovieCard
											id={movie["#IMDB_ID"]}
											key={movie["#IMDB_ID"]}
											title={movie["#TITLE"]}
											img={movie["#IMG_POSTER"]}
											year={movie["#YEAR"]}
											rating={movie["#RANK"] || "5.0"}

										/>)
								})) : <p className="text-muted italic py-10 text-center w-full">
								"{searchTerm}" could not be found in the vault.
							</p>}
						</div>
					</section>

					<Footer />
				</main>
			</div>

		</>
	)
}
