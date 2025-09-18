export function Input({onChange,placeholder,ref}:{placeholder:string;onChange?:()=>void;ref:any}){
    return(
        <div>
            <input ref={ref} placeholder={placeholder} type="text" className="px-4 py-2 border border-gray-300 rounded" onChange={onChange} />
        </div>
    )
}