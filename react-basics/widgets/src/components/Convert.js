import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounced, setDebounced] = useState(translated);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebounced(text), 500);
    return () => clearTimeout(timeoutId);
  }, [text]);

  useEffect(() => {
    const convert = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounced,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    convert();
  }, [debounced, language]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
