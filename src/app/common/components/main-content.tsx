import data from "../data.json";
import "../styles/main-content.styles.css";

export default function MainContent() {
  const stringified = JSON.stringify(data);
  const extensions: {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
  }[] = JSON.parse(stringified);

  return (
    <main>
      <div className="extension-sorter-container">
        <h1 className="unhoverable">Extensions List</h1>
        <div className="extension-filter">
          <div className="filter-button clickable">All</div>
          <div className="filter-button clickable">Active</div>
          <div className="filter-button clickable">Inactive</div>
        </div>
      </div>
      <div className="extensions-container">
        {extensions &&
          extensions.map((extension) => {
            return (
              <div className="extension" key={extension.name}>
                <div className="extension-info-container">{extension.name}</div>
                <div className="extension-interactions-container">
                  <div className="remove-button clickable">Remove</div>
                  <div className="toggle clickable"></div>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
