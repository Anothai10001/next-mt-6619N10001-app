"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  BookOpen,
  Layers,
  Briefcase,
  Code2,
  MessageSquare,
} from "lucide-react";

const menus = [
  { href: "/", icon: Home },
  { href: "/about", icon: User },
  { href: "/eduexp", icon: BookOpen },
  { href: "/spec", icon: Layers },
  { href: "/projects", icon: Briefcase },
  { href: "/skills", icon: Code2 },
  { href: "/contactme", icon: MessageSquare },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center">
      {/* CONTAINER */}
      <div className="
flex flex-col items-center justify-center
gap-8
w-[60px] h-[499px]
rounded-full
bg-[#1d1c1d]
border border-[#757575]
">
        {menus.map((menu, index) => {
          const Icon = menu.icon;
          const active = pathname === menu.href;

          return (
            <Link key={index} href={menu.href}>
              <Icon
                size={35}
                className={`transition-all ${
                  active
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-orange-500"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}