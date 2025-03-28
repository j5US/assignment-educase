import { Outlet } from "react-router";

function AppLayout(){
    return (
        <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center poppins-regular overflow-y-auto">
            <Outlet/>
        </div>
    );
}

export default AppLayout;
