function Button({ bgType = "primary", className="", children, ...props }) {
    const bg = bgType === "primary" ? "bg-[#6c25ff] text-gray-100" : "bg-[#cebafb] text-gray-900"
    return (
        <button className={`cursor-pointer disabled:bg-slate-300 w-full rounded-lg py-[0.8rem] text-md font-semibold ${bg} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
