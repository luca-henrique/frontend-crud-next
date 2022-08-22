import Layout from '../components/Layout';
import Table from '../components/Table';

const clients = [
  {name: 'Lucas', age: 20, id: '1'},
  {name: 'Henrique', age: 28, id: '2'},
  {name: 'Patricia', age: 20, id: '3'},
  {name: 'Maria', age: 20, id: '4'},
];

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
      <Layout title='Cardastro simples'>
        <Table clients={clients} />
      </Layout>
    </div>
  );
}
