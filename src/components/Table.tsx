import Client from '../core/Client';

import {EditIcon, TrashIcon} from '../components/Icons';

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deleteClient?: (client: Client) => void;
}

export default function Table({
  clients,
  selectedClient,
  deleteClient,
}: TableProps) {
  function renderHeaderTable() {
    return (
      <thead className='bg-gradient-to-r from-purple-500 to-purple-600 text-gray-100 rounded-xl overflow-hidden'>
        <tr>
          <th className='text-left p-4'>Codigo</th>
          <th className='text-left p-4'>Nome</th>
          <th className='text-left p-4'>Idade</th>
          <th className=' p-4'>Ações</th>
        </tr>
      </thead>
    );
  }

  function renderContentTable() {
    return clients?.map((client, index) => {
      return (
        <tbody key={client.id}>
          <tr
            className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
          >
            <td className='text-left p-4'>{client.id}</td>
            <td className='text-left p-4'>{client.name}</td>
            <td className='text-left p-4'>{client.age}</td>
            {renderActions(client)}
          </tr>
        </tbody>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className='flex justify-center'>
        <button
          className='flex justify-center items-center text-green-500 rounded-full p-2 m-1 hover:bg-purple-50'
          onClick={() => selectedClient(client)}
        >
          <EditIcon />
        </button>
        <button
          className='flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50'
          onClick={() => deleteClient(client)}
        >
          <TrashIcon />
        </button>
      </td>
    );
  }

  return (
    <table className='w-full'>
      {renderHeaderTable()}

      {renderContentTable()}
    </table>
  );
}
