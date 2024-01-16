// testing components
import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button } from 'shared/ui/Button/Button';

interface ErrorButtonProps {
    className?: string;
}

export const ErrorButton = ({ className }: ErrorButtonProps) => {
    const [error, setError] = useState(false);
    const throwError = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error('Error');
        }
    }, [error]);

    return (
        <Button onClick={throwError} className={classNames('', {}, [])}>
            throw error
        </Button>
    );
};
