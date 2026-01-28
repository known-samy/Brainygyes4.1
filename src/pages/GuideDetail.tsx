
import React from 'react';
import Navbar from '@/components/Navbar';
import ThreeDBackground from '@/components/ThreeDBackground';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useParams } from 'react-router-dom';
import GuideDetailComponent from '@/components/GuideDetail';

const GuideDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <ThreeDBackground />
      <div className="pt-24">
        <GuideDetailComponent id={id} />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default GuideDetail;
