"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type HeroRevealContextValue = {
  /** True once the home hero video is ready (or off the home page). */
  revealed: boolean;
  reveal: () => void;
};

const HeroRevealContext = createContext<HeroRevealContextValue>({
  revealed: true,
  reveal: () => {},
});

export function HeroRevealProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [revealed, setRevealed] = useState(!isHome);

  useEffect(() => {
    setRevealed(pathname !== "/");
  }, [pathname]);

  const reveal = useCallback(() => {
    setRevealed(true);
  }, []);

  const value = useMemo(
    () => ({ revealed, reveal }),
    [revealed, reveal],
  );

  return (
    <HeroRevealContext.Provider value={value}>
      {children}
    </HeroRevealContext.Provider>
  );
}

export function useHeroReveal() {
  return useContext(HeroRevealContext);
}
