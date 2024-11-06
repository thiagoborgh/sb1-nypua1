import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Plus, Edit2, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const MOCK_MY_TOOLS = [
  {
    id: '1',
    name: 'Furadeira',
    description: 'Furadeira profissional com múltiplos acessórios',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    pricePerDay: 25,
    available: true,
    totalRentals: 12,
    revenue: 300,
    promotion: {
      discountPercentage: 20,
      validUntil: new Date('2024-04-01'),
    },
  },
];

export default function MyTools() {
  const handleDelete = (id: string) => {
    console.log('Excluir ferramenta:', id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Minhas Ferramentas</h1>
        <Link to="/add-tool" className="btn btn-primary flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Adicionar Nova</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {MOCK_MY_TOOLS.map((tool) => (
          <div key={tool.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <img
                src={tool.imageUrl}
                alt={tool.name}
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                    <p className="mt-1 text-gray-600">{tool.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(tool.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="text-sm text-gray-500">Preço por dia</div>
                    <div className="text-lg font-semibold text-gray-900">
                      R${tool.pricePerDay}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="text-sm text-gray-500">Total de aluguéis</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {tool.totalRentals}
                    </div>
                  </div>
                </div>

                {tool.promotion && (
                  <div className="mt-4 bg-red-50 text-red-700 px-4 py-2 rounded-md">
                    <div className="flex items-center">
                      <Wrench className="h-4 w-4 mr-2" />
                      <span>
                        {tool.promotion.discountPercentage}% de desconto até{' '}
                        {format(new Date(tool.promotion.validUntil), "dd 'de' MMMM", { locale: ptBR })}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}