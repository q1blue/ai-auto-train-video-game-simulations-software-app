import { StatusCard } from './StatusCard';
import { RecentActivities } from './RecentActivities';
import { SystemHealth } from './SystemHealth';

export function Dashboard() {
  const environmentStatus = [
    { label: 'Quantum Realm', status: 'Active', color: 'green' },
    { label: 'AI Training', status: 'In Progress', color: 'yellow' }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Game Development Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatusCard 
          title="Environment Status" 
          items={environmentStatus} 
        />
        <RecentActivities />
        <SystemHealth />
      </div>
    </div>
  );
}