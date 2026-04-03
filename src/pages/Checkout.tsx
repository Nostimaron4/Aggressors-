import { ShieldCheck, CreditCard, Lock } from "lucide-react";

export function Checkout() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Secure Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="flex-1 space-y-8">
          
          {/* Contact Info */}
          <section className="bg-navy p-6 md:p-8 rounded-2xl border border-navy-light">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm">1</span>
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                <input type="email" className="w-full bg-navy-dark border border-navy-light rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="you@example.com" />
              </div>
              <p className="text-sm text-text-muted">You can checkout as a guest. We'll send your order details here.</p>
            </div>
          </section>

          {/* Game Details */}
          <section className="bg-navy p-6 md:p-8 rounded-2xl border border-navy-light">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm">2</span>
              Game Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Game Region</label>
                <select className="w-full bg-navy-dark border border-navy-light rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                  <option>North America (NA)</option>
                  <option>Europe West (EUW)</option>
                  <option>Europe Nordic & East (EUNE)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">In-Game Name (Optional)</label>
                <input type="text" className="w-full bg-navy-dark border border-navy-light rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Summoner Name" />
              </div>
            </div>
          </section>

          {/* Payment */}
          <section className="bg-navy p-6 md:p-8 rounded-2xl border border-navy-light">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm">3</span>
              Payment Method
            </h2>
            
            <div className="space-y-4">
              <label className="flex items-center p-4 rounded-xl border border-primary bg-primary/10 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4 text-primary bg-navy-dark border-gray-600 focus:ring-primary" defaultChecked />
                <div className="ml-3 flex-1 flex items-center justify-between">
                  <span className="font-medium">Credit / Debit Card</span>
                  <div className="flex gap-2">
                    <CreditCard className="w-6 h-6 text-text-muted" />
                  </div>
                </div>
              </label>
              
              <label className="flex items-center p-4 rounded-xl border border-navy-light bg-navy-dark hover:border-gray-600 cursor-pointer transition-colors">
                <input type="radio" name="payment" className="w-4 h-4 text-primary bg-navy-dark border-gray-600 focus:ring-primary" />
                <div className="ml-3 flex-1 flex items-center justify-between">
                  <span className="font-medium">PayPal</span>
                  <span className="text-blue-400 font-bold italic">PayPal</span>
                </div>
              </label>
            </div>

            {/* Mock Card Input */}
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Card Number</label>
                <div className="relative">
                  <input type="text" className="w-full bg-navy-dark border border-navy-light rounded-xl pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="0000 0000 0000 0000" />
                  <CreditCard className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Expiry Date</label>
                  <input type="text" className="w-full bg-navy-dark border border-navy-light rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">CVC</label>
                  <input type="text" className="w-full bg-navy-dark border border-navy-light rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="123" />
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Order Summary */}
        <aside className="w-full lg:w-[380px] shrink-0">
          <div className="bg-navy rounded-2xl border border-navy-light p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-navy-light">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Rank Boost</p>
                  <p className="text-sm text-text-muted">Silver to Diamond</p>
                </div>
                <p className="font-medium">$149.99</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Express Delivery</p>
                  <p className="text-sm text-text-muted">+30% Speed</p>
                </div>
                <p className="font-medium">$45.00</p>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <p className="text-text-muted">Total</p>
              <p className="text-3xl font-extrabold text-white">$194.99</p>
            </div>

            <button className="w-full py-4 bg-primary-hover hover:bg-primary text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mb-4">
              <Lock className="w-5 h-5" /> Pay $194.99
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-text-muted text-center">
              <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
              <span>Payments are secure and encrypted. 100% Money-Back Guarantee.</span>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
