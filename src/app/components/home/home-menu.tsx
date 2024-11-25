import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "@/app/components/ui/logo";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { SearchInput } from "@/app/components/timeline/search-input";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "../nav/nav-item";
import { NavLogout } from "../nav/nav-logout";

type Props = {
  closeAction: () => void;
};

export const HomeMenu = ({ closeAction }: Props) => {
  return (
    <div className="fixed inset-0 bg-black p-6 lg:hidden">
      <div className="flex items-center justify-between">
        <Logo size={32} />
        <div
          onClick={closeAction}
          className="flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-gray-900"
        >
          <FontAwesomeIcon icon={faXmark} className="size-6" />
        </div>
      </div>
      <div className="my-6">
        <SearchInput />
      </div>
      <div className="">
        <NavItem href="/home" icon={faHouse} label="Página Inicial" />
        <NavItem href="/profile" icon={faUser} label="Meu Perfil" />
        <NavLogout />
      </div>
    </div>
  );
};
