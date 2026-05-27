
'use client'
import React, { use, useState } from 'react';

// 'use client'

// 'use client'


import { useRouter } from 'next/navigation';
export default function SearchBar() {
	const [query, setQuery] = useState('');
	const router = useRouter();
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (!query.trim()) return;
		router.push(`/?q=${encodeURIComponent(query)}`)
	}
	return (
		<form className="relative w-full mb-8 px-2" action="{handleSearch}"
		method="get">
			<input type="search" name="search" placeholder="Search movies..."
				value={query} onChange={(e) => setQuery(e.target.value)}
				className="w-full bg-card text-foreground px-6 py-4 rounded-2xl border
					border-zinc-800/50 focus:border-brand focus:ring-1 focus:ring-brand
					focus:outline-brand focus:scale-110 
					outline-none transition-all placeholder:text-muted/50 shadow-xl "/><button
				type="submit"
				className="absolute right-6 top-1/2 -translate-y-1/2 text-brand active:scale-90 transition-transform"
			>
				<span className="material-symbols-outlined text-2xl">search</span>
			</button>
		</form>
	)
}
