export type ButtonType = {
  bgColor?: string;
  color?: string;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  width?: string;
  onClick: () => void;
  children: IntrinsicAttributes & ButtonType;
};
