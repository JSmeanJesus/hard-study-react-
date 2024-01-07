import React, { memo } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/sun.svg'
import DarkIcon from 'shared/assets/icons/moon.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}
// eslint-disable-next-line react/display-name
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.Light ? <LightIcon /> : <LightIcon />}

            {/* //Add dark icon */}
            {/* {theme === Theme.Light ? <img src="shared/assets/icons/moon.svg" alt="light item icon" /> : <img src="" alt="dark item icon" /> } */}
        </Button>
    );
});
