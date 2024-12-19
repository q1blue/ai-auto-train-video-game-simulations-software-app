import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function MonitoringSystem() {
  return (
    <Card className="p-6 bg-gray-800/50 backdrop-blur">
      <h3 className="text-xl font-semibold mb-4">Performance Monitoring</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span>CPU Usage</span>
            <span>75%</span>
          </div>
          <Progress value={75} />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span>GPU Usage</span>
            <span>60%</span>
          </div>
          <Progress value={60} />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span>Memory Usage</span>
            <span>45%</span>
          </div>
          <Progress value={45} />
        </div>
      </div>
    </Card>
  );
}