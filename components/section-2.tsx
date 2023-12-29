'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Section2 = () => {
  return (
    <div className='min-h-screen bg-section-2 relative overflow-hidden'>
      <div className='px-12 py-40'>
        <p className='text-xl text-center font-semibold italic text-yellow-600/70'>
          Assalamualaikum Wr. Wb.
        </p>
        <p className='text-center text-sm mt-3 text-green-950/60'>
          Tanpa mengurangi rasa hormat, Kami mengundang Bapak/Ibu/Saudara/i pada
          acara pernikahan kami:
        </p>
        <div className='relative'>
          <h1 className='text-center mt-10 text-5xl text-green-950/60 font-bold'>
            Mustika
          </h1>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className='absolute top-[-20px] right-0'
          >
            <Image
              src={'/assets/leaf-1.png'}
              alt='leaf'
              height={50}
              width={50}
            />
          </motion.div>
        </div>
        <p className='text-center text-sm text-green-950/60'>
          Putri dari Bpk Winarno & Ibu Julaikah
        </p>
        <p className='text-center my-4 text-4xl text-green-950/60 font-bold'>
          &
        </p>
        <div className='relative'>
          <h1 className='text-center  text-5xl text-green-950/60 font-bold'>
            Wira
          </h1>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className='absolute top-0 left-[-20px]'
          >
            <Image
              src={'/assets/leaf-1.png'}
              alt='leaf'
              height={50}
              width={50}
            />
          </motion.div>
        </div>
        <p className='text-center text-sm text-green-950/60'>
          Putri dari Bpk Winarno & Ibu Julaikah
        </p>
        <p className='text-xl mt-10 text-center font-semibold text-yellow-600/70'>
          QS. Ar-Rum Ayat 21
        </p>
        <p className='mt-2 text-center text-wrap text-sm text-green-950/60'>
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </p>
      </div>
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        className='absolute z-[-50px] left-[-100px] bottom-[-150px]'
      >
        <Image
          src={'/assets/flower-2.png'}
          alt='flower'
          width={400}
          height={400}
        />
      </motion.div>
    </div>
  );
};

export default Section2;
