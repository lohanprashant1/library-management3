import {
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
  Shield,
} from "lucide-react";
import type { PageKey } from "@/lib/types";

interface FooterProps {
  onNavigate: (page: PageKey) => void;
  onOpenAdmin?: () => void;
}

export default function Footer({ onNavigate, onOpenAdmin }: FooterProps) {
  const quickLinks = [
    { label: "Catalog Search", page: "catalog" as PageKey },
    { label: "Digital Resources", page: "digital" as PageKey },
    { label: "Services", page: "services" as PageKey },
    { label: "Events & Programs", page: "events" as PageKey },
    { label: "Research & Learning", page: "research" as PageKey },
    { label: "Rooms & Spaces", page: "rooms" as PageKey },
  ];

  const infoLinks = [
    { label: "About Us", page: "about" as PageKey },
    { label: "Membership", page: "membership" as PageKey },
    { label: "FAQ / Help", page: "faq" as PageKey },
    { label: "Contact & Hours", page: "contact" as PageKey },
    { label: "News & Blog", page: "news" as PageKey },
    { label: "Kids & Teens", page: "kids" as PageKey },
  ];

  return (
    <footer className="bg-[#292B33] text-[#CCCCCC]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://www.osgu.ac.in/wp-content/uploads/2020/11/OSGU_LOGO-2.png"
                alt="OSGU"
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <div className="text-white font-bold">Central Library</div>
                <div className="text-xs text-[#CCCCCC]">OSGU</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              The OSGU Central Library is the heart of academic excellence, providing access to a vast collection of books, journals, digital resources, and research databases for the entire university community.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-[#222222] flex items-center justify-center hover:bg-[#C63134] transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm hover:text-[#C63134] transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3 opacity-50" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Information
            </h3>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm hover:text-[#C63134] transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3 opacity-50" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-[#C63134] flex-shrink-0 mt-0.5" />
                <span>OSGU Campus, NH-52, Village Brahmanwas, Distt. Hisar, Haryana - 125001</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="w-4 h-4 text-[#C63134] flex-shrink-0" />
                <span>+91-12345-67890</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail className="w-4 h-4 text-[#C63134] flex-shrink-0" />
                <span>library@osgu.ac.in</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Clock className="w-4 h-4 text-[#C63134] flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon-Fri: 8:00 AM - 9:00 PM</div>
                  <div>Sat: 9:00 AM - 6:00 PM</div>
                  <div>Sun: 10:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#999999]">
          <p>&copy; 2025 OSGU Central Library, Om Sterling Global University. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1 hover:text-[#C63134] transition-colors"
                title="Admin Panel"
              >
                <Shield className="w-3 h-3" />
                Admin
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
