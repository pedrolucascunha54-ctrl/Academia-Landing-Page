import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "vsl-unlocked";

interface WatchGateValue {
  unlocked: boolean;
  unlock: () => void;
}

const WatchGateContext = createContext<WatchGateValue | null>(null);

export function WatchGateProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") setUnlocked(true);
  }, []);

  function unlock() {
    setUnlocked(true);
    localStorage.setItem(STORAGE_KEY, "true");
  }

  return (
    <WatchGateContext.Provider value={{ unlocked, unlock }}>
      {children}
    </WatchGateContext.Provider>
  );
}

export function useWatchGate() {
  const ctx = useContext(WatchGateContext);
  if (!ctx) throw new Error("useWatchGate must be used within WatchGateProvider");
  return ctx;
}
