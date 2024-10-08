import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { AuthProviders } from "./auth-providers";

type Props = {
  // define your props here
};

export const Navbar = ({}: Props) => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map(({ href, key, text }) => (
            <Link href={href} key={key}>
              {text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            User photo
            {/* <ProfileMenu session={session} /> */}
            <Link href="/create-project">Share work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};
