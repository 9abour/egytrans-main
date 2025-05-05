export interface ButtonTextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  internal?: boolean;
}
