import {useState} from 'react';
import Client from '../core/Client';
import Input from './Input';

import Button from './Button';

interface FormProps {
  client?: Client;
  goBack?: () => void;
  addNewClient?: (client: any) => void;
}

export default function Form({client, goBack, addNewClient}: FormProps) {
  const id = client?.id;

  const [name, setName] = useState(client?.name || '');
  const [age, setAge] = useState(client?.age || 0);

  return (
    <div>
      {id && <Input text='Código' value={id} />}
      <Input text='Nome' value={name} onChange={setName} />
      <Input text='Idade' type='number' value={age} onChange={setAge} />

      <div className='flex mt-3 justify-end'>
        <Button
          color='blue'
          className='mr-2'
          onClick={() => addNewClient({name, age, id})}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={() => goBack()}>Cancelar</Button>
      </div>
    </div>
  );
}
