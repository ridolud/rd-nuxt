declare global {
  interface AppMenuItem {
    label: string;
    labelClass?: string;
    icon?: string;
    iconClass?: string;
    avatar?: any;
    to?: string;
    badge?: string;
    click?: () => void;
  }
}

export {};
