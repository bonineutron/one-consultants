import { FaWindowClose } from 'react-icons/fa';

type PropsModalAtom = {
  children: React.ReactNode;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalAtom({ children, closeModal }: PropsModalAtom) {
  return (
    <div className='absolute w-full h-full flex justify-center items-center bg-black/60 backdrop-blur-sm top-0 left-0 z-[2]'>
      <div className='w-[80%] bg-white rounded-lg lg:w-[500px]'>
        <div className='flex justify-end'>
          <FaWindowClose
            onClick={() => closeModal(false)}
            className='text-red-500 text-[40px] mr-4 my-3 hover:cursor-pointer'
          />
        </div>
        <div className='w-[80%] mb-10 mx-auto'>{children}</div>
      </div>
    </div>
  );
}
