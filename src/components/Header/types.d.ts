export interface HeaderProps {
  navigation: {
    id:string
    name: string;
    to: string;
    current: boolean;
  }[];
  current:{id:string
    name: string;
    to: string;
    current: boolean;}[];
  onClose?: () => void;
  onCurrent?: (id: string) => void
  theme?:string | null
}