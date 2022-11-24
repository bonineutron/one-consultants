import { useState, useEffect, useRef } from 'react';
import { MdMenu } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';

type PropsTopBarMolecule = {
  title: string;
};

export default function TopBarMolecule({ title }: PropsTopBarMolecule): JSX.Element {
  // settings
  const router = useRouter();
  const popUpRef = useRef<HTMLDivElement>(null);

  // states
  const [popUp, setPopUp] = useState<boolean>(false);

  // effects
  useEffect(() => {
    document.addEventListener('click', (event: MouseEvent) => {
      if (!popUpRef?.current?.contains(event.target as Node)) {
        setPopUp(false);
      }
    });
  });

  // refactor
  const applyColor = (path: string): string => {
    return `${
      router.pathname === path ? 'text-primary-color' : ''
    } min-w-fit border-b-[1px] border-gray-200 hover:text-gray-400`;
  };

  return (
    <nav className='fixed w-full z-[1] h-[60px] shadow-lg bg-white'>
      <ul className='relative w-[90%] h-full mx-auto flex justify-between items-center text-[18px] font-semibold md:w-[70%] lg:w-[900px] xl:w-[1200px]'>
        <h1 className='cursor-default text-primary-color'>{title}</h1>
        <div ref={popUpRef}>
          <MdMenu
            onClick={() => setPopUp((isOpen) => !isOpen)}
            className='text-[30px] hover:text-gray-400 hover:cursor-pointer'
          />
        </div>
        <div
          className={`${
            !popUp && 'hidden'
          } absolute py-6 px-6 flex flex-col gap-3 right-0 top-[80px] bg-white rounded-lg shadow-lg`}>
          <Link href='/'>
            <span className={applyColor('/')}>Crear Usuario</span>
          </Link>
          <Link href='/summary'>
            <span className={applyColor('/summary')}>Envío de Usuarios</span>
          </Link>
          <Link href='/user-list'>
            <span className={applyColor('/user-list')}>Usuarios Guardados</span>
          </Link>
        </div>
      </ul>
    </nav>
  );
}
