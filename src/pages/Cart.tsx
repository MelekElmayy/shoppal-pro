import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  // Placeholder cart data - will be managed with state/database
  const cartItems = [
    {
      id: 1,
      name: "Classic White Tee",
      price: 29.99,
      size: "M",
      quantity: 2,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10.0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-6">Your cart is empty</p>
              <Link to="/shop">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-24 h-32 bg-muted overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                            </div>
                            <p className="font-medium">${item.price}</p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-3">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <Button variant="ghost" size="icon" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-border pt-2 flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <Link to="/checkout" className="block">
                      <Button className="w-full" size="lg">
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Link to="/shop" className="block">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
