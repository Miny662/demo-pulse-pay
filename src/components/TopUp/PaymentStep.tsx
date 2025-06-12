
import React from 'react';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface PaymentStepProps {
  data: any;
  updateData: (data: any) => void;
  onPrev: () => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ data, updateData, onPrev }) => {
  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳', description: 'Visa, MasterCard, American Express' },
    { id: 'crypto', name: 'Cryptocurrency', icon: '₿', description: 'Bitcoin, Ethereum, USDT' },
    { id: 'paypal', name: 'PayPal', icon: '🏦', description: 'Secure PayPal payment' }
  ];

  const handlePaymentMethodChange = (method: string) => {
    updateData({ paymentMethod: method });
  };

  const handlePayment = () => {
    // Here you would integrate with payment providers
    console.log('Processing payment:', data);
    alert('Payment simulation - In production, this would process the payment');
  };

  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-lg">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span>Country:</span>
            <span className="font-medium">{data.country}</span>
          </div>
          <div className="flex justify-between">
            <span>Operator:</span>
            <span className="font-medium">{data.operator}</span>
          </div>
          <div className="flex justify-between">
            <span>Phone Number:</span>
            <span className="font-medium">{data.phoneNumber}</span>
          </div>
          <div className="border-t border-white/10 pt-3">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Amount:</span>
              <span className="gradient-text">${data.amount}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <div>
        <label className="block text-sm font-medium mb-4">Select Payment Method</label>
        <RadioGroup 
          value={data.paymentMethod} 
          onValueChange={handlePaymentMethodChange}
          className="space-y-3"
        >
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center space-x-3">
              <RadioGroupItem value={method.id} id={method.id} />
              <Label 
                htmlFor={method.id} 
                className="flex-1 cursor-pointer"
              >
                <Card className="glass-card border-white/20 hover:bg-white/10 transition-all p-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <div className="font-medium">{method.name}</div>
                      <div className="text-sm text-muted-foreground">{method.description}</div>
                    </div>
                  </div>
                </Card>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onPrev} className="glass-card border-white/20">
          Back
        </Button>
        <Button 
          onClick={handlePayment} 
          disabled={!data.paymentMethod}
          className="bg-gradient-primary hover:opacity-90 px-8"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Pay ${data.amount}
        </Button>
      </div>
    </div>
  );
};

export default PaymentStep;
