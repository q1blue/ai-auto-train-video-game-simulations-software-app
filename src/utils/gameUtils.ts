export function formatGameStatus(status: string): string {
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
}

export function calculateProgress(current: number, total: number): number {
  return Math.round((current / total) * 100);
}

export function generateGameId(): string {
  return Math.random().toString(36).substring(2, 15);
}