import { Link } from "react-router-dom";
import { ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            SHOPPAL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-medium hover:text-muted-foreground transition-smooth">
              SHOP
            </Link>
            <Link to="/collections" className="text-sm font-medium hover:text-muted-foreground transition-smooth">
              COLLECTIONS
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-muted-foreground transition-smooth">
              ABOUT
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link to="/shop" className="text-lg font-medium hover:text-muted-foreground transition-smooth">
                    SHOP
                  </Link>
                  <Link to="/collections" className="text-lg font-medium hover:text-muted-foreground transition-smooth">
                    COLLECTIONS
                  </Link>
                  <Link to="/about" className="text-lg font-medium hover:text-muted-foreground transition-smooth">
                    ABOUT
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
