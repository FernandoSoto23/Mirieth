
export default function PanelContent({children} : {children: React.ReactNode}) {
  return (
    <div className='bg-white w-11/12 m-auto mt-5 rounded p-3'>
        { children }
    </div>
  )
}
