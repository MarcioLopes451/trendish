import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "../App";

describe("testing components", () => {
  it("app component", () => {
    render(<App />);
    expect(screen.getByText("hello trendish :)")).toBeInTheDocument();
    screen.debug();
  });
});
