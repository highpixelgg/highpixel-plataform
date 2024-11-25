import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  backHref: string;
};

export const GeneralHeader = ({ children, backHref }: Props) => {
  return (
    <header className="flex items-center gap-4 p-6">
      <Link
        className="flex size-12 items-center justify-center rounded-full border-2 border-[#3b3b3b]"
        href={backHref}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="size-6 text-white" />
      </Link>
      <div className="flex-1">{children}</div>
    </header>
  );
};
