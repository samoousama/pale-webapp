export default function Button({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary",
  className = "", 
}) {
  const baseStyles = "rounded-full font-sora text-[16px] transform transition duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-lg";

  const variants = {
    primary: "bg-primary text-white hover:bg-secondary px-4 py-2",
    secondary: "bg-secondary text-white hover:bg-secondary px-4 py-2",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
