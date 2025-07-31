import Toast from './Toast/Toast';
import { useToast } from './useToast';

export default function Toaster() {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} show={toast.show} type={toast.type}>
          {toast.message}
        </Toast>
      ))}
    </>
  );
}
