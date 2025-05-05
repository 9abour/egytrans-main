export interface SelectWithLabelProps {
  label: string;
  placeholder: string;
  required?: boolean;
  children: React.ReactNode;
  onChange: (value: string) => void;
  disabled?: boolean;
}
