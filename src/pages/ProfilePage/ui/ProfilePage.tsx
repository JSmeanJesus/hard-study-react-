import React, { useEffect } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './ProfilePage$.module.scss'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    Profile,
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

interface Props {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

export const ProfilePage = ({ className }: Props) => {
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData() as any)
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [])}>
                <ProfilePageHeader />
                <ProfileCard data={data} isLoading={isLoading} error={error} />
            </div>
        </DynamicModuleLoader>
    )
}
