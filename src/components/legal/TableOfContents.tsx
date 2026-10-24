'use client';

import React, { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -60% 0%', threshold: 0.1 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Document table of contents"
      className="p-5 bg-[#141619] border border-white/10 sticky top-28"
    >
      <div className="font-display font-bold text-xs uppercase tracking-widest text-[#FF4552] mb-3 pb-2 border-b border-white/5">
        Table of Contents
      </div>
      <ul className="space-y-2 text-xs font-medium">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block py-1 transition-colors ${
                activeId === item.id
                  ? 'text-[#E62935] font-semibold translate-x-1'
                  : 'text-[#A4A7AC] hover:text-[#F5F5F3]'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
