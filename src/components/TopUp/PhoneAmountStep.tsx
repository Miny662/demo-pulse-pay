
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface PhoneAmountStepProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const PhoneAmountStep: React.FC<PhoneAmountStepProps> = ({ data, updateData, onNext, onPrev }) => {
  const amounts = [5, 10, 20, 25, 50, 100];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData({ phoneNumber: e.target.value });
  };

  const handleAmountSelect = (amount: number) => {
    updateData({ amount });
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData({ amount: parseFloat(e.target.value) || 0 });
  };

  const canProceed = data.phoneNumber && data.amount > 0;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Phone Number</label>
        <Input
          type="tel"
          placeholder="Enter phone number"
          value={data.phoneNumber}
          onChange={handlePhoneChange}
          className="glass-card border-white/20 bg-white/5"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Include country code (e.g., +1234567890)
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-4">Select Amount (USD)</label>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {amounts.map((amount) => (
            <Card
              key={amount}
              className={`p-4 cursor-pointer transition-all glass-card border-white/20 hover:bg-white/10 ${
                data.amount === amount ? 'bg-primary/20 border-primary/50' : ''
              }`}
              onClick={() => handleAmountSelect(amount)}
            >
              <div className="text-center">
                <div className="text-lg font-semibold">${amount}</div>
                <div className="text-xs text-muted-foreground">Quick select</div>
              </div>
            </Card>
          ))}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Custom Amount</label>
          <Input
            type="number"
            placeholder="Enter custom amount"
            min="1"
            max="500"
            value={data.amount && !amounts.includes(data.amount) ? data.amount : ''}
            onChange={handleCustomAmount}
            className="glass-card border-white/20 bg-white/5"
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onPrev} className="glass-card border-white/20">
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={!canProceed}
          className="bg-gradient-primary hover:opacity-90"
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
};

export default PhoneAmountStep;
