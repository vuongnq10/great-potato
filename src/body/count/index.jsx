"use client"
import { useEffect } from 'react';
import { count } from 'api/count';

const Index = () => {
  useEffect(() => {
    const owner = localStorage?.getItem('owner') || null;
    if (!owner) {
      count();
    }
  }, []);
  return <></>
};

export default Index;
