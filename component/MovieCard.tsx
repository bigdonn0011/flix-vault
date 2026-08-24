import Rating from "./Rating";
import Link from "next/link";
interface MovieCardProps {
  id: string | number;
  title: string;
  img: string;
  year: number | string;
  rating: number | string;
}
const MovieCard = ({ id, title, img, year, rating }: MovieCardProps) => {
  return (
    <Link
      href={`/movie/${id}`}
      className="snap-center shrink-0 w-40 relative border p-2
        rounded-lg shadow-xl no-scrollbar active:scale-95 active:ring
        active:ring-4 hover:scale-105
        2 active:-translate-y-5 transition-all duration-400"
    >
      <img
        src={img}
        alt={title}
        className="rounded-lg object-cover h-60 w-full"
      />
      <Rating value={rating} />
      <h3 className="mt-2 font-bold text-sm truncate">{title}</h3>
      <p className="text-xs text-muted-foreground">{year}</p>
    </Link>
  );
};

export default MovieCard;
