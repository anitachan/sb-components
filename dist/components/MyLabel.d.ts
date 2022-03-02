/// <reference types="react" />
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
    /**
     * Personalized font color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: Props) => JSX.Element;
