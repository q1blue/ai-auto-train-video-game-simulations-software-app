import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useQuantumEffects } from '@/hooks/useQuantumEffects';

export function QuantumSimulator() {
  const [isSimulating, setIsSimulating] = useState(false);
  const { initializeQuantumEffects, applyQuantumEffect } = useQuantumEffects();

  return (
    <Card className="p-6 bg-gray-800/50 backdrop-blur">
      <h3 className="text-xl font-semibold mb-4">Quantum Graphics Simulator</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={() => setIsSimulating(!isSimulating)}
            variant={isSimulating ? "destructive" : "default"}
          >
            {isSimulating ? "Stop Simulation" : "Launch Simulator"}
          </Button>
          <Button 
            onClick={() => applyQuantumEffect('crystallize')}
            disabled={!isSimulating}
          >
            Apply Crystalline Effect
          </Button>
        </div>
        {isSimulating && (
          <div className="h-64 rounded-lg bg-purple-900/20 animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-purple-300">Quantum Simulation Active</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}