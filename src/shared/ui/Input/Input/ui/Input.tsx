import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Input.module.scss';


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {

    const {
        className, 
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if(autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus])

    const onBlur = () => {
        setIsFocused(false)
    }
    const onFocus = () => {
        setIsFocused(true)
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);

    }

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                {...otherProps}
            />
        </div>
    );
});