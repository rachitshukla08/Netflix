import React, { useState } from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <GPTSearchBar isLoading={isLoading} setIsLoading={setIsLoading} />
      {isLoading ? (
        <p className="text-white mx-16">Loading movie suggestions...</p>
      ) : (
        <GPTMovieSuggestions />
      )}
    </div>
  );
};

export default GPTSearch;
