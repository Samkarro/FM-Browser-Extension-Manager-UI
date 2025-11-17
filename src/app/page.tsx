import data from "./common/data.json";

export default function Home() {
  const stringified = JSON.stringify(data);
  const extensions: {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
  }[] = JSON.parse(stringified);
  return (
    <div className="content-container">
      <header>
        <svg href="./assets/images/logo.svg" />
        <div className="theme-button">
          <svg href="./assets/images/icon-moon.svg" />
        </div>
      </header>
      {/* TODO: make this whole thing a separate tsx */}
      <main>
        <div className="extension-sorter-container">
          <h1>Extensions List</h1>

          <div className="extension-sorter">
            {/* TODO: implement buttons */}
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="extensions-container">
          {extensions &&
            extensions.map((extension) => {
              return (
                <div className="extension" key={extension.name}>
                  <div className="extension-info-container">
                    {extension.name}
                  </div>
                  <div className="extension-interactions-container">
                    <div className="remove-button">Remove</div>
                    <div className="toggle"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
