import {
  ShoppingBag,
  Heart,
  User,
  Search,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream">
      {/* Header */}
      <header className="relative z-50 px-4 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-wider text-luxury-gold">
            Aurum Scents
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#shop"
              className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300"
            >
              Shop
            </a>
            <a
              href="#discovery"
              className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300"
            >
              Discovery
            </a>
            <a
              href="#gifting"
              className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300"
            >
              Gifting
            </a>
            <a
              href="#stores"
              className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300"
            >
              Stores
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-luxury-black-light rounded-full transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-luxury-black-light rounded-full transition-colors duration-300">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-luxury-black-light rounded-full transition-colors duration-300">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/assets/df23e0d050294527b834cc7f38b8badc/untitled-616c65?format=webp&width=800')`,
          }}
        ></div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-luxury-cream leading-tight">
            The Essence of Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-luxury-cream/90 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of exquisite fragrances, crafted
            with the finest ingredients to embody beauty and sophistication.
          </p>
          <Button
            size="lg"
            className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-luxury-gold rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 lg:px-8 bg-luxury-black-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-luxury-cream">
            Featured Perfumes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group relative bg-gradient-to-br from-emerald-900/20 to-emerald-700/20 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-emerald-200 to-emerald-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-48 bg-gradient-to-b from-amber-600 to-amber-800 rounded-lg transform rotate-12 shadow-2xl"></div>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2 text-luxury-cream">
                  Midnight Bloom
                </h3>
                <p className="text-luxury-cream/80 mb-4">
                  A captivating blend of jasmine and sandalwood
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-luxury-gold font-semibold text-xl">
                    $145
                  </span>
                  <Button
                    variant="outline"
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black rounded-full px-6"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative bg-gradient-to-br from-orange-900/20 to-orange-700/20 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-48 bg-gradient-to-b from-amber-700 to-amber-900 rounded-lg shadow-2xl"></div>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2 text-luxury-cream">
                  Citrus Serenade
                </h3>
                <p className="text-luxury-cream/80 mb-4">
                  A refreshing burst of lemon and bergamot
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-luxury-gold font-semibold text-xl">
                    $125
                  </span>
                  <Button
                    variant="outline"
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black rounded-full px-6"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group relative bg-gradient-to-br from-teal-900/20 to-teal-700/20 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-teal-200 to-teal-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-48 bg-gradient-to-b from-slate-600 to-slate-800 rounded-lg shadow-2xl"></div>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2 text-luxury-cream">
                  Velvet Embrace
                </h3>
                <p className="text-luxury-cream/80 mb-4">
                  A warm and sensual mix of amber and musk
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-luxury-gold font-semibold text-xl">
                    $165
                  </span>
                  <Button
                    variant="outline"
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black rounded-full px-6"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Brand Section */}
      <section className="py-20 px-4 lg:px-8 bg-luxury-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-luxury-cream">
            About Aurum Scents
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-luxury-cream/90 mb-8">
            Founded on the principle that fragrance is the invisible accessory
            that completes your presence, Aurum Scents crafts each perfume with
            meticulous attention to detail and an unwavering commitment to
            excellence.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-luxury-gold border-l-4 border-luxury-gold pl-6 max-w-2xl mx-auto">
            "Scent is the most powerful trigger to the memory there is. A
            certain perfume can make me feel like I'm a teenager again."
          </blockquote>
        </div>
      </section>

      {/* Fragrance Notes Section */}
      <section className="py-20 px-4 lg:px-8 bg-luxury-black-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-luxury-cream">
            Signature Notes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌹</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-luxury-cream">
                Rose
              </h3>
              <p className="text-luxury-cream/80">
                The queen of flowers, bringing romance and elegance
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🪵</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-luxury-cream">
                Oud
              </h3>
              <p className="text-luxury-cream/80">
                Precious wood essence for depth and sophistication
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌼</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-luxury-cream">
                Vanilla
              </h3>
              <p className="text-luxury-cream/80">
                Warm and comforting sweetness with lasting appeal
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🍊</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-luxury-cream">
                Bergamot
              </h3>
              <p className="text-luxury-cream/80">
                Fresh citrus notes that invigorate and energize
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 lg:px-8 bg-luxury-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-luxury-cream">
            Stay in the Scent
          </h2>
          <p className="text-lg text-luxury-cream/90 mb-8">
            Be the first to discover our new fragrances and exclusive
            collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-luxury-black border-luxury-gold text-luxury-cream placeholder:text-luxury-cream/60 rounded-full px-6"
            />
            <Button className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black font-semibold rounded-full px-8 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 lg:px-8 bg-luxury-black border-t border-luxury-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="font-serif text-2xl font-bold mb-4 text-luxury-gold">
                Aurum Scents
              </div>
              <p className="text-luxury-cream/80 mb-4">
                Crafting extraordinary fragrances that tell your unique story.
              </p>
              <div className="flex space-x-4">
                <button className="p-2 hover:bg-luxury-black-light rounded-full transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-luxury-cream hover:text-luxury-gold" />
                </button>
                <button className="p-2 hover:bg-luxury-black-light rounded-full transition-colors duration-300">
                  <Facebook className="w-5 h-5 text-luxury-cream hover:text-luxury-gold" />
                </button>
                <button className="p-2 hover:bg-luxury-black-light rounded-full transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-luxury-cream hover:text-luxury-gold" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-luxury-cream mb-4">Shop</h3>
              <ul className="space-y-2 text-luxury-cream/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    Limited Editions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    Gift Sets
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-luxury-cream mb-4">Support</h3>
              <ul className="space-y-2 text-luxury-cream/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    Fragrance Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    Size Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-luxury-cream mb-4">Contact</h3>
              <div className="space-y-3 text-luxury-cream/80">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@aurumscents.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">New York, NY</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-luxury-charcoal pt-8 text-center text-luxury-cream/60">
            <p>
              &copy; 2024 Aurum Scents. All rights reserved. Crafted with
              passion for fragrance lovers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
