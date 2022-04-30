import React from "react";
import { render} from "@testing-library/react";
import FormDialog from "../FormDialog";

it("renders without crashing", () => {
  render(<FormDialog />);
})