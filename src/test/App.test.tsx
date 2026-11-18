import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";
import { projects, profile } from "@/content";

describe("App", () => {
  it("renders every project with its links", () => {
    render(<App />);
    for (const p of projects) {
      expect(screen.getByRole("heading", { level: 3, name: p.title })).toBeInTheDocument();
      if (p.code) expect(document.querySelector(`a[href="${p.code}"]`)).not.toBeNull();
    }
  });

  it("puts FinAdvisor first", () => {
    expect(projects[0].slug).toBe("finadvisor");
  });

  it("links the resume and email", () => {
    render(<App />);
    expect(document.querySelectorAll(`a[href="${profile.resume}"]`).length).toBeGreaterThan(0);
    expect(document.querySelector(`a[href="mailto:${profile.email}"]`)).not.toBeNull();
  });
});
