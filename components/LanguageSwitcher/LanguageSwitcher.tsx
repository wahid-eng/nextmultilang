"use client";
import { Link, usePathname } from "@/i18n/routing";
import React from "react";

export default function LanguageSwitcher() {
  const path = usePathname();
  return (
    <ul className="flex space-x-4 text-xs ml-4">
      <li>
        <Link href={path} locale="en">
          EN
        </Link>
      </li>
      <li>
        <Link href={path} locale="bn">
          BN
        </Link>
      </li>
    </ul>
  );
}
