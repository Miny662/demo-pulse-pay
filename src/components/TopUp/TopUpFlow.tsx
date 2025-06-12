
import React, { useState } from 'react';
import { ArrowUp, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CountryOperatorStep from './CountryOperatorStep';
import PhoneAmountStep from './PhoneAmountStep';
import PaymentStep from './PaymentStep';

interface TopUpData {
  country: string;
  operator: string;
  phoneNumber: string;
  amount: number;
  paymentMethod: string;
}

const TopUpFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [topUpData, setTopUpData] = useState<TopUpData>({
    country: '',
    operator: '',
    phoneNumber: '',
    amount: 0,
    paymentMethod: ''
  });

  const steps = [
    { number: 1, title: 'Country & Operator', description: 'Select destination' },
    { number: 2, title: 'Phone & Amount', description: 'Enter details' },
    { number: 3, title: 'Payment', description: 'Complete transaction' }
  ];

  const updateTopUpData = (data: Partial<TopUpData>) => {
    setTopUpData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-4">
            <ArrowUp className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Quick Top-up</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Send Mobile Credit in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fast, secure, and reliable mobile top-ups to over 600 operators worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex-1 flex items-center">
                <div className="flex items-center w-full">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number 
                      ? 'bg-primary border-primary text-white' 
                      : 'border-muted-foreground text-muted-foreground'
                  }`}>
                    {step.number}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {step.description}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {steps[currentStep - 1].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentStep === 1 && (
                <CountryOperatorStep 
                  data={topUpData} 
                  updateData={updateTopUpData}
                  onNext={nextStep}
                />
              )}
              {currentStep === 2 && (
                <PhoneAmountStep 
                  data={topUpData} 
                  updateData={updateTopUpData}
                  onNext={nextStep}
                  onPrev={prevStep}
                />
              )}
              {currentStep === 3 && (
                <PaymentStep 
                  data={topUpData} 
                  updateData={updateTopUpData}
                  onPrev={prevStep}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TopUpFlow;
