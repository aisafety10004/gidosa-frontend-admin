import { useEffect, useState } from 'react';

interface Toast {
  id: string;
  message: string;
  show: boolean;
  type: 'success' | 'error' | 'info';
}

export const TOAST_DURATION = 2000;
const ANIMATION_DURATION = 300; // 애니메이션 시간 (0.3초)

let toasts: Toast[] = [];

const genId = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `toast-${timestamp}-${random}`;
};

const timeouts = new Map<string, ReturnType<typeof setTimeout>>();
const listeners: Array<(toasts: Toast[]) => void> = [];

const toast = ({
  message,
  type = 'success',
}: Pick<Toast, 'message' | 'type'>) => {
  const id = genId();

  if (listeners.length === 0) return;

  toasts = [...toasts, { id, message, show: true, type }];
  listeners.forEach((listener) => listener(toasts));

  const hideTimeout = setTimeout(() => {
    toasts = toasts.map((toast) =>
      toast.id === id ? { ...toast, show: false } : toast,
    );
    listeners.forEach((listener) => listener(toasts));

    const removeTimeout = setTimeout(() => {
      toasts = toasts.filter((toast) => toast.id !== id);
      listeners.forEach((listener) => listener(toasts));
    }, ANIMATION_DURATION);

    timeouts.set(`${id}-remove`, removeTimeout);
  }, TOAST_DURATION);

  timeouts.set(`${id}-hide`, hideTimeout);
};

export const useToast = () => {
  const [state, setState] = useState(toasts);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    toast,
    toasts: state,
  };
};
