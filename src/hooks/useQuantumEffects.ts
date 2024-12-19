import { useState, useCallback } from 'react';

type EffectType = 'crystallize' | 'dimensionShift' | 'timeWarp';

export function useQuantumEffects() {
  const [activeEffects, setActiveEffects] = useState<EffectType[]>([]);

  const initializeQuantumEffects = useCallback(() => {
    // Initialize quantum graphics system
    console.log('Quantum effects system initialized');
  }, []);

  const applyQuantumEffect = useCallback((effect: EffectType) => {
    setActiveEffects(prev => [...prev, effect]);
    console.log(`Applied quantum effect: ${effect}`);
  }, []);

  return {
    activeEffects,
    initializeQuantumEffects,
    applyQuantumEffect
  };
}