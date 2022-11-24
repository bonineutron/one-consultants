import DataAcademicAtom from '../../atoms/data-academic/data-academic.atom';
import DataPersonalAtom from '../../atoms/data-personal/data-personal.atom';
import { IUser } from '../../../shared/interfaces/users.interface';
import { addUser } from '../../../shared/redux/slices/users.slice';
import ModalAtom from '../../atoms/modal/modal.atom';
import { RiSave3Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { BiError } from 'react-icons/bi';
import { useState } from 'react';
import Link from 'next/link';

export default function UserFormMolecule() {
  // settings
  const dispatch = useDispatch();

  // states
  const [step, setStep] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUser>({
    name: '',
    lastName: '',
    college: '',
    career: '',
    birth: '',
    semester: 0,
    promedio: 0,
    age: 0
  });

  // methods
  const validationDataStepOne = (): void => {
    if (!userData.name) return setError('Ingresa un Nombre');
    if (!userData.lastName) return setError('Ingresa un Apellido');
    if (!userData.age) return setError('Ingresa una Edad');
    if (!userData.birth) return setError('Ingresa una Fecha de Nacimiento');
    setStep(2);
    setError('');
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!userData.career) return setError('Ingresa una Profesión');
    if (!userData.semester) return setError('Ingresa un Semestre');
    if (!userData.promedio) return setError('Ingresa un Promedio');
    if (!userData.college) return setError('Ingresa Una Universidad');
    dispatch(addUser(userData));
    setError('');
    setModal(true);
  };
  const newUser = () => {
    setUserData({
      name: '',
      lastName: '',
      college: '',
      career: '',
      birth: '',
      semester: 0,
      promedio: 0,
      age: 0
    });
    setStep(1);
    setModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center mx-auto bg-white shadow-lg rounded-lg p-5 lg:w-[600px]'>
      {step === 1 && <DataPersonalAtom data={userData} setData={setUserData} />}
      {step === 2 && <DataAcademicAtom data={userData} setData={setUserData} />}
      {step === 1 && (
        <div
          className={`w-full flex flex-col sm:flex-row ${
            error ? 'justify-between' : 'justify-center'
          } gap-2 items-center mt-5`}>
          {error && (
            <div className='flex gap-1 items-center bg-red-500 p-1 px-2 text-white rounded-lg'>
              <BiError className='text-[20px]' />
              <span className='pb-[1px]'>{error}</span>
            </div>
          )}
          <button
            type='button'
            onClick={() => validationDataStepOne()}
            className='w-[140px] h-[40px] rounded-lg text-white font-semibold text-[18px] bg-primary-color'>
            Siguiente
          </button>
        </div>
      )}
      {step === 2 && (
        <div
          className={`w-full flex flex-col sm:flex-row ${
            error ? 'justify-between' : 'justify-center'
          } gap-2 items-center mt-5`}>
          {error && (
            <div className='flex gap-1 items-center bg-red-500 p-1 px-2 text-white rounded-lg'>
              <BiError className='text-[20px]' />
              <span className='pb-[1px]'>{error}</span>
            </div>
          )}
          <button
            type='submit'
            className='w-[140px] h-[40px] rounded-lg text-white font-semibold text-[18px] bg-primary-color'>
            Agregar
          </button>
        </div>
      )}
      {modal && (
        <ModalAtom
          closeModal={setModal}
          children={
            <div className='w-full'>
              <div className='flex flex-col items-center text-center'>
                <RiSave3Fill className='text-[70px]' />
                <span className='text-[20px] font-semibold'>Usuario agregado al resumen</span>
              </div>
              <div className='flex justify-between mt-6'>
                <button
                  onClick={() => newUser()}
                  className='w-[140px] h-[40px] rounded-lg text-white font-semibold text-[18px] bg-secondary-color'>
                  Agregar Otro
                </button>
                <Link
                  href='/summary'
                  className='w-[140px] h-[40px] flex justify-center items-center rounded-lg text-white font-semibold text-[18px] bg-primary-color'>
                  Ir a Resumen
                </Link>
              </div>
            </div>
          }
        />
      )}
    </form>
  );
}
