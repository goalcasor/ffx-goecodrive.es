import Link from 'next/link';
import React, { useState } from 'react';

interface ModalProps {
    title: string;
    content: string;
    url: string;
}

const Modal: React.FC<ModalProps> = ({ title, content, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="text-gray-500 hover:underline focus:outline-none">{title}</button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          style={{
            backdropFilter: 'blur(5px)'
          }}
        >
          <div className="bg-black p-6 rounded-md max-w-md relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <button onClick={toggleModal} className=" text-green-600 hover:text-gray-800 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className=' text-white '>{content}</p>
            <Link href={`${url}`}>
                <span className='text-slate-200 p-1.5 absolute left-5 bottom-[-2rem]'>{`Ver más`}</span>
            </Link>
          </div>
         
        </div>
      )}
    </>
  ); 
}

export default Modal;
