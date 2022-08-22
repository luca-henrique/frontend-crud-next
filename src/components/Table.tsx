import Client from '../core/Client';

interface TableProps {
  clients: Client[];
}

export default function Table({clients}: TableProps) {
  function renderHeaderTable() {
    return (
      <thead className='bg-gradient-to-r from-purple-500 to-purple-600 text-gray-100 rounded-xl overflow-hidden'>
        <tr>
          <th className='text-left p-4'>Codigo</th>
          <th className='text-left p-4'>Nome</th>
          <th className='text-left p-4'>Idade</th>
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
          </tr>
        </tbody>
      );
    });
  }

  return (
    <table className='w-full'>
      {renderHeaderTable()}

      {renderContentTable()}
    </table>
  );
}
