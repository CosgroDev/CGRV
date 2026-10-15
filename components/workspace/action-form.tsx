"use client";
import { useActionState } from "react";
import { mutate } from "@/app/workspace/actions";
export function ActionForm({
  children,
  className = "ws-form",
  confirm,
}: {
  children: React.ReactNode;
  className?: string;
  confirm?: string;
}) {
  const [state, action, pending] = useActionState(mutate, {});
  return (
    <form
      action={action}
      className={className}
      onSubmit={(event) => {
        if (confirm && !window.confirm(confirm)) event.preventDefault();
      }}
    >
      <fieldset disabled={pending}>{children}</fieldset>
      <div aria-live="polite">
        {state.error ? (
          <p className="ws-notice" role="alert">
            {state.error}
          </p>
        ) : state.success ? (
          <p className="ws-saved">{state.success}</p>
        ) : null}
      </div>
    </form>
  );
}
