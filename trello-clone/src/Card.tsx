import { CardContainer } from "./styles";

interface CardProps {
  text: string;
  index: number;
}
// Drag Cards
export const Card = ({ text, index }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
