'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Section1 = () => {
  return (
    <div className='bg-section-1 min-h-screen relative overflow-hidden'>
      <motion.div
        animate={{ x: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        className='flower-4 absolute top-[-52px] right-[-80px] bottom-0 left-0 h-72'
      />
      <div className='mt-[150%] mb-10 relative overflow-hidden'>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className='absolute top-0 right-9'
        >
          <Image src={'/assets/leaf-1.png'} alt='leaf' height={50} width={50} />
        </motion.div>
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className='absolute top-4 right-[-110px]'
        >
          <Image
            src={'/assets/flower-3.png'}
            alt='flower'
            height={200}
            width={200}
          />
        </motion.div>
        <h1 className='text-center mt-10 text-5xl text-green-950/60 '>
          Mustika
        </h1>
        <h1 className='text-center mt-2 text-5xl text-green-950/60 '>& Wira</h1>
        <div className='flex justify-center mt-4'>
          <div className='p-2 border w-[250px] border-yellow-500'>
            <p className='text-center text-2xl text-green-950/60 '>
              25 | 05 | 2022
            </p>
          </div>
        </div>
        <p className='text-center mt-2 text-sm text-green-950/60'>
          di mohon kehadiranya
        </p>
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        className='absolute top-[55%] left-10'
      >
        <Image src={'/assets/leaf-2.png'} alt='leaf' height={50} width={50} />
      </motion.div>
    </div>
  );
};

export default Section1;
