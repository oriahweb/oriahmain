import React from 'react';
import { Metadata } from 'next';
import HomeTwoMain from '@/pages/homes/home-2';

export const metadata: Metadata = {
  title: "Oria Consulting - Home",
};

const HomePageTwo = () => {
  return (
    <HomeTwoMain/>
  );
};

export default HomePageTwo;