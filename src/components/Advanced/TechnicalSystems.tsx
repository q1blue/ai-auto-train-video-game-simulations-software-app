import { QuantumSimulator } from '../Graphics/QuantumSimulator';
import { MetaHumans } from '../Integration/MetaHumans';
import { DLSSConfig } from '../Graphics/DLSSConfig';
import { GitHubIntegration } from '../Integration/GitHubIntegration';
import { ElementalSystem } from '../Elements/ElementalSystem';
import { WikiSystem } from '../Documentation/WikiSystem';
import { MonitoringSystem } from '../Performance/MonitoringSystem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TechnicalSystems() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Technical Systems</h2>
      <Tabs defaultValue="graphics">
        <TabsList>
          <TabsTrigger value="graphics">Graphics & Simulation</TabsTrigger>
          <TabsTrigger value="integration">Integration</TabsTrigger>
          <TabsTrigger value="elements">Elements</TabsTrigger>
          <TabsTrigger value="docs">Documentation</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="graphics" className="space-y-4">
          <QuantumSimulator />
          <DLSSConfig />
        </TabsContent>
        
        <TabsContent value="integration" className="space-y-4">
          <MetaHumans />
          <GitHubIntegration />
        </TabsContent>

        <TabsContent value="elements">
          <ElementalSystem />
        </TabsContent>

        <TabsContent value="docs">
          <WikiSystem />
        </TabsContent>

        <TabsContent value="performance">
          <MonitoringSystem />
        </TabsContent>
      </Tabs>
    </div>
  );
}