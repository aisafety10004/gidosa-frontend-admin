import "@/styles/globals.css";
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';
// import Home from './pages/Home';
// import Register from './pages/member/Register';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
