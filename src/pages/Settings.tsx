import React, { useState } from 'react';
import { UserIcon, CreditCardIcon, BellIcon, LockIcon, ShieldIcon, PlusIcon } from 'lucide-react';
const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const tabs = [{
    id: 'profile',
    label: 'Profile',
    icon: <UserIcon className="h-5 w-5 mr-2" />
  }, {
    id: 'billing',
    label: 'Billing',
    icon: <CreditCardIcon className="h-5 w-5 mr-2" />
  }, {
    id: 'notifications',
    label: 'Notifications',
    icon: <BellIcon className="h-5 w-5 mr-2" />
  }, {
    id: 'security',
    label: 'Security',
    icon: <LockIcon className="h-5 w-5 mr-2" />
  }, {
    id: 'privacy',
    label: 'Privacy',
    icon: <ShieldIcon className="h-5 w-5 mr-2" />
  }];
  // Profile form state
  const [profileForm, setProfileForm] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567'
  });
  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailUpdates: true,
    textUpdates: false,
    creditScoreChanges: true,
    disputeUpdates: true,
    promotionalEmails: false
  });
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setProfileForm({
      ...profileForm,
      [name]: value
    });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setPasswordForm({
      ...passwordForm,
      [name]: value
    });
  };
  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      checked
    } = e.target;
    setNotificationSettings({
      ...notificationSettings,
      [name]: checked
    });
  };
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would update the profile information here
    alert('Profile updated successfully!');
  };
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would update the password here
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    alert('Password updated successfully!');
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };
  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would update notification settings here
    alert('Notification settings updated successfully!');
  };
  return <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`
                  flex items-center py-4 px-6 font-medium text-sm
                  ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}>
                {tab.icon}
                {tab.label}
              </button>)}
          </nav>
        </div>
        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && <form onSubmit={handleProfileSubmit}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Update your personal details and contact information.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input type="text" name="firstName" id="firstName" value={profileForm.firstName} onChange={handleProfileChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input type="text" name="lastName" id="lastName" value={profileForm.lastName} onChange={handleProfileChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input type="email" name="email" id="email" value={profileForm.email} onChange={handleProfileChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <div className="mt-1">
                      <input type="text" name="phone" id="phone" value={profileForm.phone} onChange={handleProfileChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex justify-end">
                    <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>}
          {/* Billing Tab */}
          {activeTab === 'billing' && <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Subscription Plan
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your subscription and billing information.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Premium Plan
                    </h3>
                    <p className="text-sm text-gray-500">$19.99/month</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Next billing date: July 15, 2023
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Change Plan
                    </button>
                    <button className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-red-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Payment Methods
                </h3>
                <div className="bg-white border border-gray-200 rounded-md p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <CreditCardIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          •••• •••• •••• 4242
                        </p>
                        <p className="text-xs text-gray-500">Expires 12/2024</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                      <button className="text-sm text-gray-500 hover:text-gray-700">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Add payment method
                </button>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Billing History
                </h3>
                <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Invoice
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          June 15, 2023
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          $19.99
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Paid
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                          <button>Download</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          May 15, 2023
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          $19.99
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Paid
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                          <button>Download</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>}
          {/* Notifications Tab */}
          {activeTab === 'notifications' && <form onSubmit={handleNotificationSubmit}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Notification Preferences
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose how you want to be notified about activity in your
                    account.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Email Updates
                      </h3>
                      <p className="text-sm text-gray-500">
                        Receive updates via email
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input id="emailUpdates" name="emailUpdates" type="checkbox" checked={notificationSettings.emailUpdates} onChange={handleNotificationChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Text Message Updates
                      </h3>
                      <p className="text-sm text-gray-500">
                        Receive updates via SMS
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input id="textUpdates" name="textUpdates" type="checkbox" checked={notificationSettings.textUpdates} onChange={handleNotificationChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Credit Score Changes
                      </h3>
                      <p className="text-sm text-gray-500">
                        Get notified when your credit score changes
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input id="creditScoreChanges" name="creditScoreChanges" type="checkbox" checked={notificationSettings.creditScoreChanges} onChange={handleNotificationChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Dispute Updates
                      </h3>
                      <p className="text-sm text-gray-500">
                        Get notified about dispute status changes
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input id="disputeUpdates" name="disputeUpdates" type="checkbox" checked={notificationSettings.disputeUpdates} onChange={handleNotificationChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Promotional Emails
                      </h3>
                      <p className="text-sm text-gray-500">
                        Receive promotional offers and updates
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input id="promotionalEmails" name="promotionalEmails" type="checkbox" checked={notificationSettings.promotionalEmails} onChange={handleNotificationChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex justify-end">
                    <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            </form>}
          {/* Security Tab */}
          {activeTab === 'security' && <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Change Password
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Update your password to keep your account secure.
                </p>
              </div>
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                      Current Password
                    </label>
                    <div className="mt-1">
                      <input id="currentPassword" name="currentPassword" type="password" required value={passwordForm.currentPassword} onChange={handlePasswordChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <div className="mt-1">
                      <input id="newPassword" name="newPassword" type="password" required value={passwordForm.newPassword} onChange={handlePasswordChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <div className="mt-1">
                      <input id="confirmPassword" name="confirmPassword" type="password" required value={passwordForm.confirmPassword} onChange={handlePasswordChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Update Password
                  </button>
                </div>
              </form>
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Two-Factor Authentication
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Add an extra layer of security to your account by enabling
                  two-factor authentication.
                </p>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Enable Two-Factor Authentication
                </button>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Active Sessions
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Current Session
                        </p>
                        <p className="text-xs text-gray-500">
                          Chrome on Windows • IP: 192.168.1.1
                        </p>
                        <p className="text-xs text-gray-500">
                          Started: Today at 10:23 AM
                        </p>
                      </div>
                      <div>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          Active Now
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-4 text-sm text-red-600 hover:text-red-800">
                  Sign out of all other sessions
                </button>
              </div>
            </div>}
          {/* Privacy Tab */}
          {activeTab === 'privacy' && <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Privacy Settings
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Control how your information is used and shared.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Data Sharing
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Control how we use your data to improve our services and
                    provide personalized recommendations.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="analytics" name="analytics" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="analytics" className="font-medium text-gray-700">
                          Allow analytics
                        </label>
                        <p className="text-gray-500">
                          Help us improve by allowing collection of anonymous
                          usage data.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="personalization" name="personalization" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="personalization" className="font-medium text-gray-700">
                          Personalized recommendations
                        </label>
                        <p className="text-gray-500">
                          Allow us to provide personalized credit repair
                          recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    Data Management
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Manage the data we have collected about you.
                  </p>
                  <div className="mt-4 space-y-4">
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Download my data
                    </button>
                    <div>
                      <button className="text-sm text-red-600 hover:text-red-800">
                        Delete my account
                      </button>
                      <p className="text-xs text-gray-500 mt-1">
                        This action cannot be undone. All your data will be
                        permanently deleted.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    Third-Party Connections
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Manage connections to third-party services.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Experian
                        </p>
                        <p className="text-xs text-gray-500">
                          Connected on June 1, 2023
                        </p>
                      </div>
                      <button className="text-sm text-red-600 hover:text-red-800">
                        Disconnect
                      </button>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          TransUnion
                        </p>
                        <p className="text-xs text-gray-500">
                          Connected on June 1, 2023
                        </p>
                      </div>
                      <button className="text-sm text-red-600 hover:text-red-800">
                        Disconnect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="flex justify-end">
                  <button type="button" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default Settings;