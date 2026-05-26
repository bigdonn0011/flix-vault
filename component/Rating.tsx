const Rating = ({value}: {value: any}) => { 
	
	const values = value < 999 ? (value / 100).toFixed(1) : (value /
	1000).toFixed(1) ;
	return (            <span className="absolute right-2 top-1
	-translate-y-1
            text-foreground bg-brand/40 border border-foreground active:scale-95
            py-2 px-2 rounded-2xl shadow-xl transition-transform
            duration-300 truncate">{values} stars
           </span>);};
            export default Rating;