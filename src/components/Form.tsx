import {useState} from 'react';
import Client from '../core/Client';
import Input from './Input';

import Button from './Button';

interface FormProps {
  client?: Client;
}

export default function Form({client}: FormProps) {
  const id = client?.id;

  const [name, setName] = useState(client?.name || '');
  const [age, setAge] = useState(client?.age || 0);

  return (
    <div>
      {id && <Input text='Código' value={id} />}
      <Input text='Nome' value={name} onChange={setName} />
      <Input text='Idade' type='number' value={age} onChange={setAge} />

      <div className='flex mt-3 justify-end'>
        <Button color='blue' className='mr-2'>
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button>Cancelar</Button>
      </div>
    </div>
  );
}
