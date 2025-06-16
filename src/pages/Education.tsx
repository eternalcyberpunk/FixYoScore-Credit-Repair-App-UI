import React, { useState } from 'react';
import { BookOpenIcon, PlayIcon, FileTextIcon, SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Education = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  // Mock data for education resources
  const articles = [{
    id: 1,
    title: 'Understanding Your Credit Score',
    description: "Learn what factors affect your credit score and how it's calculated.",
    category: 'Credit Basics',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 2,
    title: 'How to Dispute Credit Report Errors',
    description: 'A step-by-step guide to disputing errors on your credit report.',
    category: 'Dispute Process',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 3,
    title: '5 Ways to Improve Your Credit Score Fast',
    description: 'Quick strategies that can help boost your credit score in the short term.',
    category: 'Credit Building',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }];
  const videos = [{
    id: 1,
    title: 'Credit Repair 101',
    description: 'An introduction to credit repair and how our process works.',
    duration: '12:34',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 2,
    title: 'Debt Consolidation Explained',
    description: "Learn how debt consolidation works and if it's right for you.",
    duration: '8:27',
    thumbnail: 'https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }];
  const guides = [{
    id: 1,
    title: 'The Ultimate Credit Repair Guide',
    description: 'A comprehensive guide to repairing your credit step by step.',
    pages: 24,
    format: 'PDF',
    thumbnail: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 2,
    title: 'Sample Dispute Letters',
    description: 'Templates for different types of credit dispute letters.',
    pages: 10,
    format: 'DOCX',
    thumbnail: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }];
  // Filter content based on search query
  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.description.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchQuery.toLowerCase()) || video.description.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredGuides = guides.filter(guide => guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || guide.description.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Education Center
      </h1>
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Search for articles, videos, or guides..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
      </div>
      {/* Articles Section */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <BookOpenIcon className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Articles</h2>
        </div>
        {filteredArticles.length === 0 ? <p className="text-gray-500">
            No articles found matching your search.
          </p> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]" onClick={() => navigate(`/education/article/${article.id}`)}>
                <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {article.description}
                  </p>
                  <span className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    Read Article →
                  </span>
                </div>
              </div>)}
          </div>}
      </div>
      {/* Videos Section */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <PlayIcon className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">
            Video Tutorials
          </h2>
        </div>
        {filteredVideos.length === 0 ? <p className="text-gray-500">No videos found matching your search.</p> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredVideos.map(video => <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-80 rounded-full p-3">
                      <PlayIcon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {video.description}
                  </p>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    Watch Video →
                  </button>
                </div>
              </div>)}
          </div>}
      </div>
      {/* Guides Section */}
      <div>
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">
            Guides & Resources
          </h2>
        </div>
        {filteredGuides.length === 0 ? <p className="text-gray-500">No guides found matching your search.</p> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map(guide => <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={guide.thumbnail} alt={guide.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                      {guide.format}
                    </span>
                    <span className="text-xs text-gray-500">
                      {guide.pages} pages
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {guide.description}
                  </p>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    Download Guide →
                  </button>
                </div>
              </div>)}
          </div>}
      </div>
    </div>;
};
export default Education;