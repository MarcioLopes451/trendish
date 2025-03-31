import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";

describe("Signup component", () => {
  it("create account for user", async () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    // get sign up inputs
    const firstNameInput = screen.getByPlaceholderText("John");
    const lastNameInput = screen.getByPlaceholderText("Doe");
    const usernameInput = screen.getByPlaceholderText("Unique name");
    const dobInput = screen.getByPlaceholderText("DOB");
    const emailInputs = screen.getByPlaceholderText("exmaple@gmail.com");
    const passwordInputs = screen.getByPlaceholderText("At least 8 characters");

    await userEvent.type(firstNameInput, "Alb");
    await userEvent.type(lastNameInput, "lambert");
    await userEvent.type(usernameInput, "albersir");
    await userEvent.type(dobInput, "26/03/2000");
    await userEvent.type(emailInputs, "alber@gmail.com");
    await userEvent.type(passwordInputs, "hello123");

    // get signup button
    const signupBtn = screen.getByText("Sign up");
    await userEvent.click(signupBtn);

    const successfulMsg = await waitFor(() =>
      screen.getByText("Sign up Successful! redirecting you to login page....")
    );

    expect(successfulMsg).toBeInTheDocument();
  });
});
