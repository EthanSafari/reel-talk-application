import { FC } from 'react';

interface TransitionButtonProps {
    label: string;
    isNext: boolean;
};

const TransitionButton: FC<TransitionButtonProps> = ({ label, isNext }) => {
    return (
        <button className={`w-2/6 py-3 mx-4 rounded ${isNext ? 'bg-[#6D6D6D]' : 'bg-transparent border border-solid border-white'}`}>
            {label}
        </button>
    )
};

export default TransitionButton;
