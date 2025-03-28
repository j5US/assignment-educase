import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router";

function SignUp() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        console.log(data);
        navigate("/settings")
    };

    // Watch the input values to determine if the button should be enabled
    const fullName = watch("fullname");
    const phone = watch("phone");
    const email = watch("email");
    const password = watch("password");
    const agency = watch("agency");

    return (
        <div className="w-full min-h-screen p-6 py-12 space-y-3 bg-white flex flex-col md:w-[400px] border-2 border-gray-200">
            <header className="poppins-regular space-y-1.5">
                <h1 className="text-[1.73rem] font-semibold leading-[140%]">Create your <br /> PopX account</h1>
            </header>

            <form className="space-y-1.5 flex-1 flex flex-col h-[700px]" onSubmit={handleSubmit(onSubmit)}>
                <Input id="fullname" label="Full Name" fieldRequired={true} placeholder="Enter full name" inputState={register("fullname", { required: true })} />
                <Input id="phone" label="Phone number" fieldRequired={true} placeholder="Enter phone number" inputState={register("phone", { required: true })} />
                <Input id="email" label="Email address" fieldRequired={true} placeholder="Enter email address" inputState={register("email", { required: true })} />
                <Input id="password" type="password" label="Password" fieldRequired={true} placeholder="Enter password" inputState={register("password", { required: true })} />
                <Input id="company" label="Company name" placeholder="Enter company name" inputState={register("company")} />

                <div className="mt-2.5 poppins-regular text-gray-800 space-y-2">
                    <p className="font-medium">
                        Are you an agency? <span className="text-red-500">*</span>
                    </p>
                    <p className="space-x-6 flex flex-row">
                        <span className="flex items-center w-fit gap-3">
                            <input className="size-6 accent-[#6c25ff]" type="radio" id="anagency" {...register("agency", { required: true })} value="yes" />
                            <label htmlFor="anagency" className="font-medium">Yes</label>
                        </span>
                        <span className="flex items-center w-fit gap-3">
                            <input className="size-6 accent-[#6c25ff]" type="radio" id="notanagency" {...register("agency", { required: true })} value="no" />
                            <label htmlFor="notanagency" className="font-medium">No</label>
                        </span>
                    </p>
                </div>

                <div className="pt-10 mt-auto">

                    <Button
                        type="submit"
                        disabled={!fullName || !phone || !email || !password || !agency}
                    >
                        Create Account
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;