import styles from '../styles'

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#eff7fe]`}>
      <img 
        src={imgUrl}
        alt="icon"
        className='object-contain'
      />
      </div>
      <h1 className='mt-[22px] font-bold text-[24px] leading-[32px] text-[#64748b]'>{title}</h1>
      <p className='flex-1 mt-[16px] font-normal text-[15px] text-[#b0b0b0] leading-normal'>{subtitle}</p>
    
  </div>
);

export default NewFeatures;
