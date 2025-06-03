interface ButtonProps {
  className?: string;
  onClick?: () => void;
  variant?: keyof typeof buttons;
  children?: React.ReactNode;
}

export const AtomsButton = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const buttonClass = buttons[variant];
  return (
    <button
      className={`px-4 py-2 rounded-md hover:cursor-pointer ${buttonClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const buttons = {
  primary: "text-white bg-blue-500 hover:bg-blue-600",
  secondary: "text-white bg-gray-500 hover:bg-gray-600",
  destructive: "text-white bg-red-500 hover:bg-red-600",
  warning: "text-white bg-yellow-500 hover:bg-yellow-600",
  success: "text-white bg-green-500 hover:bg-green-600",
  outline: "border border-gray-400 text-gray-400 hover:bg-gray-100",
  link: "text-blue-500 hover:text-blue-600 hover:underline underline-offset-8",
};
