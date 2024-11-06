import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench, Upload, DollarSign } from 'lucide-react';

export default function AddTool() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pricePerDay: '',
    imageUrl: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ferramenta adicionada:', formData);
    navigate('/my-tools');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Wrench className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Adicionar Nova Ferramenta</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome da Ferramenta
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input mt-1"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            required
            className="input mt-1"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="pricePerDay" className="block text-sm font-medium text-gray-700">
            Preço por Dia
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="pricePerDay"
              name="pricePerDay"
              required
              min="0"
              step="0.01"
              className="input pl-10"
              value={formData.pricePerDay}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            URL da Imagem
          </label>
          <div className="mt-1 flex items-center space-x-2">
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              required
              className="input"
              value={formData.imageUrl}
              onChange={handleChange}
            />
            <Upload className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => navigate('/my-tools')}
            className="btn btn-secondary flex-1"
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary flex-1">
            Adicionar Ferramenta
          </button>
        </div>
      </form>
    </div>
  );
}