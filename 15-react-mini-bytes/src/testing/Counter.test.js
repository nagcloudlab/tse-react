import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

// test-suite => Counter
// test-case (s)
// - intial count should be zero
// - +1 event count should be 1

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });
  it("should render intial count with Zero", () => {
    const resultEle = screen.getByTestId("result");
    const actual = resultEle.textContent;
    expect(actual).toBe("0");
  });
  it("should render count on increment", () => {
    const incrementBtn = screen.getByTestId("increment");
    fireEvent.click(incrementBtn);
    const resultEle = screen.getByTestId("result");
    const actual = resultEle.textContent;
    expect(actual).toBe("1");
  });
});
