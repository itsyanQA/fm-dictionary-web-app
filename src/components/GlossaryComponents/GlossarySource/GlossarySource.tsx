import "./GlossarySource.scss";
import { HorizontalLine } from "../../../styled/HorizontalLine";
import { ReactComponent as LinkIcon } from "../../../assets/icon-new-window.svg";

type GlossarySourceProps = {
  sourceUrl: string;
};

export function GlossarySource({ sourceUrl }: GlossarySourceProps) {
  return (
    <>
      <HorizontalLine />
      <div className="glossary-source">
        <span className="glossary-source__source-text">Source</span>
        <div className="glossary-source__link-container" onClick={() => window.open(sourceUrl)}>
          <span className="glossary-source__url-text">{sourceUrl}</span>
          <LinkIcon />
        </div>
      </div>
    </>
  );
}
