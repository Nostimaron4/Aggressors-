import { Link } from "react-router-dom";

const GAMES = [
  { id: "wow", name: "World of Warcraft", image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&q=80&w=800", count: "1,240 Offers" },
  { id: "lol", name: "League of Legends", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800", count: "850 Offers" },
  { id: "destiny2", name: "Destiny 2", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800", count: "620 Offers" },
  { id: "valorant", name: "Valorant", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800", count: "430 Offers" },
  { id: "apex", name: "Apex Legends", image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80&w=800", count: "310 Offers" },
  { id: "tarkov", name: "Escape from Tarkov", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800", count: "280 Offers" },
];

export function GameGrid() {
  return (
    <section className="py-20 bg-bg-main">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Games</h2>
            <p className="text-text-muted">Select a game to see available boosting services</p>
          </div>
          <Link to="/games" className="text-primary hover:text-primary-hover font-medium hidden sm:block">
            View All Games &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAMES.map((game) => (
            <Link
              key={game.id}
              to={`/category/${game.id}`}
              className="group relative h-64 rounded-2xl overflow-hidden bg-navy block"
            >
              <img
                src={game.image}
                alt={game.name}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1">{game.name}</h3>
                <p className="text-primary font-medium">{game.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
