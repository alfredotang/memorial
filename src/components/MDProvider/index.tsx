import { FC } from 'react';
import { Code, Heading, Box, TypographyProps, Alert } from '@chakra-ui/react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { useMarkdownQuery, useRWD } from '@src/hooks';

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

type FontSizeVariants = TypographyProps['fontSize'];

const Paragraph: FC = ({ children }) => {
  const fontsize = useRWD<FontSizeVariants>(['md', 'xl', '2xl']);
  return <Box fontSize={fontsize}>{children}</Box>;
};

const InlineCode: FC = ({ children }) => {
  const fontsize = useRWD<FontSizeVariants>(['md', 'xl', '2xl']);
  return <Code fontSize={fontsize}>{children}</Code>;
};

const Info: FC = ({ children }) => {
  const fontsize = useRWD<FontSizeVariants>(['md', 'xl', '2xl']);
  return <Alert fontSize={fontsize}>{children}</Alert>;
};

type Props = {
  src: string;
};

const MDProvider: FC<Props> = ({ src }) => {
  const { postMarkdown } = useMarkdownQuery(src);
  const overrides: MarkdownToJSX.Overrides = {
    code: InlineCode,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: Paragraph,
    pre: Info,
  };
  return <Markdown options={{ overrides }}>{postMarkdown}</Markdown>;
};

export default MDProvider;
