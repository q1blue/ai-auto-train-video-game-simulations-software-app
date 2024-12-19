import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">Crystal Alchemist</Link>
          <div className="flex space-x-4">
            <Link to="/environments" className="hover:text-blue-400 transition-colors">
              Environments
            </Link>
            <Link to="/ai-npcs" className="hover:text-blue-400 transition-colors">
              AI & NPCs
            </Link>
            <Link to="/assets" className="hover:text-blue-400 transition-colors">
              Assets
            </Link>
            <Link to="/docs" className="hover:text-blue-400 transition-colors">
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}