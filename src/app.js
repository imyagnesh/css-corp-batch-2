import React, { lazy, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

const App = () => (
  <Routes>
    <Route path="/" element={<AuthLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Register />
          </Suspense>
        }
      />
    </Route>
    <Route
      path="/home"
      element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <Home />
        </Suspense>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
