
import React from 'react';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="relative z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">GlobalPulse</h1>
              <p className="text-xs text-muted-foreground">Pay</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm hover:text-primary transition-colors">Top-up</a>
            <a href="#" className="text-sm hover:text-primary transition-colors">Transfer</a>
            <a href="#" className="text-sm hover:text-primary transition-colors">Dashboard</a>
            <a href="#" className="text-sm hover:text-primary transition-colors">Support</a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
