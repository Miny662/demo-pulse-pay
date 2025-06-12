
import React from 'react';
import Header from '@/components/Layout/Header';
import Hero from '@/components/Landing/Hero';
import TopUpFlow from '@/components/TopUp/TopUpFlow';
import CreditTransfer from '@/components/Transfer/CreditTransfer';
import Footer from '@/components/Layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TopUpFlow />
      <CreditTransfer />
      <Footer />
    </div>
  );
};

export default Index;
