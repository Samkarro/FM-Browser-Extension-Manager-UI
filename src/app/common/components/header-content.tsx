import "../styles/header.styles.css";

export default function HeaderContent() {
  return (
    <header>
      <img src="./assets/images/logo.svg" />

      <div className="theme-button clickable">
        <img src="./assets/images/icon-sun.svg" />
      </div>
    </header>
  );
}
