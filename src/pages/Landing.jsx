import { useNavigate } from "react-router";
import Button from "../components/Button";

function Landing() {
    const navigate = useNavigate();
    return (
        <div className="w-full min-h-screen md:w-[400px] border-2 bg-white border-gray-200 flex flex-col justify-end p-6 py-12 space-y-6.5">
            <header className="poppins-regular space-y-1.5">
                <h1 className="text-[1.73rem] font-semibold">Welcome to PopX</h1>
                <small className="text-[1.1rem] font-medium text-slate-500/70 ">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, </small>
            </header>

            <p className="space-y-3">
                <Button onClick={() => navigate("/signup")} > Create Account </Button>
                <Button bgType="secondary" onClick={() => navigate("/signin")}>Already Registered? Login</Button>

            </p>

        </div>
    );
}

export default Landing;
