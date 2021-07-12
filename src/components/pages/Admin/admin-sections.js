import ManageCategory from './ManageCategory';
import ManageCountry from './ManageCountry';
import ManageCity from './ManageCity';

export const getAdminSections = ({ categories, countries, cities }) => [
  { text: 'Home', link: '/' },
  { text: 'Categories', component: <ManageCategory categories={categories} /> },
  { text: 'Countries', component: <ManageCountry countries={countries}/> },
  { text: 'Cities', component: <ManageCity cities={cities} countries={countries} /> }
];