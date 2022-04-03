import { useState } from 'react';
import { ToastDemo } from './ToastDemo';
import ToastMessage from './ToastMessage';
import { useToast } from './ToastContextProvider';
import { ToastContextProvider } from './ToastContextProvider';
import './__.css';

export { ToastContextProvider, ToastMessage, ToastDemo, useToast };

export default function Toast({ justified }: { justified?: boolean }) {
  const { messages } = useToast();
  const [isJustified, setIsJustified] = useState(justified);

  const className = `toast${isJustified ? ` toast--justified` : ''}`;

  const toggleJustified = () => {
    setIsJustified(!isJustified);
  };

  return (
    <div {...{ className }}>
      <button {...{ onClick: toggleJustified }}>{isJustified ? 'Align Right' : 'Justify'}</button>
      {messages.map(
        ({ text, type, timeout }, key) => text && <ToastMessage {...{ type, timeout, key }}>{text}</ToastMessage>,
      )}
    </div>
  );
}
