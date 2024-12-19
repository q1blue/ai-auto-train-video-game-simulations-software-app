import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function GitHubIntegration() {
  const [repoUrl, setRepoUrl] = useState('');

  return (
    <Card className="p-6 bg-gray-800/50 backdrop-blur">
      <h3 className="text-xl font-semibold mb-4">GitHub Integration</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm">Repository URL</label>
          <Input
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/username/repo"
          />
        </div>
        <div className="flex space-x-2">
          <Button>Connect Repository</Button>
          <Button variant="outline">View Changes</Button>
        </div>
      </div>
    </Card>
  );
}