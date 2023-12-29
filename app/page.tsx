'use client';

import Section1 from '@/components/section-1';
import Section2 from '@/components/section-2';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const audio = new Audio('/assets/sound.mp3');

    const playAudio = () => {
      audio.play().catch((error) => {
        console.error('Error playing audio:', error.message);
      });
    };

    document.addEventListener('click', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      audio.pause();
    };
  }, []);

  return (
    <main className='max-w-[430px] relative mx-auto overflow-hidden'>
      <Section1 />
      <div className='relative'>
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className='absolute top-[-100px] right-0 left-[-100px] bottom-0 z-20'
        >
          <Image
            src={'/assets/flower-1.png'}
            alt='flower'
            width={350}
            height={350}
          />
        </motion.div>
      </div>
      <Section2 />
    </main>
  );
}
