interface HeaderProps {
  darkTheme?: boolean;
}
export const Header = ({ darkTheme = false }: HeaderProps) => (
  <div id="header" className={darkTheme ? "dark" : "light"}>
    <a className="header-logo flex-row align-center gap-1 montserrat" href="/">
      <p>THE</p>
      <p className="bg-black text-white">PRODUCT</p>
      <p>PLATFORM</p>
    </a>
  </div>
);
