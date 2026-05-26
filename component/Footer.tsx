const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 bg-brand p-10 mt-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                
                {/* Brand Logo Section */}
                <div className="flex items-start">
                    <h2 className="font-black italic text-2xl tracking-tighter text-zinc-900">
                        FLIX-VAULT
                    </h2>
                    <span className="text-[10px] font-bold text-zinc-900 ml-0.5 mt-1 leading-none">
                        &trade;
                    </span>
                </div>

                {/* Minimalist Divider */}
                <div className="w-12 h-[2px] bg-zinc-900/20 my-4 rounded-full" />

                {/* Credits Section */}
                <div className="flex flex-col items-center gap-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900/80">
                        Designed by Big-DON
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
