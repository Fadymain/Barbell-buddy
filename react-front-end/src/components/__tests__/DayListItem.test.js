import React from "react";
import { render} from "@testing-library/react";
import DayListItem from "../DayListItem"

it("renders without crashing", () => {
  render(<DayListItem />);
})