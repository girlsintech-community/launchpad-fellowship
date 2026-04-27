import { motion } from "framer-motion";
import { type ElementType } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  staggerChildren?: number;
};

/**
 * Animates text by splitting it into words that fade & rise into place
 * when the element enters the viewport.
 */
export function SplitText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  staggerChildren = 0.06,
}: Props) {
  const words = text.split(" ");
  return (
    <Tag className={cn("inline-block", className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delayChildren: delay, staggerChildren }}
        className="inline"
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: { y: "0%", opacity: 1 },
              }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="inline-block will-change-transform"
            >
              {w}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
