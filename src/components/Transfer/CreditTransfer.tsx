
import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CreditTransfer = () => {
  const [transferData, setTransferData] = useState({
    recipientEmail: '',
    amount: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setTransferData(prev => ({ ...prev, [field]: value }));
  };

  const handleTransfer = () => {
    console.log('Transfer data:', transferData);
    alert('Transfer simulation - In production, this would process the transfer');
  };

  const canTransfer = transferData.recipientEmail && transferData.amount;

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-4">
            <ArrowUp className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Credit Transfer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Send Credits to <span className="gradient-text">Another User</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transfer your account credits to friends and family instantly
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Transfer Credits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="recipient">Recipient Email</Label>
                <Input
                  id="recipient"
                  type="email"
                  placeholder="Enter recipient's email"
                  value={transferData.recipientEmail}
                  onChange={(e) => handleInputChange('recipientEmail', e.target.value)}
                  className="glass-card border-white/20 bg-white/5 mt-2"
                />
              </div>

              <div>
                <Label htmlFor="amount">Amount (USD)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount to transfer"
                  min="1"
                  max="1000"
                  value={transferData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  className="glass-card border-white/20 bg-white/5 mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Input
                  id="message"
                  placeholder="Add a personal message"
                  value={transferData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="glass-card border-white/20 bg-white/5 mt-2"
                />
              </div>

              <div className="glass-card border-white/10 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Transfer Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span>${transferData.amount || '0'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transfer Fee:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="border-t border-white/10 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span className="gradient-text">${transferData.amount || '0'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleTransfer}
                disabled={!canTransfer}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                Send Transfer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreditTransfer;
