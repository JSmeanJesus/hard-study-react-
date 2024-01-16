import React from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'

interface ProfilePageHeaderProps {
    className?: string
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text title={'Profile card!'} />
                <Button className={cls.editBtn}>Change</Button>
            </div>
        </div>
    )
}
