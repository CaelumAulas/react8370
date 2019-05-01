import React, { useState } from "react";
import classNames from "classnames";
import { TweetsActions } from "../../../actions/TweetsActions";


// Container Component (Lógicas)
export const NovoTweetFormContainer = () => {
    const [novoTweet, setStateNovoTweet] = useState("");

    function adicionaTweet(event) {
        event.preventDefault()
        TweetsActions.adiciona(novoTweet)
            .then(() => {
                setStateNovoTweet('')
            })
    }
    return <NovoTweetForm
            novoTweetValue={novoTweet}
            adicionaTweet={adicionaTweet}
            onTextAreaChange={(event) => setStateNovoTweet(event.target.value)}
        />
}

function isNovoTweetMaiorQue140(novoTweet) {
    return novoTweet.length > 140
}

// Presentational Component (É só a view)
export const NovoTweetForm = ({ adicionaTweet, novoTweetValue, onTextAreaChange }) => {
  return (
    <form className="novoTweet" onSubmit={adicionaTweet}>
      <div className="novoTweet__editorArea">
        <span
          className={classNames("novoTweet__status", {
            "novoTweet__status--invalido": isNovoTweetMaiorQue140(novoTweetValue)
          })}
        >
          {novoTweetValue.length}/140
        </span>
        <textarea
          onChange={onTextAreaChange}
          value={novoTweetValue}
          className="novoTweet__editor"
          placeholder="O que está acontecendo?"
        />
      </div>
      <button
        disabled={isNovoTweetMaiorQue140(novoTweetValue)}
        type="submit"
        className="novoTweet__envia"
      >
        Tweetar
      </button>
    </form>
  );
};
