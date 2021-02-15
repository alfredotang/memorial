import { useEffect, useState } from 'react';

type UseMarkdownQuery = { postMarkdown: string };

const useMarkdownQuery = (url: string): UseMarkdownQuery => {
  const [postMarkdown, setPostMarkdown] = useState<string>('');

  // useEffect with an empty dependency array (`[]`) runs only once
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        // Logs a string of Markdown content.
        // Now you could use e.g. <rexxars/react-markdown> to render it.
        // console.log(text);
        setPostMarkdown(text);
      });
  }, [url]);

  return { postMarkdown };
};

export default useMarkdownQuery;
