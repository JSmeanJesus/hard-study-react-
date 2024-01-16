import React from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./PageLoader.module.scss";
import { Loader } from "../Loader/Loader";

interface PageLoaderProps {
    className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [])}>
        <Loader />
    </div>
);
