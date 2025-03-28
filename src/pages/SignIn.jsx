import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router";

function SignIn() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        console.log(data);
        navigate("/settings")
    };

    // Watch the input values
    const email = watch("email");
    const password = watch("password");

    return (
        <div className="w-full min-h-screen p-6 py-12 space-y-3 md:w-[400px] border-2 border-gray-200 bg-white">
            <header className="poppins-regular space-y-1.5">
                <h1 className="text-[1.73rem] font-semibold leading-[140%]">Signin to your <br /> PopX account</h1>
                <small className="text-[1.1rem] font-medium text-slate-500/70 ">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, </small>
            </header>

            <form className="space-y-1.5" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="email"
                    label="Email Address"
                    placeholder="Enter email address"
                    inputState={register("email", { required: true })}
                />
                <Input
                    id="password"
                    label="Password"
                    placeholder="Enter password"
                    inputState={register("password", { required: true })}
                    type="password" // Pass type as a prop
                />

                <Button type="submit" className="mt-3" disabled={!email || !password}>
                    Login
                </Button>
            </form>
        </div>
    );
}

export default SignIn;