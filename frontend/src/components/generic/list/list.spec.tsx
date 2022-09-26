/* import packages*/
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* import component */
import List from './list';

/**
 * Test Suit for List Component
 */
describe("Test List Component", () => {
  /*
   * test the component includes following elements or not
   */
  it("renders without crashing", () => {
    render(<List />);
    expect(screen.getByTestId("listItem")).toBeInTheDocument();
    expect(screen.getByTestId("itemImage")).toBeInTheDocument();
    expect(screen.getByTestId("product-detail")).toBeInTheDocument();
  });
});
