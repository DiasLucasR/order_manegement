import Dashboard from '@/app/components/Dashboard';
import HeaderSection from '@/app/components/HeaderSection';
import React from 'react';

const DashboardPage = () => {
  return (
    <div>
     <HeaderSection title="Dashboard" />

     <Dashboard />
    </div>
  );
};

export default DashboardPage;
