import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export function MetaHumans() {
  const [quality, setQuality] = useState(75);

  return (
    <Card className="p-6 bg-gray-800/50 backdrop-blur">
      <h3 className="text-xl font-semibold mb-4">MetaHumans Integration</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm">Character Quality</label>
          <Slider
            value={[quality]}
            onValueChange={(value) => setQuality(value[0])}
            max={100}
            step={1}
          />
          <span className="text-sm text-gray-400">{quality}% Quality</span>
        </div>
        <Button className="w-full">Open MetaHuman Creator</Button>
      </div>
    </Card>
  );
}