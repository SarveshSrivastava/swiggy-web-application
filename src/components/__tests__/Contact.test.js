import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Test cases for contact us page", () => {
  test("Contact Us Page heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("No.of Input elements in Contact Us Page", () => {
    render(<Contact />);
    const inputFields = screen.getAllByRole("textbox");
    expect(inputFields.length).toBe(2);
  });

  //use test or it both are same no difference just naming convention
  it("Contact Us Page button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
