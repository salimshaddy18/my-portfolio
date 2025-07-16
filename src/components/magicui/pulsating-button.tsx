import React from "react";
import { cn } from "../../lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = "#3b82f6", // lighter blue
      duration = "1.5s",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-center text-white overflow-hidden",
          className,
        )}
        style={
          {
            "--pulse-color": pulseColor,
            "--duration": duration,
          } as React.CSSProperties
        }
        {...props}
      >
        <span className="absolute left-1/2 top-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 rounded-full magicui-pulsating opacity-80 pointer-events-none" />
        <span className="relative z-10">{children}</span>
      </button>
    );
  },
);

PulsatingButton.displayName = "PulsatingButton";
