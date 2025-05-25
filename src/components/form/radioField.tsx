"use client"

import { ChangeEvent } from "react";

export default function RadioField({
    fieldId = "name",
    fieldUniqueId = "isAgency",
    fieldTitle = "Enter Name",
    fieldValue,
    onChangeFunc,
}: {
    fieldUniqueId?: string,
    fieldId?: string,
    fieldTitle?: string,
    fieldValue: string,
    onChangeFunc: (evt: ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <>
            <input
                type="radio"
                id={fieldId}
                name={fieldUniqueId}
                value={fieldId}
                checked={fieldValue === fieldId}
                onChange={onChangeFunc}
                className="size-5 accent-[#6c25ff]"
            />
            <label htmlFor={fieldId} className="text-sm">{fieldTitle}</label>
        </>
    );
};