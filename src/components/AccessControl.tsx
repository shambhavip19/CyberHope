import React from 'react';
import { Users, Globe, Info } from 'lucide-react';

export const AccessControl: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Globe className="h-6 w-6 text-blue-400" />
        <h2 className="text-xl font-semibold text-white">Public Evidence System</h2>
      </div>

      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <div className="p-4 bg-blue-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <Globe className="h-10 w-10 text-white" />
        </div>
        
        <h3 className="text-xl font-medium text-white mb-4">All Evidence is Public</h3>
        
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            This system now operates as a public evidence repository where all submitted evidence is visible to everyone.
          </p>
          
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mt-6">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-medium text-blue-300 mb-2">How it works now:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Anyone can view all submitted evidence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>No access permissions or requests needed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>All evidence appears in the "All Evidence" tab</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Files remain encrypted and stored on IPFS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Users className="h-4 w-4" />
              <span className="text-sm">Access control and permission management have been removed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};