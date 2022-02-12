type TitleProps = {
  name: string;
}

const Title = (props: TitleProps) => {
  const { name } = props;

  const defaultTitle = "Personal Blog";
  document.title = `${defaultTitle} - ${name}`;

  return null;
}

export default Title;
