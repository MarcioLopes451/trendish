import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import Login from "../../pages/Login/Login";
import Homepage from "../../pages/Homepage/Homepage";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

describe("Login Page", () => {
  it("logging into homepage", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </MemoryRouter>
    );
    // get email & password inputs

    const emailInputs = screen.getByPlaceholderText("Example@email.com");
    const passwordInputs = screen.getByPlaceholderText("At least 8 characters");
    expect(emailInputs).toBeInTheDocument();
    expect(passwordInputs).toBeInTheDocument();

    await userEvent.type(emailInputs, "exam@mail.com");
    await userEvent.type(passwordInputs, "hello123");
    expect(emailInputs).toHaveValue("exam@mail.com");
    expect(passwordInputs).toHaveValue("hello123");

    // get sign in button

    const signinBtn = screen.getByText("Sign in");
    expect(signinBtn).toBeInTheDocument();

    await userEvent.click(signinBtn);

    const successfulMsg = await waitFor(() =>
      screen.getByText("Sign in Successful! redirecting you to homepage...")
    );

    expect(successfulMsg).toBeInTheDocument();
  });
});
