import { StyledFontSelect } from "../../styled/StyledFontSelect";
import { StyledFontSelectItem } from "../../styled/StyledFontSelectItem";
import { ReactComponent as ArrowDownIcon } from "../../assets/icon-arrow-down.svg";
import { useState, useEffect, CSSProperties } from "react";
import { FontOption } from "../../types";

export function FontSelect() {
  const [selectedFont, setSelectedFont] = useState<FontOption>("Inter");
  const selectPaperProps: Record<"sx", CSSProperties> = {
    sx: {
      borderRadius: "16px",
      background: "var(--paper)",
      boxShadow: "var(--box-shadow)",
      padding: "12px 15px",
      marginTop: "20px",
    },
  };

  useEffect(() => {
    document.body.style.fontFamily = `${selectedFont}, sans-serif`;
    localStorage.setItem("selectedFont", `${selectedFont}, sans-serif`);
  }, [selectedFont]);

  return (
    <StyledFontSelect
      defaultValue="sans-serif"
      value={selectedFont}
      onChange={(e) => setSelectedFont(e.target.value as FontOption)}
      MenuProps={{ PaperProps: selectPaperProps }}
      IconComponent={ArrowDownIcon}
    >
      <StyledFontSelectItem disableRipple className="font-option font-option--is-sans-serif" value="Inter">
        Sans Serif
      </StyledFontSelectItem>
      <StyledFontSelectItem disableRipple className="font-option font-option--is-serif" value="Lora">
        Serif
      </StyledFontSelectItem>
      <StyledFontSelectItem disableRipple className="font-option font-option--is-mono" value="Inconsolata">
        Mono
      </StyledFontSelectItem>
    </StyledFontSelect>
  );
}
