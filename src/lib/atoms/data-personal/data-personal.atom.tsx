import { IUser } from '../../../shared/interfaces/users.interface';
import { Fragment } from 'react';

type PropsDataPersonalAtom = {
  data: IUser;
  setData: React.Dispatch<React.SetStateAction<IUser>>;
};

export default function DataPersonalAtom({ data, setData }: PropsDataPersonalAtom) {
  return (
    <Fragment>
      <h2 className='font-semibold text-[20px] mb-4 text-secondary-color'>Datos Personales</h2>
      <div className='w-full'>
        <label className='text-secondary-color'>Nombre:</label>
        <input
          value={data.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, name: event.target.value })}
          type='text'
          name='name'
          placeholder='Nombre'
          className='w-full p-2 pl-6 mt-1 mb-4 bg-gray-100 rounded-lg outline-none'
        />
      </div>
      <div className='w-full'>
        <label className='text-secondary-color'>Apellido:</label>
        <input
          value={data.lastName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, lastName: event.target.value })}
          type='text'
          name='lastName'
          placeholder='Apellido'
          className='w-full p-2 pl-6 mt-1 mb-4 bg-gray-100 rounded-lg outline-none'
        />
      </div>
      <div className='w-full'>
        <label className='text-secondary-color'>Edad:</label>
        <input
          value={data.age || ''}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, age: Number(event.target.value) })
          }
          type='text'
          pattern='[0-9]*'
          name='age'
          placeholder='Edad'
          className='w-full p-2 pl-6 mt-1 mb-4 bg-gray-100 rounded-lg outline-none'
        />
      </div>
      <div className='w-full'>
        <label className='text-secondary-color'>Fecha de Nacimiento:</label>
        <input
          value={data.birth}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, birth: event.target.value })}
          type='date'
          name='birth'
          className='w-full p-2 pl-6 mt-1 bg-gray-100 rounded-lg outline-none uppercase'
        />
      </div>
    </Fragment>
  );
}
