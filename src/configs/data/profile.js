import uuid from 'react-native-uuid';

export const accounts = [
  {
    id: uuid.v4(),
    name: 'Profile',
    icon: 'user',
  },
  {
    id: uuid.v4(),
    name: 'Order',
    icon: 'inbox',
  },
  {
    id: uuid.v4(),
    name: 'Address',
    icon: 'enviromento',
  },
  {
    id: uuid.v4(),
    name: 'Payment',
    icon: 'creditcard',
  },
];
