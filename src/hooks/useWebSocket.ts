import { useState, useEffect, useCallback } from 'react';

interface WebSocketOptions {
  url: string;
  onMessage?: (data: any) => void;
  onError?: (error: Event) => void;
}

export function useWebSocket({ url, onMessage, onError }: WebSocketOptions) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<Event | null>(null);

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(url);
      setSocket(ws);
    } catch (err) {
      setError(err as Event);
      onError?.(err as Event);
    }
  }, [url, onError]);

  useEffect(() => {
    if (!socket) return;

    socket.onopen = () => setIsConnected(true);
    socket.onclose = () => setIsConnected(false);
    socket.onerror = (err) => {
      setError(err);
      onError?.(err);
    };
    socket.onmessage = (event) => {
      onMessage?.(JSON.parse(event.data));
    };

    return () => {
      socket.close();
    };
  }, [socket, onMessage, onError]);

  return { isConnected, error, connect };
}