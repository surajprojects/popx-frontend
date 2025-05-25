import Image from 'next/image';
import { UserDataType } from '@/utils/common/userDataType';
import { CameraIcon } from '@heroicons/react/24/solid'

export default function Profile({
    title = "Account Settings",
    userData = {
        username: "Marry Doe",
        email: "Marry@gmail.com",
        bio: "Lorem ipsum dolor sit amet, consetetur sadip scing elitr. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        pictureSrc: "cat_profile.jpg",
        pictureName: "cat profile picture",
    },
}: {
    title?: string,
    userData?: UserDataType,
}) {
    return (
        <>
            {/* Root Wrapper */}
            <div className="w-full h-full bg-[#f7f8f9]">
                {/* Title Container */}
                <div className="bg-white p-4 pt-6 shadow-md shadow-gray-200">
                    <h2 className="text-lg">{title}</h2>
                </div>
                {/* User Details */}
                <div className="p-6 flex">
                    {/* Profile Picture */}
                    <div className="w-20">
                        <Image
                            src={`/${userData.pictureSrc}`}
                            alt={userData.pictureName}
                            width={100}
                            height={100}
                            className="aspect-square object-cover rounded-full"
                        />
                        <button
                            type="button"
                            className="absolute translate-x-14 -translate-y-7 hover:cursor-pointer"
                        >
                            <CameraIcon className="h-6 w-6 p-1 rounded-full text-white bg-[#6c25ff]" />
                        </button>
                    </div>
                    {/* Name & Gmail */}
                    <div className="mx-5">
                        <p className="font-medium">{userData.username}</p>
                        <p className="text-sm">{userData.email}</p>
                    </div>
                </div>
                {/* Bio */}
                <div className="px-5">
                    <p className="text-sm capitalize">{userData.bio}</p>
                </div>
                {/* Empty Container */}
                <div className="bg-[#f7f8f9] border-b-2 border-t-2 border-dashed h-2/3 my-5">

                </div>
            </div>
        </>
    );
};