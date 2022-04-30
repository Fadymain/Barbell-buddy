import React from "react";
import { render} from "@testing-library/react";
import BottomNav from "../BottomNav";

it("renders without crashing", () => {
  render(<BottomNav />);
})