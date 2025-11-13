import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Classic White Tee",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    },
    {
      id: 2,
      name: "Black Denim Jacket",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
    },
    {
      id: 3,
      name: "Minimalist Hoodie",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center bg-muted">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-white mb-6">Modern Essentials</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Discover timeless pieces crafted for the contemporary lifestyle
            </p>
            <Link to="/shop">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Shop Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Featured Collection</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Carefully selected pieces that define modern elegance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="group">
                  <Card className="overflow-hidden border-0 shadow-none">
                    <div className="aspect-[3/4] overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">{product.name}</h3>
                      <p className="text-muted-foreground">${product.price}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/shop">
                <Button size="lg">View All Products</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white mb-4">Join Our Community</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Be the first to know about new arrivals and exclusive offers
            </p>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Create Account
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
