import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList
          skill1="HTML + CSS 😎"
          skill2="React.js 😆"
          skill3="Git and GitHub 🤔"
          skill4="Bootstrap 😍"
          skill5="Web Development 😄"
        />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="diego.jpg" alt="diego" />;
}

function Intro() {
  return (
    <div>
      <h2>Diego Carvalho</h2>
      <p>I'm Front-End student trying to understand React.js</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <ul className="skill-list">
      <li className="skill">{props.skill1}</li>
      <li className="skill">{props.skill2}</li>
      <li className="skill">{props.skill3}</li>
      <li className="skill">{props.skill4}</li>
      <li className="skill">{props.skill5}</li>
    </ul>
  );
}
