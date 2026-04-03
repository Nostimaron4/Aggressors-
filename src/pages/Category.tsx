import { Link, useParams } from "react-router-dom";
import { Filter, Star, Clock } from "lucide-react";

const SERVICES = [
  { id: "1", title: "Rank Boost to Diamond", price: 149.99, time: "2-3 Days", rating: 4.9, reviews: 124 },
  { id: "2", title: "Placement Matches (5 Games)", price: 45.00, time: "12 Hours", rating: 5.0, reviews: 89 },
  { id: "3", title: "Coaching Session (2 Hours)", price: 60.00, time: "Flexible", rating: 4.8, reviews: 210 },
  { id: "4", title: "Win Boost (Per Win)", price: 15.00, time: "1-2 Hours", rating: 4.7, reviews: 56 },
  { id: "5", title: "Account Leveling (1-30)", price: 85.00, time: "4-5 Days", rating: 4.9, reviews: 34 },
  { id: "6", title: "Battle Pass Completion", price: 120.00, time: "1-2 Weeks", rating: 4.6, reviews: 12 },
];

export function Category() {
  const { gameId } = useParams();

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-64 shrink-0">
        <div className="bg-navy rounded-2xl p-6 border border-navy-light sticky top-24">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-navy-light">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">Filters</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-text-muted mb-3 uppercase tracking-wider">Service Type</h3>
              <div className="space-y-2">
                {["Rank Boosting", "Placement Matches", "Coaching", "Accounts"].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary bg-navy-dark" />
                    <span className="text-sm group-hover:text-primary transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text-muted mb-3 uppercase tracking-wider">Price Range</h3>
              <input type="range" className="w-full accent-primary" min="0" max="500" />
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>$0</span>
                <span>$500+</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 capitalize">{gameId || "Game"} Boosting Services</h1>
          <p className="text-text-muted">Find the best professional players to help you achieve your goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-navy rounded-2xl border border-navy-light overflow-hidden hover:border-primary/50 transition-colors group">
              <div className="h-40 bg-navy-light relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                <div className="absolute top-4 right-4 bg-navy-dark/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  {service.rating} ({service.reviews})
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {service.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
                  <Clock className="w-4 h-4" />
                  Est. {service.time}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-extrabold text-white">
                    ${service.price.toFixed(2)}
                  </div>
                  <Link
                    to={`/product/${service.id}`}
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
