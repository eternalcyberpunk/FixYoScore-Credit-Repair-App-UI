import React, { useState } from 'react';
import { FileIcon, UploadIcon, XIcon } from 'lucide-react';
const DocumentManager = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      // Create preview URLs
      newFiles.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };
  return <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Document Manager</h1>
        <p className="mt-1 text-sm text-gray-500">
          Upload and manage client documents and credit reports
        </p>
      </div>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                  <span>Upload files</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleFileChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                PDF, DOC, DOCX, PNG, JPG up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
      {files.length > 0 && <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Uploaded Files
          </h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {files.map((file, index) => <li key={index} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileIcon className="h-6 w-6 text-gray-400" />
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {file.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button onClick={() => removeFile(index)} className="text-gray-400 hover:text-gray-500">
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                  {file.type.startsWith('image/') && previews[index] && <div className="relative h-32 rounded-lg overflow-hidden">
                      <img src={previews[index]} alt={file.name} className="w-full h-full object-cover" />
                    </div>}
                  {file.type === 'application/pdf' && <div className="flex justify-center">
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        Preview PDF
                      </button>
                    </div>}
                </div>
              </li>)}
          </ul>
        </div>}
    </div>;
};
export default DocumentManager;