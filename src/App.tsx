import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes';
// ✅ 1. PrimeReact 테마 (테마가 반드시 제일 먼저)
import 'primereact/resources/themes/lara-light-blue/theme.css';

// ✅ 2. PrimeReact core
import 'primereact/resources/primereact.min.css';

// ✅ 3. PrimeIcons (체크 아이콘 등)
import 'primeicons/primeicons.css';
import Toaster from './components/ui/alerts/Toaster/Toaster';

const client = new QueryClient({
  defaultOptions: {
    // react-query 전역 설정
    queries: {
      refetchOnWindowFocus: false,
      retryOnMount: true,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <Router />
      <Toaster />
      {/* <ReactQueryDevtools
        initialIsOpen={import.meta.env.VITE_USER_NODE_ENV !== 'prod'}
      /> */}
    </QueryClientProvider>
  );
}

export default App;
