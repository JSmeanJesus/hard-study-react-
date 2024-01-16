import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/home.svg';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import cls from './SidebarItems.module.scss';

interface SidebarItemsProps {
    item?: SidebarItemType;
    collapsed?: boolean;
}
export const SidebarItems = ({ item, collapsed }: SidebarItemsProps) => {
    const { t } = useTranslation();

    if (item) {
        return (
            <AppLink
                className={classNames(
                    cls.item,
                    { [cls.collapsed]: collapsed },
                    [],
                )}
                theme={AppLinkTheme.INVERTED_SECONDARY}
                to={item.path}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{item.text}</span>
            </AppLink>
        );
    }
    return undefined;
};
