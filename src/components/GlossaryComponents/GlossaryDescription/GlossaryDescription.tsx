import { HorizontalLine } from "../../../styled/HorizontalLine";
import { Meaning } from "../../../types";
import React from "react";
import "./GlossaryDescription.scss";

type GlossaryDescriptionProps = {
  meaning: Meaning;
};

export function GlossaryDescription({ meaning }: GlossaryDescriptionProps) {
  return (
    <div className="glossary-description">
      <div className="glossary-description__part-of-speech-container">
        <h2 className="glossary-description__part-of-speech">{meaning?.partOfSpeech}</h2>
        <HorizontalLine />
      </div>
      {!!meaning?.definitions?.length && (
        <div className="glossary-description__meaning-container">
          <span className="glossary-description__small-heading">Meaning</span>
          <ul className="glossary-description__meanings-list">
            {meaning?.definitions?.map((definition, index) => (
              <React.Fragment key={index}>
                <li className="glossary-description__meaning-list-item">{definition?.definition}</li>
                {definition?.example && <span className="glossary-description__meaning-list-item-example">{definition?.example}</span>}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
      {!!meaning?.synonyms?.length && (
        <div className="glossary-description__synonyms">
          <span className="glossary-description__small-heading">Synonyms</span>
          <ul className="glossary-description__synonyms-list">
            {meaning?.synonyms?.map((synonym, index) => (
              <li className="glossary-description__synonym-list-item" key={index}>
                {synonym}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
