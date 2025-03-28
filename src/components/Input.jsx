function Input({ label, placeholder, id, inputState, type = "text", fieldRequired = false }) {
    return (
        <div className="flex flex-col w-full ">
            <label htmlFor={id} className="bg-white text-md rounded-full text-[#a57cfc] font-semibold relative top-2.5 left-1.5 ml-1 px-1 w-36">
                {label} {fieldRequired && <span className="text-red-500">*</span>}
            </label>
            <input
                {...inputState}
                type={type} // Use the type prop
                id={id}
                placeholder={placeholder}
                className="placeholder:text-slate-400 text-gray-600 font-semibold p-3 text-md border-2 border-slate-300 rounded-lg focus:outline-none"
            />
        </div>
    );
}

export default Input;
