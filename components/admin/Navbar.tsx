import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ToggleTheme } from "../ToggleTheme";
import { Button } from "../ui/button";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  const routes = [
    {
      href: `/administrator`,
      label: "Overview",
      active: pathname === `/administrator`,
    },
    {
      href: `/administrator/nft`,
      label: "NFT's",
      active: pathname === `/administrator/nft`,
    },
    {
      href: `/administrator/user`,
      label: "User's",
      active: pathname === `/administrator/user`,
    },
  ];
  return (
    <nav className={"w-full flex items-center justify-between border-b p-4"}>
      <div className={"flex space-x-4 lg:space-x-6"}>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              " font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <ToggleTheme />
        <Button size="sm" variant="destructive">
          Logout
        </Button>
      </div>
    </nav>
  );
}
