/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SolutionsPage } from './pages/Solutions';
import { BlockchainPage } from './pages/Blockchain';
import { EmissionsPage } from './pages/Emissions';
import { ResourcesPage } from './pages/Resources';
import { Partnerships } from './pages/Partnerships';
import { AIChatWidget } from './components/AIChatWidget';

export default function App() {
  const [activeTab, setActiveTab] = useState('solutions');

  const renderContent = () => {
    switch (activeTab) {
      case 'solutions':
        return <SolutionsPage />;
      case 'blockchain':
        return <BlockchainPage />;
      case 'emissions':
        return <EmissionsPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'partnerships':
        return <Partnerships />;
      default:
        return <SolutionsPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans text-on-surface antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 w-full pt-20 flex flex-col">
        {renderContent()}
      </main>

      <Footer />
      <AIChatWidget />
    </div>
  );
}
