
import React from 'react';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="relative z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">GlobalPulse</h1>
              <p className="text-xs text-muted-foreground">Pay</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/demo" 
              className={`text-sm transition-colors ${
                location.pathname === '/demo' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Quick Top-up
            </Link>
            <Link 
              to="/admin" 
              className={`text-sm transition-colors ${
                location.pathname === '/admin' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Dashboard
            </Link>
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
