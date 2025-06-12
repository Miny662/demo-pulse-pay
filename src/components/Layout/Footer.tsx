
import React from 'react';
import { CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 glass">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold gradient-text">GlobalPulse</h2>
                <p className="text-xs text-muted-foreground">Pay</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The most reliable platform for international mobile top-ups and credit transfers. 
              Supporting 600+ operators across 140+ countries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Mobile Top-up</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Credit Transfer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bulk Top-ups</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Access</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 GlobalPulse Pay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
