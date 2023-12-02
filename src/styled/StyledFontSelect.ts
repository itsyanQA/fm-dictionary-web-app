import { styled, Select } from "@mui/material";

export const StyledFontSelect = styled(Select)(({ theme }) => ({
  color: "var(--darker-gray)",
  fontSize: "18px",
  fontWeight: "700",
  "& fieldset": {
    border: "none",
  },
  "& .MuiSelect-select": {
    padding: "0 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));
