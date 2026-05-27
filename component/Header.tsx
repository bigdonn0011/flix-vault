'use client'
import {useState} from 'react';
import Modal from './Modal'


const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
return (
	<>
<div>
				<header className="flex justify-between items-center mb-8">
			<span className="material-symbols-outlined text-foreground active:scale-95
				text-xl	hover:scale-105 border
					border-zinc-800/50 active:border-brand active:ring-2 active:ring-brand
					active:outline-brand active:scale-110 shadow-xl transition-all duration-300
					truncate" onClick={()=>setIsOpen(true)}>menu</span>
<div className="flex">
							<span className="material-symbols-outlined text-brand text-xl">layers</span>
							<h1 className="text-brand font-black italic text-xl
							tracking-tighter">FLIX-VAULT</h1></div>
				<span className="material-symbols-outlined text-foreground active:scale-95
				text-xl	hover:scale-105 border
					border-zinc-800/50 active:border-brand active:ring-2 active:ring-brand
					active:outline-brand active:scale-110 shadow-xl transition-all duration-300
					truncate
">account_circle</span>
			</header>
		
			{isOpen && <Modal onClose={()=>setIsOpen(false)} />}
				</div>
	</>
	)
};

export default Header