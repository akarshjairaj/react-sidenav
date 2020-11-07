import "./App.scss";
import * as d3 from "d3";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => setExpanded(!expanded);
  return (
    <div className="App">
      <header></header>
      <main>
        <aside>
          <div
            className={`${expanded ? "expanded" : "collapsed"} nav-toggle`}
            onClick={handleClick}
          >
            <i
              className={`fa fa-chevron-circle-${
                expanded ? "left" : "right"
              } nav-icon`}
            ></i>
            <p
              className={`${expanded ? "expanded" : "collapsed"} nav-text`}
            ></p>
          </div>
          {d3.range(5).map((obj, index) => {
            return (
              <div className="nav-item">
                <i className="fa fa-home nav-icon"></i>
                <p
                  className={`${expanded ? "expanded" : "collapsed"} nav-text`}
                >
                  Item
                </p>
              </div>
            );
          })}
        </aside>
        <section className={`${expanded ? "expanded" : "collapsed"}`}>
          {d3.range(100).map((obj, index) => (
            <p key={index}>Hello world!</p>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
