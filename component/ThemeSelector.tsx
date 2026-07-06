'use client'; import { useEffect } from 'react';
import { useState } from 'react';
import Modal from "./Modal";

const ThemeSelector = () => {
	const [isLight, setIsLight] = useState<boolean>(() => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('theme') === 'dark'
		} return false
	});

	useEffect(() => {
		const rootElement = window.document.documentElement
		if (isLight) {
			rootElement.classList.add('light');
			rootElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
		else {
			rootElement.classList.remove('light');
			localStorage.setItem('theme', 'dark');
			rootElement.classList.add('dark');
		}
	}, [isLight])


	const handleTheme = () => {
		setIsLight(prev => !prev)

	}
	return (
		<>
			<div onClick={handleTheme}
				className="flex items-center justify-between p-4 bg-background/50 border border-foreground/5 rounded-2xl cursor-pointer hover:bg-background/80 active:scale-[0.99] transition-all duration-200"
			>
				<h3>Set Theme</h3>

				<span className="material-symbols-outlined text-brand text-2xl active:scale-90 transition-all p-1 select-none">
					{isLight ? 'light_mode' : 'dark_mode'}
				</span>

			</div>
		</>)
}

export default ThemeSelector