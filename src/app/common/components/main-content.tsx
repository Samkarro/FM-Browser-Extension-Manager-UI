"use client";
import { useEffect, useState } from "react";
import data from "../data.json";
import "../styles/main-content.styles.css";

export default function MainContent() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Active", "Inactive"];

  return (
    <main>
      <div className="extension-sorter-container">
        <h1 className="unhoverable">Extensions List</h1>
        <div className="extension-filter">
          {filters.map((f) => {
            return (
              <div
                key={f}
                className={`filter-button clickable ${f === filter ? "filter-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </div>
            );
          })}
        </div>
      </div>
      <div className="extensions-container">
        {extensions &&
          extensions.map((extension, index) => {
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
                  <div
                    className="remove-button clickable"
                    onClick={() =>
                      setExtensions((prev) =>
                        prev.filter((_, i) => i !== index),
                      )
                    }
                  >
                    Remove
                  </div>
                  <input
                    type="checkbox"
                    className="toggle clickable"
                    checked={extension.isActive}
                    onChange={() =>
                      setExtensions((prev) =>
                        prev.map((ext, i) =>
                          i === index
                            ? { ...ext, isActive: !ext.isActive }
                            : ext,
                        ),
                      )
                    }
                  ></input>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
