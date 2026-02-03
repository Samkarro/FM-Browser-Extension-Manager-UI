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
                <div className="extension-info-container">
                  <div className="extension-image-container">
                    <img src={extension.logo} />
                  </div>
                  <div className="extension-text-container">
                    <h2>{extension.name}</h2>
                    <p>{extension.description}</p>
                  </div>
                </div>
                <div className="extension-interactions-container">
                  <div className="remove-button clickable">Remove</div>
                  <input type="checkbox" className="toggle clickable"></input>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
