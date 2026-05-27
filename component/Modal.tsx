'use client'
import { useEffect } from 'react'
import SearchBar from './SearchBar'
import ThemeSelector from './ThemeSelector'

const Modal = ({ onClose }: { onClose: () => void }) => {
	
	useEffect(() => {
		document.body.style.overflow = "hidden";
		
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);
	
	const closer = (event : React.MouseEvent) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}
	
const clicker = (r : React.MouseEvent) => {
r.stopPropagation();
if (r.target !== r.currentTarget) {
	return; 
		}
// onClose();
// 	
}
const closeClick= (r : React.MouseEvent) => {
r.stopPropagation();
onClose();
// 	
}
	return (
		<>
<div onClick={closer}
className="fixed inset-0 z-50 w-screen h-screen p-4 bg-slate-900/40
backdrop-blur-md flex items-center justify-center"><div className="w-full max-w-md bg-card border border-foreground/10 rounded-3xl p-6 shadow-2xl relative transition-all"
				>
					
					<div onClick={clicker} className="flex justify-between items-center mb-6">
						<div className="flex items-center gap-2">
							<span className="material-symbols-outlined text-brand text-xl">layers</span>
							<h1 className="text-brand font-black italic text-xl
							tracking-tighter">FLIX-VAULT</h1>
						</div>
						
						
						<button 
							onClick={closeClick}
							className="material-symbols-outlined text-foreground/70 hover:text-brand bg-foreground/5 border border-foreground/10 p-2 rounded-xl active:scale-90 transition-all duration-200 cursor-pointer"
						>
							close
						</button>
					</div>

					
					<div className="bg-background/40 p-4 rounded-2xl border border-foreground/5 mb-2">

						<SearchBar />
						<ThemeSelector />
</div>
		</div>
		</div>
		

		</>
	);
}; 

export default Modal;
