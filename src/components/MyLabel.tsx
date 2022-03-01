import "./MyLabel.css";

export interface Props {
  /**
   * This is the message to show in the label
   */
  label: string;
  /**
   * This is the size of the label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * True if all the letters will be capitalized
   */
  allCaps?: boolean;
  /**
   * Basic colors of the label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Personalized font color 
   */
   fontColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor
}: Props) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }} >
      { allCaps ? label.toLocaleUpperCase() :  label}
    </span>
  );
};
