"use client";

import { useLayoutEffect, useRef, type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"textarea">;

function fit(element: HTMLTextAreaElement) {
  if (!element.getClientRects().length) return;
  element.style.height = "auto";
  const style = getComputedStyle(element);
  const borders = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
  element.style.height = `${element.scrollHeight + borders}px`;
}

export function AutoTextarea({ onInput, ...props }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    fit(element);
    let width = element.getBoundingClientRect().width;
    const observer = new ResizeObserver(() => {
      const nextWidth = element.getBoundingClientRect().width;
      if (nextWidth !== width) {
        width = nextWidth;
        fit(element);
      }
    });
    observer.observe(element);
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => fit(element));
    };
    const form = element.form;
    form?.addEventListener("reset", reset);
    return () => {
      observer.disconnect();
      form?.removeEventListener("reset", reset);
      cancelAnimationFrame(frame);
    };
  }, [props.defaultValue, props.value, props.rows]);

  return (
    <textarea
      {...props}
      ref={ref}
      onInput={(event) => {
        fit(event.currentTarget);
        onInput?.(event);
      }}
    />
  );
}
