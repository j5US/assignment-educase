import { User } from "lucide-react";
import { FaCamera } from "react-icons/fa";
function Settings() {
    return (
        <div className="w-full min-h-screen pb-11 bg-gray-100 flex flex-col md:w-[400px] border-2 border-gray-200">
            <header className="bg-white pt-7 pb-5 px-5 poppins-regular shadow-lg shadow-gray-100 ">
                <h1 className="text-xl font-medium text-gray-700">Account Settings</h1>
            </header>

            <div className="py-6 px-5 poppins-regular text-gray-700 space-y-7 border-b-2 border-dashed border-slate-300 ">
                <div className="flex gap-6 mt-2">
                    <span className="size-20 flex rounded-full bg-slate-300 relative">
                        <User className="size-[60%] m-auto text-slate-500" />
                        <span className="absolute bottom-1 right-[-0.1rem] rounded-full size-6 p-1 flex bg-[#6c25ff]">
                            <FaCamera className="text-white h-4 w-4 m-auto"/>
                        </span>
                    </span>
                    <p> <strong className="font-semibold">Marry Doe</strong> <br /> Marry@Gmail.com</p>
                </div>

                <p className="font-sans font-medium tracking-tight text-gray-600">
                    Lorem Ipsum Dolor Sit Amet, Consetetur sadipscing Elitr, Sed Diam Nonumy eirmod Tempor invidunt ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>

            <div className="border-b-2 border-dashed border-gray-300 flex-1" />
        </div>
    );
}

export default Settings;
