import { useState } from "react";
import { ChevronRight, ShieldCheck, Clock, Star } from "lucide-react";

const RANKS = [
  { id: "bronze", name: "Bronze", priceMultiplier: 1 },
  { id: "silver", name: "Silver", priceMultiplier: 1.5 },
  { id: "gold", name: "Gold", priceMultiplier: 2.5 },
  { id: "platinum", name: "Platinum", priceMultiplier: 4 },
  { id: "diamond", name: "Diamond", priceMultiplier: 7 },
  { id: "master", name: "Master", priceMultiplier: 12 },
];

const EXTRAS = [
  { id: "express", name: "Express Delivery (+30%)", multiplier: 1.3 },
  { id: "stream", name: "Stream on Twitch (+15%)", multiplier: 1.15 },
  { id: "duo", name: "Play with Booster (+50%)", multiplier: 1.5 },
];

export function PricingCalculator() {
  const [currentRank, setCurrentRank] = useState(0);
  const [desiredRank, setDesiredRank] = useState(2);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Base price calculation logic
  const calculatePrice = () => {
    if (currentRank >= desiredRank) return 0;
    
    let basePrice = 0;
    for (let i = currentRank; i < desiredRank; i++) {
      basePrice += 15 * RANKS[i].priceMultiplier;
    }

    let finalPrice = basePrice;
    selectedExtras.forEach((extraId) => {
      const extra = EXTRAS.find((e) => e.id === extraId);
      if (extra) {
        finalPrice *= extra.multiplier;
      }
    });

    return finalPrice.toFixed(2);
  };

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-navy rounded-2xl border border-navy-light p-6 shadow-xl sticky top-24">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        Customize Your Boost
      </h3>

      {/* Rank Selection */}
      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">Current Rank</label>
          <select
            className="w-full bg-navy-dark border border-navy-light rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            value={currentRank}
            onChange={(e) => {
              const val = Number(e.target.value);
              setCurrentRank(val);
              if (val >= desiredRank) setDesiredRank(Math.min(val + 1, RANKS.length - 1));
            }}
          >
            {RANKS.map((rank, idx) => (
              <option key={`current-${rank.id}`} value={idx}>
                {rank.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
          <div className="bg-navy-light p-2 rounded-full">
            <ChevronRight className="w-5 h-5 text-primary rotate-90 sm:rotate-0" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">Desired Rank</label>
          <select
            className="w-full bg-navy-dark border border-navy-light rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            value={desiredRank}
            onChange={(e) => setDesiredRank(Number(e.target.value))}
          >
            {RANKS.map((rank, idx) => (
              <option key={`desired-${rank.id}`} value={idx} disabled={idx <= currentRank}>
                {rank.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Extras */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-text-muted mb-3">Additional Options</label>
        <div className="space-y-3">
          {EXTRAS.map((extra) => (
            <label
              key={extra.id}
              className={`flex items-center p-3 rounded-xl border cursor-pointer transition-colors ${
                selectedExtras.includes(extra.id)
                  ? "bg-primary/10 border-primary"
                  : "bg-navy-dark border-navy-light hover:border-gray-600"
              }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={selectedExtras.includes(extra.id)}
                onChange={() => toggleExtra(extra.id)}
              />
              <div
                className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${
                  selectedExtras.includes(extra.id)
                    ? "bg-primary border-primary"
                    : "border-gray-500"
                }`}
              >
                {selectedExtras.includes(extra.id) && <ShieldCheck className="w-3 h-3 text-white" />}
              </div>
              <span className="text-sm font-medium">{extra.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Summary & Checkout */}
      <div className="border-t border-navy-light pt-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-text-muted text-sm mb-1">Total Price</p>
            <div className="text-4xl font-extrabold text-white">${calculatePrice()}</div>
          </div>
          <div className="text-right">
            <p className="text-text-muted text-sm mb-1 flex items-center justify-end gap-1">
              <Clock className="w-4 h-4" /> Est. Time
            </p>
            <p className="font-medium text-white">1-2 Days</p>
          </div>
        </div>

        <button
          disabled={currentRank >= desiredRank}
          className="w-full py-4 bg-primary hover:bg-primary-hover disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
        >
          Add to Cart
        </button>
        
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-text-muted">
          <ShieldCheck className="w-4 h-4 text-green-400" />
          <span>100% Safe & Secure Checkout</span>
        </div>
      </div>
    </div>
  );
}
