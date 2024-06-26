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

export const profiles = [
  {
    id: uuid.v4(),
    name: 'Gender',
    icon: 'woman',
  },
  {
    id: uuid.v4(),
    name: 'Birthday',
    icon: 'calendar',
  },
  {
    id: uuid.v4(),
    name: 'Email',
    icon: 'mail',
  },
  {
    id: uuid.v4(),
    name: 'Phone number',
    icon: 'mobile1',
  },
  {
    id: uuid.v4(),
    name: 'Change password',
    icon: 'lock',
  },
];
