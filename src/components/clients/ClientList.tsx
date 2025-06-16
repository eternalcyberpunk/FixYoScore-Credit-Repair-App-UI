import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, ClockIcon, FileTextIcon } from 'lucide-react';
// Extended mock data for different clients
const mockClients = [{
  id: 1,
  name: 'Sarah Johnson',
  email: 'sarah.j@example.com',
  status: 'Active',
  lastActivity: '2 hours ago',
  creditScore: 650,
  disputesCount: 2,
  phone: '(555) 123-4567',
  address: '123 Main St, Anytown, USA',
  disputes: [{
    id: 1,
    date: '2023-06-15',
    type: 'Late Payment',
    status: 'In Progress'
  }, {
    id: 2,
    date: '2023-06-01',
    type: 'Account Not Mine',
    status: 'Resolved'
  }],
  documents: [{
    id: 1,
    name: 'Credit Report - June 2023',
    date: '2023-06-15',
    type: 'PDF'
  }]
}, {
  id: 2,
  name: 'Michael Chen',
  email: 'm.chen@example.com',
  status: 'Pending',
  lastActivity: '1 day ago',
  creditScore: 580,
  disputesCount: 1,
  phone: '(555) 987-6543',
  address: '456 Oak Ave, Somewhere, USA',
  disputes: [{
    id: 3,
    date: '2023-06-10',
    type: 'Incorrect Balance',
    status: 'In Progress'
  }],
  documents: [{
    id: 2,
    name: 'Bank Statement - June 2023',
    date: '2023-06-10',
    type: 'PDF'
  }]
}, {
  id: 3,
  name: 'Emily Davis',
  email: 'emily.d@example.com',
  status: 'Active',
  lastActivity: '3 days ago',
  creditScore: 720,
  disputesCount: 0,
  phone: '(555) 456-7890',
  address: '789 Pine St, Elsewhere, USA',
  disputes: [],
  documents: [{
    id: 3,
    name: 'Initial Consultation Notes',
    date: '2023-06-05',
    type: 'PDF'
  }]
}];
// Export the mock data for use in other components
export { mockClients };
const ClientList = () => {
  const navigate = useNavigate();
  return <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Active Clients
          </h2>
          <button onClick={() => navigate('/clients/new')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
            Add New Client
          </button>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {mockClients.map(client => <li key={client.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => navigate(`/clients/${client.id}`)}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <UserIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-600">
                      {client.name}
                    </p>
                    <p className="text-sm text-gray-500">{client.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      Credit Score
                    </p>
                    <p className={`text-sm ${client.creditScore >= 700 ? 'text-green-600' : client.creditScore >= 600 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {client.creditScore}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      Active Disputes
                    </p>
                    <p className="text-sm text-gray-500">
                      {client.disputesCount}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  Last activity {client.lastActivity}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <FileTextIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  {client.disputesCount}{' '}
                  {client.disputesCount === 1 ? 'dispute' : 'disputes'} in
                  progress
                </div>
              </div>
            </div>
          </li>)}
      </ul>
    </div>;
};
export default ClientList;