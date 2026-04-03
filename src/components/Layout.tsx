import { Link, Outlet } from "react-router-dom";
import { ShoppingCart, User, Menu } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-md border-b border-navy-light">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-extrabold tracking-tighter text-white">
              AGGRESSORS<span className="text-primary">.</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/category/wow" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Games</Link>
              <Link to="#" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Top Offers</Link>
              <Link to="#" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Reviews</Link>
              <Link to="#" className="text-sm font-medium text-text-muted hover:text-white transition-colors">FAQ</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/checkout" className="p-2 text-text-muted hover:text-white transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-[10px] font-bold flex items-center justify-center rounded-full text-white">
                2
              </span>
            </Link>
            <button className="hidden sm:flex items-center gap-2 bg-navy-light hover:bg-navy-light/80 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <User className="w-4 h-4" /> Sign In
            </button>
            <button className="md:hidden p-2 text-text-muted">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy-dark border-t border-navy-light py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Aggressors. Premium Gaming Boosting. Not affiliated with any game publishers.
          </p>
        </div>
      </footer>
    </div>
  );
}
