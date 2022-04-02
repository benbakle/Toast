import { useEffect, useState } from "react";
import './__.css';

interface ICountDownProps {
    countDownFrom: number;
}

export default function CountDown({ countDownFrom: from }: ICountDownProps) {
    const [countDown, setCountDown] = useState(from);

    useEffect(() => {
        setCountDown(from - 1);
    }, [from])

    useEffect(() => {
        if (countDown > 0)
            setTimeout(() => {
                setCountDown(countDown - 1)
            }, 1000)
    }, [countDown])

    return <span className='count-down'>{countDown}</span>
}