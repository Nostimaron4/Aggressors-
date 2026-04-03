import { PricingCalculator } from "../components/PricingCalculator";
import { CheckCircle2, ChevronDown } from "lucide-react";

export function Product() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Main Product Info */}
        <div className="flex-1">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-bold uppercase tracking-wider mb-4">
              League of Legends &bull; Rank Boosting
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Premium Rank Boosting</h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Achieve your dream rank with our top-tier professional players. We guarantee fast, secure, and discrete boosting services. Whether you're stuck in Elo hell or just don't have the time to grind, our boosters will get you to your desired rank efficiently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              "Top 0.1% Professional Boosters",
              "VPN Protection Included",
              "Offline Mode / Appear Offline",
              "24/7 Customer Support",
              "Money-Back Guarantee",
              "Live Streaming Available"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-navy p-4 rounded-xl border border-navy-light">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Requirements & FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Requirements & FAQ</h2>
            
            <div className="bg-navy border border-navy-light rounded-xl overflow-hidden">
              <button className="w-full px-6 py-4 flex items-center justify-between font-bold text-left hover:bg-navy-light transition-colors">
                What are the account requirements?
                <ChevronDown className="w-5 h-5 text-text-muted" />
              </button>
              <div className="px-6 pb-4 text-text-muted text-sm border-t border-navy-light pt-4">
                Your account must be level 30+ and have at least 20 champions unlocked for ranked play. Please ensure your account is not currently banned or restricted.
              </div>
            </div>

            <div className="bg-navy border border-navy-light rounded-xl overflow-hidden">
              <button className="w-full px-6 py-4 flex items-center justify-between font-bold text-left hover:bg-navy-light transition-colors">
                Is my account safe?
                <ChevronDown className="w-5 h-5 text-text-muted" />
              </button>
            </div>

            <div className="bg-navy border border-navy-light rounded-xl overflow-hidden">
              <button className="w-full px-6 py-4 flex items-center justify-between font-bold text-left hover:bg-navy-light transition-colors">
                Can I play while the boost is active?
                <ChevronDown className="w-5 h-5 text-text-muted" />
              </button>
            </div>
          </div>
        </div>

        {/* Sticky Sidebar */}
        <aside className="w-full lg:w-[400px] shrink-0">
          <PricingCalculator />
        </aside>

      </div>
    </div>
  );
}
