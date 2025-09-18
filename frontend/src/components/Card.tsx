import { Shareicon } from "../Icons/Shareicon"

interface CardProps{
    type:"youtube"|"tweet",
    title:string,
    link:string,
}

export const Card=(props:CardProps)=>{
    return(
        <div>
            <div className="p-2 bg-white text-black rounded-md shadow-md border border-gray-200 max-w-76">
                <div className="flex justify-between items-center">
                    <div className="flex font-bold">
                        {props.title}
                    </div>
                    <div className="flex space-x-3">
                        <a className=" font-extrabold cursor-pointer" href={props.link} target="_blank">
                            <Shareicon size="md" />
                        </a>
                    </div>
                </div>
                <div className="pt-3">
                    {props.type=="youtube"&&<iframe className="w-full" src={props.link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                    {props.type=="tweet"&&<blockquote className="twitter-tweet">
                        <a href="https://twitter.com/username/status/807811447862468608"></a>
                    </blockquote>}
                   
                   
                </div>  
            </div>
        </div>
        
    )
}