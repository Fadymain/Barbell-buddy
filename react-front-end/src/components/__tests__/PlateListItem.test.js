import React from "react";
import { render} from "@testing-library/react";
import PlateListItem from "../PlateListItem"

// afterEach(cleanup);

it("renders without crashing", () => {
  render(<PlateListItem />);
})