import { styled, Select } from "@mui/material";

export const StyledFontSelect = styled(Select)(({ theme }) => ({
  color: "var(--main-text-color)",
  fontSize: "18px",
  fontWeight: "700",
  "& fieldset": {
    border: "none",
  },
  "& .MuiSelect-select": {
    padding: "0 30px 0 0 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      padding: "0 25px 0 0 !important",
    },
  },
  "& .MuiSelect-icon": {
    right: "-7px",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
