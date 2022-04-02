import ToastMessage from './ToastMessage';
import { useToast } from './ToastContextProvider';
import './__.css';
import { useState } from 'react';

export default function Toast({ justified }: { justified?: boolean }) {
    const { messages } = useToast();
    const [isJustified, setIsJustified] = useState(justified);

    const className = `toast${isJustified ? ` toast--justified` : ''}`

    const toggleJustified = () => {
        setIsJustified(!isJustified)
    }

    return (
        <div {...{ className }} >
            <button {...{ onClick: toggleJustified }}>{isJustified ? 'Align Right' : 'Justify'}</button>
            {messages.map(({ text, type, timeout }, key) =>
                text &&
                <ToastMessage {...{ timeout, type, key }}>
                    {text}
                </ToastMessage>
            )}
        </ div>
    )
}
