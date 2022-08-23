import {useState} from 'react';

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
  const [selecteClient, setSelecteClient] = useState({});
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  function selectedClient(client: Client) {
    setSelecteClient(client);
    setVisible('form');
  }

  function deleteClient(client: Client) {
    console.log(client);
  }

  function addNewClient(client: Client) {
    console.log(client);

    setVisible('table');
    setSelecteClient({});
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
      <Layout title='Cardastro simples'>
        {visible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button
                color='green'
                className='mb-4'
                onClick={() => setVisible('form')}
              >
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deleteClient={deleteClient}
            />
          </>
        ) : (
          <Form
            goBack={() => setVisible('table')}
            client={selecteClient}
            addNewClient={addNewClient}
          />
        )}
      </Layout>
    </div>
  );
}
