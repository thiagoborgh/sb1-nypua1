import React from 'react';
import { format } from 'date-fns';
import { Tool as ToolIcon, Calendar } from 'lucide-react';

const MOCK_TOOLS = [
  {
    id: '1',
    ownerId: '1',
    name: 'Power Drill',
    description: 'Professional grade power drill with multiple attachments',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    pricePerDay: 25,
    available: true,
    promotion: {
      discountPercentage: 20,
      validUntil: new Date('2024-04-01'),
    },
  },
  {
    id: '2',
    ownerId: '2',
    name: 'Ladder',
    description: '8ft Aluminum ladder, perfect for home maintenance',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80',
    pricePerDay: 15,
    available: true,
  },
];

export default function ToolList() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Available Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TOOLS.map((tool) => (
          <div key={tool.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={tool.imageUrl}
              alt={tool.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                <div className="flex items-center text-gray-600">
                  <ToolIcon className="h-5 w-5 mr-1" />
                  <span>${tool.pricePerDay}/day</span>
                </div>
              </div>
              
              <p className="mt-2 text-gray-600">{tool.description}</p>
              
              {tool.promotion && (
                <div className="mt-3 bg-red-50 text-red-700 px-3 py-2 rounded-md">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {tool.promotion.discountPercentage}% off until{' '}
                      {format(new Date(tool.promotion.validUntil), 'MMM dd, yyyy')}
                    </span>
                  </div>
                </div>
              )}
              
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}