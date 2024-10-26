import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import img1 from "../Images/sorpris.png";
import img2 from "../Images/flower.png";

test("Texto y imagen inicial", () => {
  render(<Button />);
  expect(screen.getByText("Haz click en el boton")).toBeInTheDocument();

  const imgElement = screen.getByAltText("Imagen de ejemplo");
  expect(imgElement).toBeInTheDocument();
  expect(imgElement.src).toContain(img1);
});

test("Cambio de texto e imagen", () => {
  render(<Button />);

  const buttonElement = screen.getByText("Boton");
  fireEvent.click(buttonElement);

  const updateText = screen.getByText("¡Gracias por hacer clic!");
  expect(updateText).toBeInTheDocument();

  const imgElement = screen.getByAltText("Imagen de ejemplo");
  expect(imgElement.src).toContain(img2);
});
