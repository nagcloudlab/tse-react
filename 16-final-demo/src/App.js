import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { Card } from "primereact/card";

function App() {
  return (
    <div className="container">
      <h1 className="display-3">Welcome to React</h1>
      <hr />
      <Card title="React" subTitle="Javascript library" className="md:w-25rem">
        <p className="m-0">
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components. It is maintained by Meta
          and a community of individual developers and companies. React can be
          used to develop single-page, mobile, or server-rendered applications
          with frameworks like Next.js. Wikipedia
        </p>
      </Card>
    </div>
  );
}

export default App;
