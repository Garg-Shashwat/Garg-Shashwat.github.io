import type { ComponentType } from "react";

export type Tech = {
  name: string;
  icon: ComponentType<{ className?: string; title?: string }>;
};
