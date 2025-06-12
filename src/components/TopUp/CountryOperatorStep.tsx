
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CountryOperatorStepProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
}

const CountryOperatorStep: React.FC<CountryOperatorStepProps> = ({ data, updateData, onNext }) => {
  const countries = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
    { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
    { code: 'GH', name: 'Ghana', flag: '🇬🇭' }
  ];

  const operators = {
    US: ['Verizon', 'AT&T', 'T-Mobile'],
    GB: ['EE', 'O2', 'Vodafone', 'Three'],
    NG: ['MTN', 'Airtel', 'Glo', '9mobile'],
    KE: ['Safaricom', 'Airtel Kenya'],
    IN: ['Airtel', 'Jio', 'Vi'],
    PH: ['Smart', 'Globe', 'Sun'],
    BD: ['Grameenphone', 'Robi', 'Banglalink'],
    GH: ['MTN Ghana', 'Vodafone Ghana', 'AirtelTigo']
  };

  const handleCountryChange = (country: string) => {
    updateData({ country, operator: '' });
  };

  const handleOperatorChange = (operator: string) => {
    updateData({ operator });
  };

  const canProceed = data.country && data.operator;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Select Country</label>
        <Select value={data.country} onValueChange={handleCountryChange}>
          <SelectTrigger className="glass-card border-white/20">
            <SelectValue placeholder="Choose destination country" />
          </SelectTrigger>
          <SelectContent className="glass border-white/20 bg-background/95 backdrop-blur-md">
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className="flex items-center space-x-2">
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {data.country && (
        <div className="animate-fade-in">
          <label className="block text-sm font-medium mb-2">Select Operator</label>
          <Select value={data.operator} onValueChange={handleOperatorChange}>
            <SelectTrigger className="glass-card border-white/20">
              <SelectValue placeholder="Choose mobile operator" />
            </SelectTrigger>
            <SelectContent className="glass border-white/20 bg-background/95 backdrop-blur-md">
              {operators[data.country as keyof typeof operators]?.map((operator) => (
                <SelectItem key={operator} value={operator}>
                  {operator}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="flex justify-end pt-4">
        <Button 
          onClick={onNext} 
          disabled={!canProceed}
          className="bg-gradient-primary hover:opacity-90"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CountryOperatorStep;
