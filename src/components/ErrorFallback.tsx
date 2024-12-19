import { FallbackProps } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-red-900/20 p-8 rounded-lg border border-red-500">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
        <pre className="text-sm text-red-300 mb-4">{error.message}</pre>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}