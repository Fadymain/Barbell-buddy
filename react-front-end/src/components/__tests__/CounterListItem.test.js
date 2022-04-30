import React from "react";
import { render} from "@testing-library/react";
import CounterListItem from "../CounterListItem";

it("renders without crashing", () => {
  render(<CounterListItem />);
})