import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen, logRoles } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import data from "../data.json";

describe("Pokemon Name Heading", () => {
  it("should have a h2 heading of ‘Pokemon Name’", () => {
    render(<PokemonCard pokemon={data.pokemon[0]} />);
    const headingH2 = screen.getByRole("heading", { name: "Bulbasaur" });
    expect(headingH2).toBeInTheDocument();
    logRoles(document.body);
  });
});

// Test a single pokemon card:
//  - heading
//  - image
//  - button

// Import a single pokemon object to test the component.

// Do we need to test the Stats List here?
