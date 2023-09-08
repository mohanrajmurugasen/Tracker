import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../index";

describe("Counter", () => {
  test("Increment", () => {
    render(<Home />);

    const counter = screen.getByTestId("counter");
    const increment = screen.getByTestId("increment");

    fireEvent.click(increment);

    expect(counter).toHaveTextContent("Counter: 1");
  });

  test("Decrement", () => {
    render(<Home />);

    const counter = screen.getByTestId("counter");
    const decrement = screen.getByTestId("decrement");

    fireEvent.click(decrement);

    expect(counter).toHaveTextContent("Counter: -1");
  });
});
