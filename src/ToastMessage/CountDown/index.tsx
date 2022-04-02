import { useEffect, useState } from 'react';
import './__.css';

interface ICountDownProps {
  countDownFrom: number;
}

export default function CountDown({ countDownFrom }: ICountDownProps) {
  const [countDown, setCountDown] = useState(countDownFrom);

  useEffect(() => {
    setCountDown(countDownFrom - 1);
  }, [countDownFrom]);

  useEffect(() => {
    if (countDown > 0)
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
  }, [countDown]);

  return <span className="count-down">{countDown}</span>;
}
