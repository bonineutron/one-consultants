import { IUser } from '../../../shared/interfaces/users.interface';
import { Fragment } from 'react';

type PropsDataAcademicAtom = {
  data: IUser;
  setData: React.Dispatch<React.SetStateAction<IUser>>;
};

export default function DataAcademicAtom({ data, setData }: PropsDataAcademicAtom) {
  return (
    <Fragment>
      <h2 className='font-semibold text-[20px] mb-4 text-secondary-color'>Datos Académicos</h2>
      <div className='w-full'>
        <label className='text-secondary-color'>Profesión:</label>
        <input
          value={data.career}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, career: event.target.value })}
          type='text'
          name='career'
          placeholder='Profesión'
          className='w-full p-2 pl-6 mt-1 mb-4 bg-gray-100 rounded-lg outline-none'
        />
      </div>
      <div className='w-full'>
        <label className='text-secondary-color'>Semestre:</label>
        <input
          value={data.semester || ''}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, semester: Number(event.target.value) })
          }
          type='text'
          name='semester'
          placeholder='Semestre'
          className='w-full p-2 pl-6 mt-1 mb-4 bg-gray-100 rounded-lg outline-none'
        />
      </div>
      <div className='w-full'>
        <label className='text-secondary-color'>Promedio:</label>
        <input
          value={data.promedio || ''}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, promedio: Number(event.target.value) })
          }
          type='text'
          pattern='[0-9]*'
          name='promedio'
          placeholder='Promedio'
          className='w-full p-2 pl-6 mt-1 mb-4 bg-gray-100 rounded-lg outline-none'
        />
      </div>
      <div className='w-full'>
        <label className='text-secondary-color'>Universidad:</label>
        <input
          value={data.college}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, college: event.target.value })}
          type='text'
          name='college'
          placeholder='Universidad'
          className='w-full p-2 pl-6 mt-1 bg-gray-100 rounded-lg outline-none'
        />
      </div>
    </Fragment>
  );
}
