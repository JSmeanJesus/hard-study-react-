import React, { FC, useEffect } from 'react';
import cls from './DynamicModuleLoader$.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';


export type ReducerList = {
    [key in StateSchemaKey]?: Reducer;
}

export type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children: React.ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader:FC <DynamicModuleLoaderProps> = (props) => {

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    const {children, reducers, removeAfterUnmount} = props;

    useEffect(() => {

        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type:  `@@INIT ${name}`})
        })


        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({type: `@@DES ${name} `})
                })
            }
        }

        //eslint-disable-next-line
    }, [])


    return (
        <> 
            {children}
        </>
    );
};