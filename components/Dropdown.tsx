"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="inline-flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-bold"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`absolute left-0 mt-2 w-64 rounded-xl border bg-white shadow-xl p-2 transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
