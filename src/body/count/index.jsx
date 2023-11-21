"use client"
import { useEffect } from 'react';
import { count } from 'api/count';

const Index = () => {
  useEffect(() => {
    count();
  }, []);
  return <></>
};

export default Index;
