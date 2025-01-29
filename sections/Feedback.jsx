'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#3786fe] relative'
      >
        <div className='feedback-gradient'/>
      
        <p className='mt-[24px] font-normal sm:text-[20px] text-[16px] sm:leading-[40px] leading-[39px] text-[#64748b]'>
          “With DeepSeek, we are reshaping the way value is created, shared, and exchanged in the digital world. By combining the power of AI and blockchain, we’re building a decentralized future where financial freedom and innovation belong to everyone—putting the control back where it truly belongs: in the hands of the people”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='relative flex-1 flex justify-center items-center'
      >
        <img 
          src='/background-2.gif'
          alt='background-image'
          className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className='lg:block hidden absolute -left-[10%] top-[3%]'
        >
          <img 
            src='/bnb.png'
            alt='bcstamp'
            className='w-[155px] h-[155px] object-contain'
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
