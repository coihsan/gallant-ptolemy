import Link from "next/link";
import { NAVIGATION } from "../../constant/data";

interface MobileProps {
  closeMenu: () => void;
}

const MobileNavigation = ({ closeMenu }: MobileProps) => (
  <div className="absolute top-20 left-0 grid gap-8 p-5 w-full  rounded-b-lg">
    <div className="grid gap-1 w-full backdrop-blur-lg bg-zinc-950 z-10">
      {NAVIGATION.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          className="group-hover:text-white NavHover flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="fill-white">{link.icon}</div>
          <span>{link.title}</span>
        </Link>
      ))}
    </div>
  </div>
);

export default MobileNavigation;
