import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-baseline gap-2 leading-none mb-4">
              <span className="font-display text-3xl tracking-wide">IRON</span>
              <span className="font-label text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Gym
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Raw iron, honest coaching, and a room full of people who show up.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="kicker mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/classes" className="text-muted-foreground hover:text-primary transition-colors">Classes</Link></li>
              <li><Link to="/memberships" className="text-muted-foreground hover:text-primary transition-colors">Memberships</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="kicker mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@irongym.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>123 Fitness Street<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="kicker mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Iron Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
