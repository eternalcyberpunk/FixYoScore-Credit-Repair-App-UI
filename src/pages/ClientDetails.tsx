import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { UserIcon, PhoneIcon, MailIcon, MapPinIcon, FileTextIcon, UploadIcon, PenToolIcon, ArrowLeftIcon } from 'lucide-react';
import { mockClients } from '../components/clients/ClientList';
const ClientDetails = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  // Find the client based on the ID parameter
  const client = mockClients.find(c => c.id === Number(id));
  // If client not found, show error state
  if (!client) {
    return <div className="container mx-auto py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Client Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The requested client could not be found.
          </p>
          <button onClick={() => navigate('/dashboard')} className="text-blue-600 hover:text-blue-800">
            Return to Dashboard
          </button>
        </div>
      </div>;
  }
  const tabs = [{
    id: 'overview',
    label: 'Overview'
  }, {
    id: 'disputes',
    label: 'Disputes'
  }, {
    id: 'documents',
    label: 'Documents'
  }];
  return <div className="container mx-auto py-6">
      <div className="mb-6">
        <button onClick={() => navigate('/dashboard')} className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Dashboard
        </button>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{client.name}</h1>
          <div className="space-x-4">
            <Link to="/documents/upload" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <UploadIcon className="h-4 w-4 mr-2" />
              Upload Document
            </Link>
            <Link to="/letters/generate" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <PenToolIcon className="h-4 w-4 mr-2" />
              Generate Letter
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}>
                {tab.label}
              </button>)}
          </nav>
        </div>
        <div className="px-6 py-6">
          {activeTab === 'overview' && <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{client.name}</span>
                  </div>
                  <div className="flex items-center">
                    <MailIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{client.email}</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{client.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{client.address}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Credit Score
                  </h3>
                  <div className="text-3xl font-bold text-blue-600">
                    {client.creditScore}
                  </div>
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: `${client.creditScore / 850 * 100}%`
                }}></div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'disputes' && <div className="space-y-4">
              {client.disputes.map(dispute => <div key={dispute.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {dispute.type}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Submitted on {dispute.date}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {dispute.status}
                    </span>
                  </div>
                </div>)}
            </div>}
          {activeTab === 'documents' && <div className="space-y-4">
              {client.documents.map(document => <div key={document.id} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {document.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Uploaded on {document.date}
                        </p>
                      </div>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      View
                    </button>
                  </div>
                </div>)}
            </div>}
        </div>
      </div>
    </div>;
};
export default ClientDetails;