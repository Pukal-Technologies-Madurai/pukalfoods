import React from 'react';

const RawMaterials = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Primitive Materials</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your raw materials items here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Raw Material 1</h2>
            <p className="text-gray-600">Description of the raw material and its specifications.</p>
          </div>
          {/* Add more items as needed */}
        </div>
      </div>
    </div>
  );
};

export default RawMaterials; 