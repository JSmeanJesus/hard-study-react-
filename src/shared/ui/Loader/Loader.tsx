import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}
export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('', {}, [])}>
            <div className="lds-ring"><div>
            </div><div></div><div></div><div></div></div>
        </div>
    );
};