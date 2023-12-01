import "./GlossaryHeader.scss";
import { Phonetic } from "../../../types";
import { ReactComponent as PlayIcon } from "../../../assets/icon-play.svg";

type GlossaryHeaderProps = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
};

export function GlossaryHeader({ word, phonetic, phonetics }: GlossaryHeaderProps) {
  const playablePhonetic: Phonetic | undefined = phonetics?.find((phoentic) => phoentic?.audio);
  const wordAudio = new Audio(playablePhonetic?.audio);

  return (
    <div className="glossary-header">
      <div className="glossary-header__typography-container">
        <h1 className="glossary-header__word">{word}</h1>
        <span className="glossary-header__phonetic">{phonetic}</span>
      </div>
      {!!playablePhonetic && (
        <button className="glossary-header__play-button" onClick={() => wordAudio.play()}>
          <PlayIcon />
        </button>
      )}
    </div>
  );
}
