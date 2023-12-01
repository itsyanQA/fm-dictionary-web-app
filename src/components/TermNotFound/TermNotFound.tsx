import React from "react";
import "./TermNotFound.scss";

export function TermNotFound() {
  return (
    <div className="term-not-found">
      <span className="term-not-found__sad-face">😕</span>
      <div className="term-not-found__typography-container">
        <h2 className="term-not-found__header">No Definitions Found</h2>
        <p className="term-not-found__description">
          Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to
          the web instead.
        </p>
      </div>
    </div>
  );
}
