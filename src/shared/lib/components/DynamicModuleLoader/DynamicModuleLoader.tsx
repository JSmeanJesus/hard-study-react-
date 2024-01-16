import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import cls from './DynamicModuleLoader$.module.scss';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer;
};

export type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    const { children, reducers, removeAfterUnmount } = props;

    // @ts-nocheck
    // useEffect(() => {
    //     Object.entries(reducers).forEach(
    //         @
    //         ([name, reducer]: ReducerListEntry) => {
    //             store.reducerManager.add(name, reducer);
    //             dispatch({ type: `@@INIT ${name}` });
    //         },
    //     );

    //     return () => {
    //         if (removeAfterUnmount) {
    //             Object.entries(reducers).forEach(
    //                 ([name, reducer]: ReducerListEntry) => {
    //                     store.reducerManager.remove(name);
    //                     dispatch({ type: `@@DES ${name} ` });
    //                 },
    //             );
    //         }
    //     };
    // }, []);

    return <div> {children}</div>;
};
