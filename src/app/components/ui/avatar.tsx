import { Avatar, Badge } from "@nextui-org/react";

interface Props {
  isBorded?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning";
  src: string;
  size?: "lg" | "sm" | "md";
  className?: string;
}

export const AvatarUser = ({
  isBorded,
  color,
  src,
  size,
  className,
}: Props) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        isBordered={isBorded}
        color={color}
        src={src}
        size={size}
        className={className}
      />
    </div>
  );
};

export const AvatarStatus = ({ color, src }: Props) => {
  return (
    <Badge color={color} content="" placement="bottom-right" shape="circle">
      <Avatar radius="full" src={src} />
    </Badge>
  );
};

