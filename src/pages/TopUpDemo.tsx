
import React, { useState } from 'react';
import { Phone, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Header from '@/components/Layout/Header';

const TopUpDemo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTopUp = async () => {
    if (!phoneNumber || !amount) return;
    
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setPhoneNumber('');
        setAmount('');
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card className="glass-card border-green-500/20 text-center">
              <CardContent className="pt-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-scale-in" />
                <h2 className="text-2xl font-bold mb-2">Top-up Successful!</h2>
                <p className="text-muted-foreground mb-2">
                  ${amount} has been sent to
                </p>
                <p className="font-semibold">{phoneNumber}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Redirecting in a moment...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-4">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium">Quick Top-up Demo</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">
              Mobile <span className="gradient-text">Top-up</span>
            </h1>
            <p className="text-muted-foreground">
              Send mobile credit instantly
            </p>
          </div>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Top-up Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1234567890"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="glass-card border-white/20 bg-white/5 mt-2"
                />
              </div>

              <div>
                <Label htmlFor="amount">Amount (USD)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="10.00"
                  min="1"
                  max="100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="glass-card border-white/20 bg-white/5 mt-2"
                />
              </div>

              <Button
                onClick={handleTopUp}
                disabled={!phoneNumber || !amount || isProcessing}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Send Top-up
                  </>
                )}
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  This is a demo simulation. No real money will be charged.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TopUpDemo;
