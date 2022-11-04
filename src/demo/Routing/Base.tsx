import React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import A from './A';
import B from './B';
import C from './C';

// const Base: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/a" />} />
//         <Route path="/a" element={<A />} />
//         <Route path="/b" element={<B />} />
//         <Route path="/c" element={<C />} />
//         <Route path="/c/:id" element={<C />} />
//         <Route path="*" element={<div>does not exist</div>} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

const Base: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/a" />,
    },
    {
      path: '/a',
      element: <A />,
    },
    {
      path: '/b',
      element: <B />,
    },
    {
      path: '/c',
      element: <C />,
    },
    {
      path: '/c/:id',
      element: <C />,
    },
    {
      path: '*',
      element: <div>does not exist</div>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Base;
