import React from "react"
import { render } from "@testing-library/react"
import Header from '../Header'

test("Header renders correctly", () => {
  const { getByTestId } = render(<Header data-testid="header-appbar"/>)
  // Assertion
  expect(getByTestId("header-appbar")).toBeTruthy
  // --> Test will pass
})