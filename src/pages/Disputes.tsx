import React, { useState } from 'react';
import { PlusIcon, CheckCircleIcon, XCircleIcon, ClockIcon, FileTextIcon } from 'lucide-react';
const Disputes = () => {
  const [activeTab, setActiveTab] = useState('active');
  const tabs = [{
    id: 'active',
    label: 'Active Disputes'
  }, {
    id: 'resolved',
    label: 'Resolved'
  }, {
    id: 'new',
    label: 'Create New'
  }];
  // Mock data for disputes
  const activeDisputes = [{
    id: 1,
    creditor: 'Bank of America',
    accountNumber: 'xxxx-xxxx-xxxx-1234',
    issueType: 'Late Payment',
    dateSubmitted: 'June 10, 2023',
    status: 'In Progress',
    statusIcon: <ClockIcon className="h-5 w-5 text-yellow-500" />
  }, {
    id: 2,
    creditor: 'Capital One',
    accountNumber: 'xxxx-xxxx-xxxx-5678',
    issueType: 'Account Not Mine',
    dateSubmitted: 'June 5, 2023',
    status: 'Under Review',
    statusIcon: <ClockIcon className="h-5 w-5 text-blue-500" />
  }];
  const resolvedDisputes = [{
    id: 3,
    creditor: 'Chase Bank',
    accountNumber: 'xxxx-xxxx-xxxx-9012',
    issueType: 'Incorrect Balance',
    dateSubmitted: 'May 15, 2023',
    dateResolved: 'June 1, 2023',
    status: 'Resolved (Approved)',
    statusIcon: <CheckCircleIcon className="h-5 w-5 text-green-500" />
  }, {
    id: 4,
    creditor: 'Discover',
    accountNumber: 'xxxx-xxxx-xxxx-3456',
    issueType: 'Account Status',
    dateSubmitted: 'May 10, 2023',
    dateResolved: 'May 28, 2023',
    status: 'Resolved (Denied)',
    statusIcon: <XCircleIcon className="h-5 w-5 text-red-500" />
  }];
  // Form state for new dispute
  const [newDispute, setNewDispute] = useState({
    creditor: '',
    accountNumber: '',
    issueType: '',
    description: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setNewDispute({
      ...newDispute,
      [name]: value
    });
  };
  const handleSubmitDispute = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the dispute to your backend
    alert('Dispute submitted successfully!');
    setNewDispute({
      creditor: '',
      accountNumber: '',
      issueType: '',
      description: ''
    });
    setActiveTab('active');
  };
  return <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Disputes</h1>
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}>
              {tab.label}
            </button>)}
        </nav>
      </div>
      <div className="py-6">
        {/* Active Disputes Tab */}
        {activeTab === 'active' && <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Active Disputes ({activeDisputes.length})
              </h2>
              <button onClick={() => setActiveTab('new')} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <PlusIcon className="h-4 w-4 mr-1" />
                New Dispute
              </button>
            </div>
            {activeDisputes.length === 0 ? <p className="text-gray-500 text-center py-8">
                No active disputes found.
              </p> : <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {activeDisputes.map(dispute => <li key={dispute.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <p className="text-sm font-medium text-blue-600 truncate">
                              {dispute.creditor}
                            </p>
                          </div>
                          <div className="flex items-center">
                            {dispute.statusIcon}
                            <p className="ml-2 text-sm text-gray-500">
                              {dispute.status}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              Account: {dispute.accountNumber}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              Issue: {dispute.issueType}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <p>Submitted: {dispute.dateSubmitted}</p>
                          </div>
                        </div>
                      </div>
                    </li>)}
                </ul>
              </div>}
          </div>}
        {/* Resolved Disputes Tab */}
        {activeTab === 'resolved' && <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Resolved Disputes ({resolvedDisputes.length})
            </h2>
            {resolvedDisputes.length === 0 ? <p className="text-gray-500 text-center py-8">
                No resolved disputes found.
              </p> : <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {resolvedDisputes.map(dispute => <li key={dispute.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <p className="text-sm font-medium text-blue-600 truncate">
                              {dispute.creditor}
                            </p>
                          </div>
                          <div className="flex items-center">
                            {dispute.statusIcon}
                            <p className="ml-2 text-sm text-gray-500">
                              {dispute.status}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              Account: {dispute.accountNumber}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              Issue: {dispute.issueType}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <p>Resolved: {dispute.dateResolved}</p>
                          </div>
                        </div>
                      </div>
                    </li>)}
                </ul>
              </div>}
          </div>}
        {/* Create New Dispute Tab */}
        {activeTab === 'new' && <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Create New Dispute
            </h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <form onSubmit={handleSubmitDispute}>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="creditor" className="block text-sm font-medium text-gray-700">
                        Creditor / Company Name
                      </label>
                      <div className="mt-1">
                        <input type="text" name="creditor" id="creditor" required value={newDispute.creditor} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                        Account Number (Last 4 digits)
                      </label>
                      <div className="mt-1">
                        <input type="text" name="accountNumber" id="accountNumber" required value={newDispute.accountNumber} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
                        Issue Type
                      </label>
                      <div className="mt-1">
                        <select id="issueType" name="issueType" required value={newDispute.issueType} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                          <option value="">Select an issue type</option>
                          <option value="Account Not Mine">
                            Account Not Mine
                          </option>
                          <option value="Late Payment">Late Payment</option>
                          <option value="Incorrect Balance">
                            Incorrect Balance
                          </option>
                          <option value="Account Status">Account Status</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea id="description" name="description" rows={4} required value={newDispute.description} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Describe the issue in detail..." />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button type="button" onClick={() => setActiveTab('active')} className="mr-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Cancel
                    </button>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Submit Dispute
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
export default Disputes;