import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Placeholder products - will be replaced with database data
const products = [
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
  {
    id: 4,
    name: "Slim Fit Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
  },
  {
    id: 5,
    name: "Cotton Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
  },
  {
    id: 6,
    name: "Canvas Sneakers",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop",
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-center mb-4">All Products</h1>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of modern, minimalist clothing designed for everyday wear.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
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
                      <Button variant="outline" className="w-full mt-4">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
