"use client"

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import InputField from "./form/inputField";
import { SignInType } from "@/utils/common/signinType";

export default function SignIn({
    title = "PopX",
    bio1 = "Lorem ipsum dolor sit amet,",
    bio2 = "consectetur adipisicing elit.",
    handleSubmitForm,
}: {
    title?: string,
    bio1?: string,
    bio2?: string,
    handleSubmitForm: (formData: SignInType) => Promise<boolean>,
}) {
    const router = useRouter();
    const initialData = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState<SignInType>(initialData);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const fieldName = evt.target.name;
        const changedValue = evt.target.value;
        setFormData((prevData) => {
            return {
                ...prevData,
                [fieldName]: changedValue
            }
        });
    };

    return (
        <>
            {/* Root Wrapper */}
            <div className="w-full h-full p-5 flex flex-col bg-[#f7f8f9]">
                {/* Title and Description */}
                <div>
                    <h1 className="text-3xl font-semibold my-3 text-slate-800">
                        <div className="flex flex-col">
                            <span>Signin to your</span>
                            <span>{title} account</span>
                        </div>
                    </h1>
                    <p className="text-gray-500 my-3 flex flex-col">
                        <span>{bio1}</span>
                        <span>{bio2}</span>
                    </p>
                </div>
                {/* SignIn Form */}
                <form
                    onSubmit={async (evt) => {
                        evt.preventDefault();
                        const isSuccess = await handleSubmitForm(formData);
                        if (isSuccess) {
                            setFormData(initialData);
                            router.push("/profile");
                        }

                    }}                >
                    {/* Username */}
                    <InputField
                        fieldType="email"
                        fieldId="email"
                        fieldTitle="Email Address"
                        fieldPlaceholder="Enter email address"
                        fieldValue={formData.email}
                        onChangeFunc={handleChange}
                        isRequired={false}
                    />
                    {/* Password */}
                    <InputField
                        fieldType="password"
                        fieldId="password"
                        fieldTitle="Password"
                        fieldPlaceholder="Enter password"
                        fieldValue={formData.password}
                        onChangeFunc={handleChange}
                        isRequired={false}
                    />
                    {/* Button */}
                    <button
                        type="submit"
                        className="bg-[#cbcbcb] w-full text-center text-white font-medium hover:cursor-pointer my-3 py-3 rounded-md"
                    >Login</button>
                </form>
            </div>
        </>
    );
}; 