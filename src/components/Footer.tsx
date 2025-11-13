import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-tighter mb-4">SHOPPAL</h3>
            <p className="text-sm text-muted-foreground">
              Modern clothing for the contemporary lifestyle.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ShopPal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
