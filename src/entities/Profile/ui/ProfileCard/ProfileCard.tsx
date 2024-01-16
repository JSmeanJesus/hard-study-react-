import React from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/modle/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/modle/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/modle/selectors/getProfileIsLoading/getProfileIsLoading'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input/ui/Input'
import { Profile } from 'entities/Profile/modle/types/profile'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
}
export const ProfileCard = (props: ProfileCardProps) => {
    const { className, data, isLoading, error } = props

    if (isLoading) {
        return <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}></div>
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                title={'Error'}
                text={'Error profile card'}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [])}>
            <div className={cls.data}>
                <Input value={data?.first} placeholder="your name" className={cls.input} />
                <Input value={data?.lastname} placeholder="your lastname" className={cls.input} />
            </div>
        </div>
    )
}

//fix dosent work get value from input
