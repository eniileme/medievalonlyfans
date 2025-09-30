import Link from 'next/link';
import { MedievalButton } from './MedievalButton';

export function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-medieval-dark to-medieval-stone border-b-4 border-medieval-gold shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-medieval-gold rounded-full flex items-center justify-center medieval-border medieval-glow">
              <span className="text-medieval-dark font-cinzel font-bold text-xl">⚔️</span>
            </div>
            <div className="text-medieval-gold font-cinzel font-bold text-2xl medieval-text-shadow">
              Medieval Realm
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-medieval-gold hover:text-yellow-300 font-cinzel font-medium transition-colors duration-300 medieval-text-shadow"
            >
              Home
            </Link>
            <Link 
              href="/mof" 
              className="text-medieval-gold hover:text-yellow-300 font-cinzel font-medium transition-colors duration-300 medieval-text-shadow"
            >
              MOF Sandbox
            </Link>
            <Link 
              href="/about" 
              className="text-medieval-gold hover:text-yellow-300 font-cinzel font-medium transition-colors duration-300 medieval-text-shadow"
            >
              About
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <MedievalButton variant="silver" size="sm">
              Sign In
            </MedievalButton>
            <MedievalButton variant="gold" size="sm">
              Join Quest
            </MedievalButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MedievalButton variant="gold" size="sm">
              ☰
            </MedievalButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
