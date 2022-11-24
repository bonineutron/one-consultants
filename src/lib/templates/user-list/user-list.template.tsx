import LayoutOrganism from '../../organisms/layout/layout.organism';
import { IUser } from '../../../shared/interfaces/users.interface';
import { useState, useEffect } from 'react';
import { BiError } from 'react-icons/bi';
import Link from 'next/link';

export default function UserListTemplate(): JSX.Element {
  //states
  const [users, setUsers] = useState<IUser[]>([]);

  // effects
  useEffect(() => {
    fetch('https://one-consultants-back.vercel.app/users/get-all/')
      .then((usersData) => usersData.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <LayoutOrganism title='Usuarios Guardados' metaName='description' content='users saved in database'>
      {users.length > 0 ? (
        <div className='flex flex-col gap-4 items-center mx-auto bg-white shadow-lg rounded-lg p-5 lg:w-[600px]'>
          {users.map((user: IUser, index: number) => (
            <div key={index} className='flex flex-col bg-secondary-color w-full rounded-lg px-4 py-2 text-white'>
              <div>
                <span className='font-bold'>Nombre:</span>
                <span> {user.name}</span>
              </div>
              <div>
                <span className='font-bold'>Apellido:</span>
                <span> {user.lastName}</span>
              </div>
              <div>
                <span className='font-bold'>Edad:</span>
                <span> {user.age}</span>
              </div>
              <div>
                <span className='font-bold'>Fecha de Nacimiento:</span>
                <span> {user.birth}</span>
              </div>
              <div>
                <span className='font-bold'>Profesión:</span>
                <span> {user.career}</span>
              </div>
              <div>
                <span className='font-bold'>Semestre:</span>
                <span> {user.semester}</span>
              </div>
              <div>
                <span className='font-bold'>Promedio:</span>
                <span> {user.promedio}</span>
              </div>
              <div>
                <span className='font-bold'>Universidad:</span>
                <span> {user.college}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col gap-4 items-center mx-auto bg-white shadow-lg rounded-lg p-5 lg:w-[600px]'>
          <div className='flex gap-1 items-center bg-red-500 p-1 px-2 text-white rounded-lg'>
            <BiError className='text-[20px]' />
            <span className='pb-[1px]'>No hay usuarios en Base de Datos</span>
          </div>
          <Link
            href='/'
            className='w-[160px] h-[40px] flex justify-center items-center rounded-lg text-white font-semibold text-[18px] bg-primary-color'>
            Crear un Usuario
          </Link>
        </div>
      )}
    </LayoutOrganism>
  );
}
