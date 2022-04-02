import CountDown from './CountDown';
import { IToastMessageProps } from '../intefaces';
import { useToastMessage } from './useToastMessage';
import './__.css';

export default function ToastMessage({ children, timeout, type }: IToastMessageProps) {
  const { visible, className, slideAway, countDownFrom } = useToastMessage({ timeout, type });

  return (
    <>
      {visible && (
        <button {...{ className, onClick: slideAway }}>
          {timeout && <CountDown {...{ countDownFrom }} />} {children}
        </button>
      )}
    </>
  );
}
