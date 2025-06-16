import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, ClockIcon } from 'lucide-react';
// Mock article content
const articles = {
  1: {
    title: 'Understanding Your Credit Score',
    content: `
      Your credit score is a number that represents your creditworthiness. It's an important factor that lenders use to determine whether they'll approve you for a credit card or loan. The most common credit score is the FICO score, which ranges from 300 to 850.
      Here's what affects your credit score:
      1. Payment History (35% of your score)
      - Whether you've paid your bills on time
      - If you've had any late payments, collections, or bankruptcies
      2. Credit Utilization (30% of your score)
      - How much of your available credit you're using
      - Lower utilization rates are better
      3. Length of Credit History (15% of your score)
      - How long you've had credit accounts
      - Longer history generally means higher scores
      4. Credit Mix (10% of your score)
      - The variety of credit accounts you have
      - Having different types of credit can help your score
      5. New Credit (10% of your score)
      - How many new accounts you've opened recently
      - Too many new accounts can lower your score
      Tips to Improve Your Score:
      - Pay all bills on time
      - Keep credit utilization below 30%
      - Don't close old credit accounts
      - Limit new credit applications
      - Regularly check your credit report for errors
    `,
    category: 'Credit Basics',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  },
  2: {
    title: 'How to Dispute Credit Report Errors',
    content: `
      Finding errors on your credit report can be frustrating, but you have the right to dispute them. Here's a comprehensive guide on how to dispute credit report errors effectively.
      Step 1: Review Your Credit Report
      - Get free copies from annualcreditreport.com
      - Mark any suspicious items or errors
      - Gather supporting documentation
      Step 2: Prepare Your Dispute
      - Write a clear dispute letter
      - Include copies of supporting documents
      - Keep original documents for your records
      Step 3: Submit Your Dispute
      - Send via certified mail
      - Keep tracking numbers
      - Send to both the credit bureau and the creditor
      Step 4: Follow Up
      - Credit bureaus must investigate within 30 days
      - Check for a response
      - Review your credit report again
      Common Types of Errors:
      - Identity errors
      - Account status errors
      - Balance errors
      - Data management errors
      Remember:
      - Be persistent
      - Keep good records
      - Follow up regularly
      - Consider professional help if needed
    `,
    category: 'Dispute Process',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  },
  3: {
    title: '5 Ways to Improve Your Credit Score Fast',
    content: `
      While building excellent credit takes time, there are several strategies you can use to improve your credit score relatively quickly.
      1. Pay Down Credit Card Balances
      - Reduce your credit utilization ratio
      - Aim for below 30% utilization
      - Consider the snowball or avalanche method
      2. Request Credit Limit Increases
      - Can lower your utilization ratio
      - Don't use the extra credit
      - Ask every 6-12 months
      3. Become an Authorized User
      - Ask a responsible family member
      - Their good habits help your score
      - Make sure the card reports to bureaus
      4. Dispute Credit Report Errors
      - Check all three credit reports
      - Document any errors
      - File disputes promptly
      5. Pay Bills Before They're Due
      - Set up automatic payments
      - Pay more than minimum when possible
      - Keep track of due dates
      Additional Tips:
      - Don't close old credit cards
      - Limit new credit applications
      - Mix up your credit types
      - Monitor your credit regularly
    `,
    category: 'Credit Building',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }
};
const ArticleView = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const article = articles[Number(id)];
  if (!article) {
    return <div className="container mx-auto py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <button onClick={() => navigate('/education')} className="text-blue-600 hover:text-blue-800">
            Return to Education Center
          </button>
        </div>
      </div>;
  }
  return <div className="container mx-auto py-6">
      <button onClick={() => navigate('/education')} className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back to Education Center
      </button>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {article.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <ClockIcon className="h-4 w-4 mr-1" />
              {article.readTime}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>
          <div className="prose max-w-none">
            {article.content.split('\n').map((paragraph, index) => <p key={index} className="mb-4 text-gray-600">
                {paragraph}
              </p>)}
          </div>
        </div>
      </div>
    </div>;
};
export default ArticleView;