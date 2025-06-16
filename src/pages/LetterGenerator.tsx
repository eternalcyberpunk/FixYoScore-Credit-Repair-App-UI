import React, { useState } from 'react';
import { PenToolIcon, DownloadIcon } from 'lucide-react';
const letterTemplates = [{
  id: 1,
  name: 'General Dispute Letter',
  description: 'A general purpose dispute letter for incorrect information'
}, {
  id: 2,
  name: 'Late Payment Dispute',
  description: 'Dispute letter specifically for incorrect late payment reports'
}, {
  id: 3,
  name: 'Account Not Mine',
  description: "Dispute letter for accounts that don't belong to you"
}, {
  id: 4,
  name: 'Balance Dispute',
  description: 'Dispute letter for incorrect balance amounts'
}];
const LetterGenerator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [letterData, setLetterData] = useState({
    recipientName: '',
    recipientCompany: '',
    accountNumber: '',
    description: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setLetterData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would generate and download the PDF
    alert('Letter generated successfully!');
  };
  return <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Dispute Letter Generator
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Create professional dispute letters using our templates
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white shadow rounded-lg">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Templates</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {letterTemplates.map(template => <div key={template.id} className={`p-4 rounded-lg cursor-pointer border ${selectedTemplate === template.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`} onClick={() => setSelectedTemplate(template.id)}>
                    <h3 className="text-sm font-medium text-gray-900">
                      {template.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {template.description}
                    </p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="bg-white shadow rounded-lg">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Letter Details
              </h2>
            </div>
            <div className="p-4">
              {selectedTemplate ? <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
                      Recipient Name
                    </label>
                    <input type="text" name="recipientName" id="recipientName" value={letterData.recipientName} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="recipientCompany" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input type="text" name="recipientCompany" id="recipientCompany" value={letterData.recipientCompany} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                      Account Number
                    </label>
                    <input type="text" name="accountNumber" id="accountNumber" value={letterData.accountNumber} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Dispute Details
                    </label>
                    <textarea name="description" id="description" rows={4} value={letterData.description} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      <PenToolIcon className="h-4 w-4 mr-2" />
                      Preview
                    </button>
                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Generate Letter
                    </button>
                  </div>
                </form> : <div className="text-center py-12">
                  <PenToolIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No template selected
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Please select a template from the left to get started
                  </p>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default LetterGenerator;