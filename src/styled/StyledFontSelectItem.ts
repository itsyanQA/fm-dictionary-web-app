import { styled, MenuItem } from "@mui/material";

export const StyledFontSelectItem = styled(MenuItem)(({ theme }) => ({
  color: "var(--darker-gray)",
  fontSize: "18px",
  fontWeight: "700",
  backgroundColor: "transparent",
  "&.font-option--is-sans-serif": {
    fontFamily: "Inter, sans-serif",
  },
  "&.font-option--is-serif": {
    fontFamily: "Lora, serif",
  },
  "&.font-option--is-mono": {
    fontFamily: "Inconsolata, mono",
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--purple-magic)",
  },
  "&.Mui-selected, &.Mui-selected:hover, &.Mui-focusVisible": {
    backgroundColor: "transparent !important",
  },
}));
