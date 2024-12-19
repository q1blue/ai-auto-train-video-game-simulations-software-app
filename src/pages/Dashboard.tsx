export function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Game Development Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Environment Status</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Quantum Realm</span>
              <span className="text-green-400">Active</span>
            </div>
            <div className="flex justify-between">
              <span>AI Training</span>
              <span className="text-yellow-400">In Progress</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-2">
            <li>Created new environment: Mystic Forest</li>
            <li>Updated NPC behavior patterns</li>
            <li>Generated new asset pack</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">System Health</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>API Status</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex justify-between">
              <span>Database</span>
              <span className="text-green-400">Connected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}