'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About DeepSeek " textStyle="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-black'
      >
        DeepSeek is <span className='font-extrabold text-[#3786fe]'>Revolutionary cryptocurrency</span>  inspired by the cutting-edge advancements of the 
        <span className='font-extrabold text-[#3786fe]'> DeepSeek AI project</span>. Built on the principles of innovation, decentralization, and empowerment, DeepSeek aims to redefine the digital economy by integrating blockchain technology with AI-driven solutions.

        Our mission is to create a 
        <span className='font-extrabold text-[#3786fe]'> decentralized financial ecosystem</span>, where individuals have 
        <span className='font-extrabold text-[#3786fe]'> complete control over their assets</span> and access to 
        <span className='font-extrabold text-[#3786fe]'> next-generation tools powered by AI</span>. DeepSeek symbolizes the fusion of advanced technology and financial freedom, driving a new era of possibilities in the crypto space.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
