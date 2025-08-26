const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.heading}</h1>
    </header>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part} {props.exercises}{" "}
    </p>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return (
    <div>
      <p>number of exercises {total} </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header heading={course} />
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  );
};

export default App;
