import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const elements = [
  { name: 'Earth', color: 'emerald' },
  { name: 'Air', color: 'sky' },
  { name: 'Fire', color: 'red' },
  { name: 'Water', color: 'blue' },
  { name: 'Ether', color: 'purple' }
];

export function ElementalSystem() {
  const [elementLevels, setElementLevels] = useState<Record<string, number>>(
    Object.fromEntries(elements.map(e => [e.name, 50]))
  );

  return (
    <Card className="p-6 bg-gray-800/50 backdrop-blur">
      <h3 className="text-xl font-semibold mb-4">Elemental Energy System</h3>
      <div className="space-y-4">
        {elements.map(({ name, color }) => (
          <div key={name} className="space-y-2">
            <label className="text-sm">{name} Energy</label>
            <Slider
              value={[elementLevels[name]]}
              onValueChange={(value) => setElementLevels(prev => ({
                ...prev,
                [name]: value[0]
              }))}
              max={100}
              step={1}
              className={`bg-${color}-900/20`}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}