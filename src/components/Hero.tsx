import { Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark pt-24 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-primary blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-text-muted">
            Dominate the Game. <br className="hidden md:block" />
            <span className="text-primary">Skip the Grind.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Premium boosting services by top 0.1% players. Fast, secure, and guaranteed results for your favorite competitive games.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-10 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-navy/80 border border-navy-light rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-lg backdrop-blur-sm"
              placeholder="What game or service are you looking for? (e.g. WoW Gold, LoL Rank)"
            />
            <div className="absolute inset-y-2 right-2">
              <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-semibold transition-colors h-full flex items-center gap-2">
                Search
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/category/wow"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
            >
              Explore Games <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/category/destiny2"
              className="w-full sm:w-auto px-8 py-4 bg-navy border border-navy-light hover:bg-navy-light text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Top Offers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
