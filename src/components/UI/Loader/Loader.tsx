import { CircularProgress } from "@mui/material";
import "./Loader.scss";

export function Loader() {
  return (
    <div className="loader">
      <CircularProgress className="loader__spinner" />
    </div>
  );
}
