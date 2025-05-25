export default function MobileView({
    children,
}: Readonly<{
    children: React.ReactNode;
}>
) {
    return (
        <>
            {/* Root Wrapper */}
            <div className="w-[430px] h-full border border-gray-300">
                {children}
            </div>
        </>
    );
};