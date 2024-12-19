import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { ErrorFallback } from './components/ErrorFallback';
import { Environments } from './pages/Environments';
import { AiNpcs } from './pages/AiNpcs';
import { Assets } from './pages/Assets';
import { Documentation } from './pages/Documentation';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/environments" element={<Environments />} />
                <Route path="/ai-npcs" element={<AiNpcs />} />
                <Route path="/assets" element={<Assets />} />
                <Route path="/docs" element={<Documentation />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;