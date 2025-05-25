"use client"

import { ChangeEvent } from "react";

export default function InputField({
    fieldType = "text",
    fieldId = "name",
    fieldTitle = "Enter Name",
    fieldPlaceholder = "Enter your name",
    isRequired = true,
    fieldValue,
    onChangeFunc,
}: {
    fieldType?: string,
    fieldId?: string,
    fieldTitle?: string,
    fieldPlaceholder?: string,
    isRequired?: boolean,
    fieldValue: string,
    onChangeFunc: (evt: ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <>
            <div>
                <label
                    htmlFor={fieldId}
                    className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3">
                    {fieldTitle}<span className="text-r">{isRequired && "*"}</span>
                </label>
                <input
                    type={fieldType}
                    id={fieldId}
                    name={fieldId}
                    placeholder={fieldPlaceholder}
                    value={fieldValue}
                    onChange={onChangeFunc}
                    required={isRequired}
                    className="border-2 rounded-lg w-full p-3 px-5 text-sm bg-[#f7f8f9]"
                />
            </div>
        </>
    );
};