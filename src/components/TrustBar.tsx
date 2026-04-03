import { Star } from "lucide-react";

export function TrustBar() {
  return (
    <div className="bg-navy-dark py-8 border-b border-navy-light">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Trustpilot Mock */}
        <div className="flex items-center gap-4 bg-navy px-6 py-3 rounded-xl border border-navy-light">
          <div className="flex flex-col">
            <span className="text-sm text-text-muted font-medium">Excellent</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-green-500 p-1 rounded-sm">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-sm">
            <span className="font-bold text-white">4.9</span>
            <span className="text-text-muted"> out of 5 based on </span>
            <span className="font-bold text-white">12,450</span>
            <span className="text-text-muted"> reviews</span>
          </div>
        </div>

        {/* Payment Providers Mock */}
        <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="text-xl font-bold italic">VISA</div>
          <div className="text-xl font-bold">MasterCard</div>
          <div className="text-xl font-bold text-blue-400">PayPal</div>
          <div className="text-xl font-bold text-orange-400">Bitcoin</div>
        </div>

      </div>
    </div>
  );
}
