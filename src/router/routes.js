// src/router/routes.js
import Layout from '@/components/layout/Layout';
import Dashboard from '@/pages/Dashboard';
import Customers from '@/pages/Customers';
import Sales from '@/pages/Sales';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'customers',
        element: <Customers />,
      },
      {
        path: 'sales',
        element: <Sales />,
      },
      {
        path: '*',
        element: <Dashboard />,
      }
    ]
  }
];

export default routes;
