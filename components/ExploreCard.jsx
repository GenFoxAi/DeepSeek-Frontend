'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 
      'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} 
      flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] 
      ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img 
      src={imgUrl}
      alt={title}
      className='absolute w-full h-full object-cover rounded-[24px] object-center'
    />
    
    {active !== id ? (
      <div className='absolute bottom-0 w-full h-full flex items-end justify-center p-4'>
        <h3 className='font-semibold sm:text-[26px] text-[18px] text-white text-center'>
          {title}
        </h3>
      </div>
    ) : (
      <div className='absolute bottom-0 p-8 flex flex-col justify-center w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
        {/* <a href='https://blockchainapp-4e293.web.app/' target='_blank'> */}
          <div className={`${styles.flexCenter} w-[120px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
            <img
              src='/play.png'
              alt='play'
              className='w-3/4 h-3/4 object-contain'
            />
          </div>
        {/* </a> */}
        <p className='font-bold text-[16px] leading-[20px] text-white uppercase text-center'>
          Say No More. Start Trading!
        </p>
        <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white text-center'>
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
