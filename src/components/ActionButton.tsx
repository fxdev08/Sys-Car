
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'white';
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  color = 'primary',
}) => {
  const colorClasses = {
    primary: 'bg-brand-red text-white hover:bg-red-700',
    secondary: 'bg-brand-gray-200 text-brand-gray-700 hover:bg-brand-gray-300',
    white: 'bg-white text-brand-gray-700 hover:bg-brand-gray-100 border border-brand-gray-200',
  };

  return (
    <button
      className={`${colorClasses[color]} rounded-lg p-4 flex flex-col items-center justify-center transition-colors w-full`}
      onClick={onClick}
    >
      <Icon size={28} strokeWidth={2} />
      <span className="mt-2 font-medium text-sm md:text-base">{label}</span>
    </button>
  );
};

export default ActionButton;
