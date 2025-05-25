"use client"

import { useRouter } from "next/navigation";
import { SignUpType } from "@/utils/common/signupType";
import InputField from "./form/inputField";
import { ChangeEvent, useState } from "react";
import RadioField from "./form/radioField";

export default function SignUp({
    title = "PopX",
    handleSubmitForm,
}: {
    title?: string,
    handleSubmitForm: (formData: SignUpType) => Promise<boolean>,
}) {
    const router = useRouter();
    const initialData = {
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        isAgency: "",
    };

    const [formData, setFormData] = useState<SignUpType>(initialData);

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
                {/* Title */}
                <div>
                    <h1 className="text-3xl font-semibold my-4 text-slate-800">
                        <div className="flex flex-col">
                            <span>Create your</span>
                            <span>{title} account</span>
                        </div>
                    </h1>
                </div>
                {/* SignUp Form */}
                <form
                    className="flex flex-col h-full justify-between"
                    onSubmit={async (evt) => {
                        evt.preventDefault();
                        const isSuccess = await handleSubmitForm(formData);
                        if (isSuccess) {
                            setFormData(initialData);
                            router.push("/profile");
                        }
                    }}>
                    {/* Fields Container */}
                    <div>
                        {/* Full Name */}
                        <InputField
                            fieldType="text"
                            fieldId="fullName"
                            fieldTitle="Full Name"
                            fieldPlaceholder="Enter full name"
                            fieldValue={formData.fullName}
                            onChangeFunc={handleChange}
                        />
                        {/* Phone number */}
                        <InputField
                            fieldType="text"
                            fieldId="phoneNumber"
                            fieldTitle="Phone number"
                            fieldPlaceholder="Enter phone number"
                            fieldValue={formData.phoneNumber}
                            onChangeFunc={handleChange}
                        />
                        {/* Email address */}
                        <InputField
                            fieldType="text"
                            fieldId="email"
                            fieldTitle="Email address"
                            fieldPlaceholder="Enter your email"
                            fieldValue={formData.email}
                            onChangeFunc={handleChange}
                        />
                        {/* Password */}
                        <InputField
                            fieldType="password"
                            fieldId="password"
                            fieldTitle="Password"
                            fieldPlaceholder="Enter password"
                            fieldValue={formData.password}
                            onChangeFunc={handleChange}
                        />
                        {/* Company name */}
                        <InputField
                            fieldType="text"
                            fieldId="companyName"
                            fieldTitle="Company name"
                            fieldPlaceholder="Enter company name"
                            isRequired={false}
                            fieldValue={formData.companyName}
                            onChangeFunc={handleChange}
                        />
                        {/* Agency */}
                        <div className="my-4">
                            {/* Title */}
                            <div className="mb-3">
                                <p className="text-sm">Are you an Agency?<span className="text-red-500">*</span></p>
                            </div>
                            {/* Radio Buttons */}
                            <div className="w-36 flex justify-between items-center">
                                {/* Radio Btn 1 */}
                                <RadioField
                                    fieldId="yes"
                                    fieldTitle="Yes"
                                    fieldUniqueId="isAgency"
                                    fieldValue={formData.isAgency}
                                    onChangeFunc={handleChange}
                                />
                                {/* Radio Btn 2 */}
                                <RadioField
                                    fieldId="no"
                                    fieldTitle="No"
                                    fieldUniqueId="isAgency"
                                    fieldValue={formData.isAgency}
                                    onChangeFunc={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Button's Container */}
                    <div>
                        <button
                            type="submit"
                            className="bg-[#6c25ff] w-full text-center text-white font-medium hover:cursor-pointer my-3 py-3 rounded-md"
                        >Create Account</button>
                    </div>
                </form>
            </div>
        </>
    );
}; 