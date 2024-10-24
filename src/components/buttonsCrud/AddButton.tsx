
type AddProps = {
  children: React.ReactNode;
  onClick: () => void;
}
export default function AddButton({ children, onClick }: AddProps) {
  return (
    <button
      onClick={onClick}
      className=" bg-blue-950 hover:bg-blue-900 text-white p-1 mb-2 rounded-lg flex items-center justify-center pr-2 pl-2"
    >
{
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>}
      <p className="text-sm uppercase font-extrabold">
        {children}
      </p>

    </button>
  )
}
