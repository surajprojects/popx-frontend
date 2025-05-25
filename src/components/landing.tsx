import Link from "next/link";

export default function LandingPage({
    title = "PopX",
    description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
}: {
    title?: string,
    description?: string,
}) {
    return (
        <>
            {/* Root Container */}
            <div className="w-full h-full p-5 flex flex-col justify-end bg-[#f7f8f9]">
                {/* Container 1 */}
                <div>
                    <h1 className="text-3xl font-semibold my-3 text-slate-800">Welcome to {title}</h1>
                    <p className="text-gray-500 my-3">{description}</p>
                </div>
                {/* Container 2 */}
                <div className="flex flex-col mt-6">
                    <Link href="/signup"
                        className="bg-[#6c25ff] text-center text-white font-medium hover:cursor-pointer my-1 py-3 rounded-md"
                    >
                        Create Account
                    </Link>
                    <Link href="/signin"
                        className="bg-[#cebafb] text-center text-black font-medium hover:cursor-pointer my-1 py-3 rounded-md"
                    >
                        Already Registered? Login
                    </Link>
                </div>
            </div>
        </>
    );
};