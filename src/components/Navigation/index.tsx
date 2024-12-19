import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">Crystal Alchemist</Link>
          <div className="flex space-x-4">
            <NavLink to="/environments">Environments</NavLink>
            <NavLink to="/ai-npcs">AI & NPCs</NavLink>
            <NavLink to="/assets">Assets</NavLink>
            <NavLink to="/docs">Documentation</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  );
}