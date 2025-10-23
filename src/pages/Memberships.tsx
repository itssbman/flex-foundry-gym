import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "Access to gym facilities",
      "Standard equipment",
      "Locker room access",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$59",
    period: "/month",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation",
      "Sauna & steam room access",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Pro",
      "4 personal training sessions/month",
      "Custom meal planning",
      "Priority class booking",
      "Guest passes (2/month)",
      "Premium locker",
    ],
    popular: false,
  },
];

const Memberships = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-center animate-fade-in">
            Membership <span className="text-primary">Plans</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Choose the plan that fits your fitness goals and lifestyle
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-card border-2 transition-all duration-300 animate-scale-in ${
                  plan.popular 
                    ? "border-primary shadow-[0_0_40px_rgba(239,68,68,0.3)] scale-105" 
                    : "border-border hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full font-bold ${
                      plan.popular 
                        ? "bg-gradient-to-r from-primary to-accent hover:opacity-90" 
                        : "bg-secondary hover:bg-primary hover:text-primary-foreground"
                    }`}
                    size="lg"
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-black mb-6">All Plans Include</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">No long-term contracts</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Cancel anytime</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Free trial available</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Memberships;
