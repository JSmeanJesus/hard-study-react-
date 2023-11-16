import React, { FC, useEffect } from 'react';
import cls from './DynamicModuleLoader$.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

interface DynamicModuleLoaderProps {
    key: StateSchemaKey;
    reducer: Reducer;
}




export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;



    // const {children} = props;

    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);
        dispatch({type: '@@INITasassa'})

        return () => {
            
            store.reducerManager.remove('loginForm');
            dispatch({type: '@@DES'})

        }

        //eslint-disable-next-line
    }, [])


    return (
        <> 
            {/* {children} */}
        </>
    );
};