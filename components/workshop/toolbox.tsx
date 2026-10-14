"use client";
import { useState } from "react";
import { cleanList, compareLists } from "@/lib/workshop";
function CopyButton({ value }: { value: string }) {
  const [status, setStatus] = useState("");
  return (
    <>
      <button
        className="work-button"
        disabled={!value}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setStatus("Copied to clipboard.");
          } catch {
            setStatus("Copy unavailable. Select and copy the result below.");
          }
        }}
      >
        Copy result ↗
      </button>
      <span className="copy-status" role="status">
        {status}
      </span>
    </>
  );
}
function Result({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="list-result">
      <h3>
        {label} <span>{items.length}</span>
      </h3>
      <textarea
        aria-label={`${label} result`}
        readOnly
        value={items.join("\n")}
        placeholder="No matching entries."
        rows={7}
      />
      <CopyButton key={items.join("\n")} value={items.join("\n")} />
    </div>
  );
}
export function Toolbox() {
  const [a, setA] = useState(""),
    [b, setB] = useState(""),
    [ignoreCase, setIgnoreCase] = useState(false);
  const [mode, setMode] = useState<"clean" | "compare">("clean");
  const [json, setJson] = useState(""),
    [output, setOutput] = useState(""),
    [message, setMessage] = useState(""),
    [invalid, setInvalid] = useState(false);
  const cleanedA = cleanList(a, ignoreCase),
    cleanedB = cleanList(b, ignoreCase);
  const compared = compareLists(cleanedA, cleanedB, ignoreCase);
  function format(compact = false) {
    try {
      if (!json.trim()) throw new Error("Paste some JSON first.");
      setOutput(
        JSON.stringify(JSON.parse(json), null, compact ? undefined : 2),
      );
      setMessage("Valid JSON. Ready to copy.");
      setInvalid(false);
    } catch (error) {
      setOutput("");
      setMessage(
        error instanceof Error ? error.message : "Unable to read this JSON.",
      );
      setInvalid(true);
    }
  }
  return (
    <div className="tool-stack">
      <section className="tool-panel" id="lists">
        <div className="panel-title">
          <span>01 / LIST WORKSHOP</span>
          <span>ONE ENTRY PER LINE</span>
        </div>
        <div className="tool-body">
          <h2>A tidier list. A clearer comparison.</h2>
          <p>
            Trim spaces, remove blank lines and keep the first occurrence of
            each entry.
          </p>
          <div className="tool-controls">
            <fieldset className="mode-choice">
              <legend className="sr-only">List operation</legend>
              <label>
                <input
                  type="radio"
                  name="list-mode"
                  checked={mode === "clean"}
                  onChange={() => setMode("clean")}
                />
                Clean a list
              </label>
              <label>
                <input
                  type="radio"
                  name="list-mode"
                  checked={mode === "compare"}
                  onChange={() => setMode("compare")}
                />
                Compare two lists
              </label>
            </fieldset>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={ignoreCase}
                onChange={(e) => setIgnoreCase(e.target.checked)}
              />
              Ignore letter case
            </label>
          </div>
          <div className={mode === "compare" ? "input-grid" : "single-input"}>
            <label className="input-label">
              List A
              <textarea
                value={a}
                onChange={(e) => setA(e.target.value)}
                placeholder={"Apple\n Pear \nApple\nOrange"}
                rows={8}
              />
            </label>
            {mode === "compare" ? (
              <label className="input-label">
                List B
                <textarea
                  value={b}
                  onChange={(e) => setB(e.target.value)}
                  placeholder={"Pear\nBanana\nOrange"}
                  rows={8}
                />
              </label>
            ) : null}
          </div>
          <div className="tool-actions">
            <button
              className="work-button"
              onClick={() => {
                setA("Apple\n Pear \nApple\nOrange");
                setB("Pear\nBanana\nOrange");
              }}
            >
              Load example
            </button>
            <button
              className="text-link"
              onClick={() => {
                setA("");
                setB("");
              }}
            >
              Clear inputs ×
            </button>
            <span className="eyebrow">RESULTS UPDATE AS YOU TYPE</span>
          </div>
          {mode === "clean" ? (
            <Result label="Cleaned list" items={cleanedA} />
          ) : (
            <div className="results-grid">
              <Result label="In both lists" items={compared.shared} />
              <Result label="Only in A" items={compared.onlyA} />
              <Result label="Only in B" items={compared.onlyB} />
            </div>
          )}
        </div>
      </section>
      <section className="tool-panel" id="json">
        <div className="panel-title">
          <span>02 / JSON WORKSHOP</span>
          <span>FORMAT / VALIDATE</span>
        </div>
        <div className="tool-body">
          <h2>Put those brackets in order.</h2>
          <p>
            Check standard JSON, then format it for reading or compact it for
            copying.
          </p>
          <div className="input-grid">
            <label className="input-label">
              Input
              <textarea
                spellCheck={false}
                value={json}
                onChange={(e) => {
                  setJson(e.target.value);
                  setOutput("");
                  setMessage("");
                  setInvalid(false);
                }}
                placeholder={'{"project":"CGRV","status":"tinkering"}'}
                rows={12}
                aria-invalid={invalid}
                aria-describedby="json-message"
              />
            </label>
            <label className="input-label">
              Result
              <textarea
                spellCheck={false}
                value={output}
                readOnly
                placeholder="Formatted JSON will appear here."
                rows={12}
              />
            </label>
          </div>
          <div className="tool-actions">
            <button
              className="work-button blue-button"
              onClick={() => format()}
            >
              Format JSON ↗
            </button>
            <button className="work-button" onClick={() => format(true)}>
              Compact
            </button>
            <button
              className="text-link"
              onClick={() => {
                setJson("");
                setOutput("");
                setMessage("");
                setInvalid(false);
              }}
            >
              Clear ×
            </button>
            <CopyButton key={output} value={output} />
          </div>
          <p
            id="json-message"
            className={invalid ? "tool-message error" : "tool-message"}
            role="status"
          >
            {message}
          </p>
          <p className="caption">
            Formatting uses JavaScript JSON parsing. Very large integers may
            lose precision. Comments and trailing commas are not valid JSON.
          </p>
        </div>
      </section>
    </div>
  );
}
