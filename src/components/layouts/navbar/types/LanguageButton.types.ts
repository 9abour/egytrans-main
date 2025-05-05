import { ReactNode } from 'react';

export interface LanguageButtonProps {
  name: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
}
