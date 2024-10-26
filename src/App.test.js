import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renderiza el componente Button dentro del App", () => {
  render(<App />);
  const buttonElement = screen.getByText("Haz click en el boton");
  expect(buttonElement).toBeInTheDocument();

});
