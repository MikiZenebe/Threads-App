import Image from "next/image";
import Link from "next/link";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";

export default function Topbar() {
  return (
    <nav className="topbar">
      <Link className="flex items-center gap-4" href="/">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-black max-xs:hidden">Ethreads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}
