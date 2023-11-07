import React, { useState } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid={'sidebar'}
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button 
                data-testid='toggle-button'
                onClick={onToggle}>Toggle</Button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.LangSwitcher} />
            </div>
        </div>
    );
}
