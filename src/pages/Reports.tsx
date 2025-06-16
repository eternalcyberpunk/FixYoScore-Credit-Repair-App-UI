import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3Icon, PieChartIcon, CreditCardIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';
const Reports = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const tabs = [{
    id: 'overview',
    label: 'Overview',
    icon: <BarChart3Icon className="h-5 w-5 mr-2" />
  }, {
    id: 'accounts',
    label: 'Accounts',
    icon: <CreditCardIcon className="h-5 w-5 mr-2" />
  }, {
    id: 'negativeItems',
    label: 'Negative Items',
    icon: <AlertCircleIcon className="h-5 w-5 mr-2" />
  }];
  // Mock data
  const creditScore = 650;
  const creditScoreHistory = [{
    month: 'Jan',
    score: 590
  }, {
    month: 'Feb',
    score: 600
  }, {
    month: 'Mar',
    score: 610
  }, {
    month: 'Apr',
    score: 620
  }, {
    month: 'May',
    score: 630
  }, {
    month: 'Jun',
    score: 650
  }];
  const accounts = [{
    id: 1,
    creditor: 'Chase Bank',
    accountType: 'Credit Card',
    accountNumber: 'xxxx-xxxx-xxxx-1234',
    balance: '$2,500',
    creditLimit: '$5,000',
    paymentStatus: 'Current',
    lastReported: 'June 1, 2023',
    status: 'good'
  }, {
    id: 2,
    creditor: 'Bank of America',
    accountType: 'Auto Loan',
    accountNumber: 'xxxx-xxxx-xxxx-5678',
    balance: '$12,350',
    creditLimit: '$20,000',
    paymentStatus: 'Current',
    lastReported: 'June 5, 2023',
    status: 'good'
  }, {
    id: 3,
    creditor: 'Capital One',
    accountType: 'Credit Card',
    accountNumber: 'xxxx-xxxx-xxxx-9012',
    balance: '$3,200',
    creditLimit: '$3,500',
    paymentStatus: 'Late 30 Days',
    lastReported: 'May 28, 2023',
    status: 'bad'
  }];
  const negativeItems = [{
    id: 1,
    creditor: 'Capital One',
    accountType: 'Credit Card',
    accountNumber: 'xxxx-xxxx-xxxx-9012',
    issue: 'Late Payment',
    dateReported: 'May 28, 2023',
    status: 'Active',
    impact: 'High'
  }, {
    id: 2,
    creditor: 'Collection Agency XYZ',
    accountType: 'Collection',
    accountNumber: 'xxxx-xxxx-xxxx-3456',
    issue: 'Unpaid Medical Bill',
    dateReported: 'April 15, 2023',
    status: 'Active',
    impact: 'High'
  }, {
    id: 3,
    creditor: 'Discover',
    accountType: 'Credit Card',
    accountNumber: 'xxxx-xxxx-xxxx-7890',
    issue: 'Late Payment',
    dateReported: 'March 10, 2023',
    status: 'Disputed',
    impact: 'Medium'
  }];
  const handleDispute = (itemId: number) => {
    navigate('/disputes', {
      state: {
        disputeItem: negativeItems.find(item => item.id === itemId),
        activeTab: 'new'
      }
    });
  };
  return <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Credit Reports</h1>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center
                ${activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}>
              {tab.icon}
              {tab.label}
            </button>)}
        </nav>
      </div>
      {/* Overview Tab */}
      {activeTab === 'overview' && <div>
          {/* Credit Score Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Your Credit Score
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm text-gray-500">Current Score</p>
                <div className="flex items-center">
                  <span className="text-4xl font-bold text-blue-600">
                    {creditScore}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Last updated: June 15, 2023
                </p>
              </div>
              <div className="w-full md:w-2/3 bg-gray-100 rounded-full h-4">
                <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 h-4 rounded-full" style={{
              width: `${creditScore / 850 * 100}%`
            }}></div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Poor</span>
                  <span>Fair</span>
                  <span>Good</span>
                  <span>Excellent</span>
                </div>
              </div>
            </div>
          </div>
          {/* Credit Score History */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Credit Score History
            </h2>
            <div className="h-64">
              <div className="h-full flex items-end">
                {creditScoreHistory.map((item, index) => <div key={index} className="flex flex-col items-center flex-1">
                    <div className="w-full max-w-[40px] bg-blue-500 rounded-t-md" style={{
                height: `${item.score / 850 * 100}%`,
                opacity: 0.6 + index * 0.1
              }}></div>
                    <div className="text-xs text-gray-500 mt-2">
                      {item.month}
                    </div>
                    <div className="text-xs font-medium">{item.score}</div>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Credit Factors */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Key Credit Factors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Payment History</h3>
                  <span className="text-yellow-500 font-medium">Fair</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{
                width: '60%'
              }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  You have 2 late payments in the last 12 months.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Credit Utilization</h3>
                  <span className="text-red-500 font-medium">Poor</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-500 h-2.5 rounded-full" style={{
                width: '80%'
              }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Your credit utilization is 80%, aim for below 30%.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Credit Age</h3>
                  <span className="text-green-500 font-medium">Good</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{
                width: '75%'
              }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Average account age is 6 years, 2 months.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Account Mix</h3>
                  <span className="text-yellow-500 font-medium">Fair</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{
                width: '50%'
              }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  You have limited variety in your account types.
                </p>
              </div>
            </div>
          </div>
        </div>}
      {/* Accounts Tab */}
      {activeTab === 'accounts' && <div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700">
                Your Accounts
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Total accounts: {accounts.length}
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {accounts.map(account => <li key={account.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CreditCardIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <p className="text-sm font-medium text-blue-600">
                        {account.creditor}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {account.status === 'good' ? <CheckCircleIcon className="h-5 w-5 text-green-500" /> : <AlertCircleIcon className="h-5 w-5 text-red-500" />}
                      <p className="ml-2 text-sm text-gray-500">
                        {account.paymentStatus}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {account.accountType}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        Account: {account.accountNumber}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        Balance: {account.balance}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        Limit: {account.creditLimit}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>Last reported: {account.lastReported}</p>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
        </div>}
      {/* Negative Items Tab */}
      {activeTab === 'negativeItems' && <div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700">
                Negative Items
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Items that are negatively affecting your credit score
              </p>
            </div>
            {negativeItems.length === 0 ? <div className="px-4 py-12 text-center">
                <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No negative items found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Your credit report is in good standing.
                </p>
              </div> : <ul className="divide-y divide-gray-200">
                {negativeItems.map(item => <li key={item.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <AlertCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                        <p className="text-sm font-medium text-red-600">
                          {item.issue}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${item.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {item.impact} Impact
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {item.creditor} - {item.accountType}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          Account: {item.accountNumber}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>Reported: {item.dateReported}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button onClick={() => handleDispute(item.id)} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Dispute this item
                      </button>
                    </div>
                  </li>)}
              </ul>}
          </div>
        </div>}
    </div>;
};
export default Reports;