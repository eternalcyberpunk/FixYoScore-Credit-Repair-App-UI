import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Disputes from './pages/Disputes';
import Reports from './pages/Reports';
import Education from './pages/Education';
import Settings from './pages/Settings';
import Layout from './components/layout/Layout';
import ForgotPassword from './pages/ForgotPassword';
import ClientDetails from './pages/ClientDetails';
import DocumentManager from './pages/DocumentManager';
import LetterGenerator from './pages/LetterGenerator';
import NewClient from './pages/NewClient';
import ArticleView from './pages/ArticleView';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
        <Route path="/forgot-password" element={!isAuthenticated ? <ForgotPassword /> : <Navigate to="/dashboard" />} />
        {/* Protected Routes */}
        <Route path="/dashboard" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <Dashboard />
              </Layout> : <Navigate to="/login" />} />
        <Route path="/disputes" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <Disputes />
              </Layout> : <Navigate to="/login" />} />
        <Route path="/reports" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <Reports />
              </Layout> : <Navigate to="/login" />} />
        <Route path="/education" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <Education />
              </Layout> : <Navigate to="/login" />} />
        <Route path="/settings" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <Settings />
              </Layout> : <Navigate to="/login" />} />
        {/* New Routes */}
        <Route path="/clients/:id" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <ClientDetails />
              </Layout> : <Navigate to="/login" />} />
        <Route path="/documents/*" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <DocumentManager />
              </Layout> : <Navigate to="/login" />} />
        <Route path="/letters/*" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <LetterGenerator />
              </Layout> : <Navigate to="/login" />} />
        <Route path="/clients/new" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <NewClient />
              </Layout> : <Navigate to="/login" />} />
        <Route path="/education/article/:id" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                <ArticleView />
              </Layout> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />} />
      </Routes>
    </Router>;
}