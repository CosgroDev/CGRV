"use client";
import { useFormStatus } from "react-dom";
export function Submit({
  children,
  name,
  value,
}: {
  children: React.ReactNode;
  name?: string;
  value?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      className="work-button blue-button"
      type="submit"
      disabled={pending}
      name={name}
      value={value}
    >
      {pending ? "Saving…" : children}
    </button>
  );
}
