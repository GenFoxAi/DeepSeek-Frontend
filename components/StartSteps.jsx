import styles from '../styles'

const StartSteps = ({ number, heading, description }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#eff7fe]`}>
      <p className="font-bold text-[20px] text-[#3786fe]">0{number}</p>
    </div>
    <div className="flex-1 ml-[30px]">
      <h3 className="font-bold text-[20px] text-[#0f172a]">{heading}</h3>
      <p className="font-normal text-[18px] text-[#64748b] leading-[32px]">
        {description}
      </p>
    </div>
  </div>
);

export default StartSteps;