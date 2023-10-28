import { FaPlus, FaTrashCan, FaUser } from "react-icons/fa6";
import { FiLogIn, FiLogOut, FiEdit2 } from "react-icons/fi";

type IconProps = {
  className?: string;
};

export const PlusIcon = ({ className }: IconProps) => {
  return <FaPlus className={className} />;
};

export const RemoveIcon = ({ className }: IconProps) => {
  return <FaTrashCan className={className} />;
};

export const UserIcon = ({ className }: IconProps) => {
  return <FaUser className={className} />;
};

export const LoginIcon = ({ className }: IconProps) => {
  return <FiLogIn className={className} />;
};

export const LogoutIcon = ({ className }: IconProps) => {
  return <FiLogOut className={className} />;
};

export const EditIcon = ({ className }: IconProps) => {
  return <FiEdit2 className={className} />;
};
