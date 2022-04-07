import { ToastDemo } from './ToastDemo';
import ToastMessage from './ToastMessage';
import { useToast } from './ToastContextProvider';
import { ToastContextProvider } from './ToastContextProvider';
import './__.css';

export { ToastContextProvider, ToastMessage, ToastDemo, useToast };

export default function Toast({ justified }: { justified?: boolean }) {
  const { messages } = useToast();
  const className = `toast${justified ? ` toast--justified` : ''}`;

  return (
    <div {...{ className }}>
      {messages.map(
        ({ text, type, timeout }, key) =>
          text && <ToastMessage {...{ type, timeout, key, index: key }}>{text}</ToastMessage>,
      )}
    </div>
  );
}
