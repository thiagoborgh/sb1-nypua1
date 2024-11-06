import React from 'react';
import { BarChart2, TrendingUp, DollarSign, Package } from 'lucide-react';

const MOCK_STATS = {
  totalRevenue: 1250,
  activeRentals: 3,
  completedRentals: 15,
  popularTools: [
    { name: 'Furadeira', rentals: 8, revenue: 200 },
    { name: 'Escada', rentals: 5, revenue: 75 },
  ],
};

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <BarChart2 className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Relatórios e Análises</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="text-gray-500">Receita Total</div>
            <DollarSign className="h-5 w-5 text-green-500" />
          </div>
          <div className="mt-2 text-3xl font-bold text-gray-900">
            R${MOCK_STATS.totalRevenue}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="text-gray-500">Aluguéis Ativos</div>
            <Package className="h-5 w-5 text-blue-500" />
          </div>
          <div className="mt-2 text-3xl font-bold text-gray-900">
            {MOCK_STATS.activeRentals}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="text-gray-500">Aluguéis Concluídos</div>
            <TrendingUp className="h-5 w-5 text-purple-500" />
          </div>
          <div className="mt-2 text-3xl font-bold text-gray-900">
            {MOCK_STATS.completedRentals}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Ferramentas Populares</h2>
          <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome da Ferramenta
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total de Aluguéis
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Receita
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {MOCK_STATS.popularTools.map((tool, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {tool.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tool.rentals}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      R${tool.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}