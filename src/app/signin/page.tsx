"use client"

import SignIn from "@/components/signin";
import { SignInType } from "@/utils/common/signinType";

export default function SignInPage() {
    const handleSubmit = async (formData: SignInType) => {
        console.log(formData);
        // API call
        return true;
    };
    return (
        <>
            <SignIn handleSubmitForm={handleSubmit} />
        </>
    );
};