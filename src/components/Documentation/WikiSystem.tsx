import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function WikiSystem() {
  return (
    <Card className="p-6 bg-gray-800/50 backdrop-blur">
      <h3 className="text-xl font-semibold mb-4">Documentation & Wiki System</h3>
      <Tabs defaultValue="edit">
        <TabsList>
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="space-y-4">
          <Input placeholder="Page Title" />
          <textarea 
            className="w-full h-32 bg-gray-700 rounded-md p-2"
            placeholder="Page Content (Markdown supported)"
          />
          <Button>Save Page</Button>
        </TabsContent>
        <TabsContent value="preview">
          <div className="prose prose-invert">
            {/* Preview content goes here */}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}