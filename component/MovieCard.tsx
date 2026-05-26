import Rating from "./Rating"
const MovieCard = ({key, title, img, year, rating}: any) => {
	 return (
        <div className="snap-center shrink-0 w-40 relative">
            <img src={img} alt={title} className="rounded-lg object-cover h-60 w-full" />
<Rating value={rating}/>
            <h3 className="mt-2 font-bold text-sm truncate">{title}</h3>
            <p className="text-xs text-muted-foreground">{year}</p>
        </div>
    ); 
}

export default MovieCard;
