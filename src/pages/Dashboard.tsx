import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, ClockIcon, AlertCircleIcon } from 'lucide-react';
import ClientList from '../components/clients/ClientList';
const Dashboard = () => {
  // Mock data
  const creditScore = 650;
  const previousScore = 620;
  const scoreChange = creditScore - previousScore;
  const scoreImprovement = scoreChange > 0;
  return <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Credit Score Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Company Overview
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Active Clients</p>
                <p className="text-2xl font-bold text-blue-600">24</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Disputes</p>
                <p className="text-2xl font-bold text-blue-600">47</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Success Rate</p>
                <p className="text-2xl font-bold text-green-600">78%</p>
              </div>
            </div>
          </div>
        </div>
        {/* Client List */}
        <div className="lg:col-span-2">
          <ClientList />
        </div>
      </div>
      {/* Recent Activity and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <ClockIcon className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  New dispute letter generated
                </p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <ClockIcon className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Credit report uploaded
                </p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <ClockIcon className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  New client added
                </p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
        {/* Alerts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <AlertCircleIcon className="h-5 w-5 text-red-500 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Dispute response deadline approaching
                </p>
                <p className="text-sm text-gray-500">
                  Response needed by Jun 20
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <AlertCircleIcon className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Credit report update needed
                </p>
                <p className="text-sm text-gray-500">
                  Last update: 30 days ago
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <AlertCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  New credit bureau response
                </p>
                <p className="text-sm text-gray-500">Review required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;