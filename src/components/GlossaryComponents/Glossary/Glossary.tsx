import "./Glossary.scss";
import { Dictionary } from "../../../types";
import { GlossaryHeader } from "../GlossaryHeader/GlossaryHeader";
import { GlossaryDescription } from "../GlossaryDescription/GlossaryDescription";
import { GlossarySource } from "../GlossarySource/GlossarySource";

type GlossaryProps = {
  wordInfo: Dictionary[];
};

export function Glossary({ wordInfo }: GlossaryProps) {
  return (
    <div className="glossary">
      <GlossaryHeader word={wordInfo?.[0]?.word} phonetic={wordInfo?.[0]?.phonetic} phonetics={wordInfo?.[0]?.phonetics} />
      {wordInfo?.map((word) => word?.meanings?.map((meaning, index) => <GlossaryDescription meaning={meaning} key={index} />))}
      <GlossarySource sourceUrl={wordInfo?.[0]?.sourceUrls?.[0]} />
    </div>
  );
}
