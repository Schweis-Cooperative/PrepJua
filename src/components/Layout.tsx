import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import OnboardingModal from './OnboardingModal';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <OnboardingModal />
      <Sidebar />
      <div className="lg:ml-64 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <footer className="border-t border-zinc-800/50 py-4 px-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Schweis Projects. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
