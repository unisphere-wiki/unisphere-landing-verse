import React from "react";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-unisphere-50/50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-xl font-bold text-gradient mb-4">UniSphere</div>
            <p className="text-foreground/70 text-sm mb-6">
              The center of the knowledge verse, empowering businesses with unparalleled business intelligence.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="w-5 h-5 text-foreground/60" />
              <a href="mailto:hello@unisphere.wiki" className="text-sm text-foreground/80 hover:text-primary transition-colors duration-200">
                hello@unisphere.wiki
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">BizQuery Platform</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Knowledge Analytics</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Industry Insights</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Certification Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">Press</a></li>
              <li>
                <a 
                  href="mailto:hello@unisphere.wiki" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {currentYear} UniSphere Inc. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
