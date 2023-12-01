import { FC } from 'react';
import TransitionButton from './transition-button';

const TransitionButtons: FC = () => {
    return (
        <div className={`bg-stone-800 flex items-center justify-center w-screen pb-10 pt-14`}>
            <TransitionButton label='Back' isNext={false} />
            <TransitionButton label='Next' isNext={true} />
        </div>
    )
};

export default TransitionButtons;
