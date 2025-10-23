import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Award } from "lucide-react";
import personalTrainingImage from "@/assets/personal-training.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-center animate-fade-in">
            About <span className="text-primary">Iron Gym</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            More than just a gym - we're a community dedicated to transforming lives through fitness
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-black mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2010, Iron Gym started with a simple mission: create a fitness space 
                where everyone feels welcome and empowered to achieve their goals.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Over the years, we've grown from a small local gym to a premium fitness destination, 
                but our core values remain the same - dedication, community, and results.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to serve thousands of members who trust us to be their partner 
                in health and wellness.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src={personalTrainingImage} 
                alt="Personal training session" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from equipment maintenance to customer service.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-muted-foreground">
                Building a supportive community where members motivate and inspire each other.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Results</h3>
              <p className="text-muted-foreground">
                Delivering measurable results through proven training methods and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
