import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {id : "heading"}, "Hello React using React🚀");
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(heading);

// JSX transpiled  before it reaches the JS -> Parccel => Babel

// JSX => Babel transpiles it to React.createElement() => ReactElement-JS object => HTMLElement (render)

// React Elements
const title = function (){
    return (<h1>
        Namaste React using JS functions 🎖️
    </h1>)
};

// React components
const TitleComponent = () => {
    return (<h1>
        Namaste React using Components🚀
    </h1>);
}

const talk = "Now, you're talking";

// React functional components

const HeadingComponent = () => { // Component Composition
    return (
        <>  
            {title()}
            <TitleComponent/> 
            {/* <TitleComponent></TitleComponent> */}
            <h2>{talk}</h2>

            <div className="container">
                <h1>Namsate React Functional Components</h1>
            </div>
        </>
    )
}

// const HeadingComponent2 = () => <h1>Namsate React Functional Components </h1>

const container = ReactDOM.createRoot(document.querySelector(".container"));
container.render(<HeadingComponent/>);