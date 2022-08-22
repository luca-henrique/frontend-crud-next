import Client from '../core/Client';

interface TableProps {
  clients: Client[];
}

export default function Table({clients}: TableProps) {
  function renderHeaderTable() {
    return (
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
      </thead>
    );
  }

  function renderContentTable() {
    return clients?.map((client, index) => {
      return (
        <tbody key={client.id}>
          <tr>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.age}</td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <table>
      {renderHeaderTable()}

      {renderContentTable()}
    </table>
  );
}
