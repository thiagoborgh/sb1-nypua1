export interface User {
  id: string;
  name: string;
  email: string;
  apartment: string;
  role: 'renter' | 'owner';
}

export interface Tool {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  imageUrl: string;
  pricePerDay: number;
  available: boolean;
  promotion?: {
    discountPercentage: number;
    validUntil: Date;
  };
}

export interface Rental {
  id: string;
  toolId: string;
  renterId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
}