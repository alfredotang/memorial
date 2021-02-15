import { FC } from 'react';
import { Code, Heading, Box } from '@chakra-ui/react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { useMarkdownQuery } from '@src/hooks';

const H1: FC = ({ children }) => {
  return (
    <Heading as="h1" size="lg">
      {children}
    </Heading>
  );
};

const H2: FC = ({ children }) => {
  return (
    <Heading as="h2" size="md">
      {children}
    </Heading>
  );
};

const H3: FC = ({ children }) => {
  return (
    <Heading as="h3" size="sm">
      {children}
    </Heading>
  );
};

const H4: FC = ({ children }) => {
  return (
    <Heading as="h4" size="xs">
      {children}
    </Heading>
  );
};

type Props = {
  src: string;
};
const MDProvider: FC<Props> = ({ src }) => {
  const { postMarkdown } = useMarkdownQuery(src);
  const overrides: MarkdownToJSX.Overrides = {
    // "p" paragraph elements are substituted with MUI "Typography"
    code: Code,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: Box,
  };
  return <Markdown options={{ overrides }}>{postMarkdown}</Markdown>;
};

export default MDProvider;
