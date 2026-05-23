import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopNav } from './TopNav';
import './Layout.css';

export const Layout: React.FC = () => {
  return (
    <div className="layout-container">
      <TopNav />
      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
