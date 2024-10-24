
type HeaderTitleProps = {
    children: React.ReactNode,
}
export default function HeaderTitle({ children}: HeaderTitleProps) {
    return (
        <h2
            className="text-2xl uppercase text-slate-500 font-extrabold flex items-center gap-2"
        >
            {children}
        </h2>
    )
}
