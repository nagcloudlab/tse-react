const Header = (props) => {
  let { title } = props;
  return (
    <header>
      <div className="display-1">{title}</div>
    </header>
  );
};

export default Header;
