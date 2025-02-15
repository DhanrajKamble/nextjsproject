export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            {children}
            <div>
                Made by XYZ Company
            </div>
        </>
    )
}