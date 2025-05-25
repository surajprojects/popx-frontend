"use client"

import SignUp from "@/components/signup";
import { SignUpType } from "@/utils/common/signupType";

export default function SignUpPage() {
    const handleSubmit = async (formData: SignUpType) => {
        console.log(formData);
        // API call
        return true;
    };

    return (
        <>
            <SignUp handleSubmitForm={handleSubmit} />
        </>
    );
};