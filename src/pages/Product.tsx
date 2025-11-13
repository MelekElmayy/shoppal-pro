import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Placeholder product data - will be fetched from database
  const product = {
    id,
    name: "Classic White Tee",
    price: 29.99,
    description:
      "A timeless essential for your wardrobe. Made from premium cotton for ultimate comfort and durability. Perfect for layering or wearing on its own.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-[3/4] bg-muted overflow-hidden">
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="mb-4">{product.name}</h1>
                <p className="text-2xl font-bold">${product.price}</p>
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button className="w-full" size="lg">
                Add to Cart
              </Button>

              {/* Product Details */}
              <div className="border-t border-border pt-6 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Materials</h3>
                  <p className="text-sm text-muted-foreground">100% Premium Cotton</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Care Instructions</h3>
                  <p className="text-sm text-muted-foreground">Machine wash cold. Tumble dry low.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
