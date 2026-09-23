import React from 'react';
import { Link } from '../context/RouterContext';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-[#F7F5F0] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      
      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono">
          404 · Architectural Route Not Found
        </span>
        
        <h1 className="font-serif text-6xl sm:text-7xl font-light text-white">
          404
        </h1>
        
        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto" />
        
        <p className="text-sm text-neutral-400 leading-relaxed">
          The architectural plan or page you requested does not exist or has been relocated. Return to our main portfolio or consult our practice leads.
        </p>
        
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#C5A059] hover:bg-[#d8b368] text-black font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
