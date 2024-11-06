import React from 'react';
import { Calendar, Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const MOCK_RENTALS = [
  {
    id: '1',
    tool: {
      name: 'Furadeira',
      imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    },
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-03-17'),
    totalPrice: 50,
    status: 'active',
  },
  {
    id: '2',
    tool: {
      name: 'Escada',
      imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80',
    },
    startDate: new Date('2024-03-10'),
    endDate: new Date('2024-03-11'),
    totalPrice: 15,
    status: 'completed',
  },
];

const getStatusText = (status: string) => {
  switch (status) {
    case 'active':
      return 'Ativo';
    case 'completed':
      return 'Concluído';
    case 'cancelled':
      return 'Cancelado';
    default:
      return status;
  }
};

export default function MyRentals() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Meus Aluguéis</h1>

      <div className="grid grid-cols-1 gap-6">
        {MOCK_RENTALS.map((rental) => (
          <div key={rental.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <img
                src={rental.tool.imageUrl}
                alt={rental.tool.name}
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {rental.tool.name}
                    </h3>
                    <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {format(new Date(rental.startDate), "dd 'de' MMM", { locale: ptBR })} -{' '}
                          {format(new Date(rental.endDate), "dd 'de' MMM',' yyyy", { locale: ptBR })}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Package className="h-4 w-4 mr-1" />
                        <span>R${rental.totalPrice}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(rental.status)}
                    <span className="capitalize text-sm font-medium">
                      {getStatusText(rental.status)}
                    </span>
                  </div>
                </div>

                {rental.status === 'active' && (
                  <button className="mt-4 btn btn-secondary">
                    Devolver Ferramenta
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}