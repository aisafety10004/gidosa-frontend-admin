import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes';

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
            {/* <ReactQueryDevtools
        initialIsOpen={import.meta.env.VITE_USER_NODE_ENV !== 'prod'}
      /> */}
        </QueryClientProvider>
    );
}

export default App;
