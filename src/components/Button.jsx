export default function Button ({ onClick , children}) {
    return( <button onClick={onClick} className=" bg-slate-900 hover:bg-sky-400 hover:text-gray-50 rounded text-xs px-1 py-1 w-20 vy-sm:w-24 vy-sm:h-8 md:text-base xl:w-20 ">
        {children}
    </button> )
}