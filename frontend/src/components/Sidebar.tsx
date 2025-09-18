import { Logoicon } from "../Icons/Logoicon";
import { Twittericon } from "../Icons/Twittericon";
import { YoutubeIcon } from "../Icons/Youtubeicn";
import { Sidebaritem } from "./Sidebaritem";

export function SideBar(){
    return(
        <div className="h-screen bg-white text-black border-r w-60 fixed top-0 left-0">
            <div className="flex mt-2 pl-2 flex-wrap">
                <div className="flex justify-between gap-2">
                    <Logoicon />
                    <h2 className="pt-3 text-3xl font-semibold">MindVault</h2>
                </div>
                <div className="pt-4 pl-2">
                    <Sidebaritem text="Youtube" icn={<YoutubeIcon />} />
                    <Sidebaritem text='Twitter' icn={<Twittericon />} />
                </div>
            </div>
           
        </div>
    )
}