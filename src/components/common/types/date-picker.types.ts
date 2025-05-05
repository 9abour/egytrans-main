export interface DatePickerWithLabelProps {
  label: string;
  placeholder: string;
  required?: boolean;
  onChange: (date: Date) => void;
  date?: Date;
}
