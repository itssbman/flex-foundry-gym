import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Flame, Heart, Target, Zap } from "lucide-react";
import gymClassImage from "@/assets/gym-class.jpg";

const classes = [
  {
    name: "HIIT Training",
    icon: Flame,
    duration: "45 min",
    level: "All Levels",
    description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
  },
  {
    name: "Strength & Conditioning",
    icon: Target,
    duration: "60 min",
    level: "Intermediate",
    description: "Build muscle and improve overall strength with compound movements and progressive overload.",
  },
  {
    name: "Yoga & Flexibility",
    icon: Heart,
    duration: "60 min",
    level: "All Levels",
    description: "Improve flexibility, balance, and mental clarity through guided yoga practices.",
  },
  {
    name: "Cardio Blast",
    icon: Zap,
    duration: "30 min",
    level: "All Levels",
    description: "Fast-paced cardio workout to boost your metabolism and endurance.",
  },
  {
    name: "Boxing Fitness",
    icon: Flame,
    duration: "45 min",
    level: "Intermediate",
    description: "Learn boxing techniques while getting an incredible full-body workout.",
  },
  {
    name: "Core & Abs",
    icon: Target,
    duration: "30 min",
    level: "All Levels",
    description: "Targeted core strengthening for improved stability and definition.",
  },
];

const Classes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={gymClassImage}
            alt="Gym class in session"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-center animate-fade-in">
            Our <span className="text-primary">Classes</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Expert-led group fitness classes designed to challenge and inspire you
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classItem, index) => {
              const Icon = classItem.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] group animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{classItem.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{classItem.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{classItem.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{classItem.level}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for a free trial class and experience the Iron Gym difference
          </p>
          <button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all animate-pulse-glow">
            Book Your Free Class
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classes;
