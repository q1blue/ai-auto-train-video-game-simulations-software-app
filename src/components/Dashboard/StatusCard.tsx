interface StatusCardProps {
  title: string;
  items: Array<{ label: string; status: string; color: string }>;
}

export function StatusCard({ title, items }: StatusCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-2">
        {items.map(({ label, status, color }) => (
          <div key={label} className="flex justify-between">
            <span>{label}</span>
            <span className={`text-${color}-400`}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}