import ManageCategory from './ManageCategory';
import ManageCountry from './ManageCountry';
import ManageCity from './ManageCity';

export const adminSections = [
  { text: 'Home', link: '/' },
  { text: 'Categories', component: <ManageCategory />},
  { text: 'Countries', component: <ManageCountry /> },
  { text: 'Cities', component: <ManageCity /> }
];