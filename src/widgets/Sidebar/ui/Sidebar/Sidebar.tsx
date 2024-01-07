import React, { useMemo, useState } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { SidebarItems } from '../SidebarItems/SidebarItems'

interface SidebarProps {
  className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const {t} = useTranslation();

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const itemList =  useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItems
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed])

    return (
        <div data-testid={'sidebar'}
            className={classNames(cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className])}
        >

            <Button
                size={SizeButton.XL}
                square
                theme={ThemeButton.INVERTED_BACKGROUND}
                className={cls.collapsedButton}
                data-testid='toggle-button'
                onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                   
                {itemList}

               
            </div>

            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.LangSwitcher} />
            </div>
        </div>
    );
}
