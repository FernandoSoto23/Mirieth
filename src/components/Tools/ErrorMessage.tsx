
export default function ErrorMessage({children}: { children: React.ReactNode}) {
  return (
    <p className="bg-red-500 p-2 text-white text-xl rounded-lg">
        {children}
    </p>
  )
}
