import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function DLSSConfig() {
  const [dlssMode, setDlssMode] = useState('quality');
  
  const modes = [
    { value: 'quality', label: 'Quality' },
    { value: 'balanced', label: 'Balanced' },
    { value: 'performance', label: 'Performance' },
    { value: 'ultra-performance', label: 'Ultra Performance' }
  ];

  return (
    <Card className="p-6 bg-gray-800/50 backdrop-blur">
      <h3 className="text-xl font-semibold mb-4">NVIDIA DLSS Configuration</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm">DLSS Mode</label>
          <Select value={dlssMode} onValueChange={setDlssMode}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {modes.map(mode => (
                <SelectItem key={mode.value} value={mode.value}>
                  {mode.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}