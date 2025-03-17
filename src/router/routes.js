// src/router/routes.js
import Layout from '@/components/layout/Layout';
import Dashboard from '@/pages/Dashboard';
import Customers from '@/pages/Customers';
import Sales from '@/pages/Sales';


// Placeholder component for upcoming features
const PlaceholderPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-semibold text-gray-800">Coming Soon</h1>
    <p className="mt-2 text-gray-600">
      This feature is currently under development.
    </p>
  </div>
);


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
