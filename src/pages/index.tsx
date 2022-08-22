import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

const clients = [
  {name: 'Lucas', age: 20, id: '1'},
  {name: 'Henrique', age: 28, id: '2'},
  {name: 'Patricia', age: 20, id: '3'},
  {name: 'Maria', age: 20, id: '4'},
];

export default function Home() {
  function selectedClient(client: Client) {
    console.log(client);
  }

  function deleteClient(client: Client) {
    console.log(client);
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
      <Layout title='Cardastro simples'>
        <div className='flex justify-end'>
          <Button color='green' className='mb-4'>
            Novo Cliente
          </Button>
        </div>
        <Table
          clients={clients}
          selectedClient={selectedClient}
          deleteClient={deleteClient}
        />

        <Form />
      </Layout>
    </div>
  );
}
