"use client";

import { useState, useId, ReactNode } from "react";

type TabItem = {
  id?: string;
  title: string;
  panel: ReactNode;
};

export default function Tabs({ tabs }: { tabs: TabItem[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  // keyboard nav: left/right arrow, home/end
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") setActive((i) => (i + 1) % tabs.length);
    if (e.key === "ArrowLeft") setActive((i) => (i - 1 + tabs.length) % tabs.length);
    if (e.key === "Home") setActive(0);
    if (e.key === "End") setActive(tabs.length - 1);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Subject tabs"
        className="flex gap-2 border-b"
        onKeyDown={onKeyDown}
      >
        {tabs.map((t, i) => {
          const tabId = `${baseId}-tab-${i}`;
          const panelId = `${baseId}-panel-${i}`;
          const isActive = i === active;
          return (
            <button
              key={t.title}
              id={tabId}
              aria-controls={panelId}
              aria-selected={isActive}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-t-lg -mb-px focus:outline-none focus:ring-2 focus:ring-indigo-400
                ${isActive ? "bg-white text-indigo-700 border border-b-0" : "bg-indigo-50 text-gray-600 hover:bg-indigo-100"}`}
            >
              {t.title}
            </button>
          );
        })}
      </div>

      <div className="bg-white border p-6 rounded-b-lg">
        {tabs.map((t, i) => {
          const panelId = `${baseId}-panel-${i}`;
          const tabId = `${baseId}-tab-${i}`;
          return (
            <div
              key={t.title}
              id={panelId}
              role="tabpanel"
              aria-labelledby={tabId}
              hidden={i !== active}
            >
              {i === active && <div>{t.panel}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
