
const heading=React.createElement("h1", {},  "Hey Gusys");
const Child=React.createElement("div", {id:"child"}, [React.createElement("h2",{id:"h2"},"Helo anubrata"),React.createElement("h3",{id:"h3"},"Helo anubrata")])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(Child);
// root.render(root);

