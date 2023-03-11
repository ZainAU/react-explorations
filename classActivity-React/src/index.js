import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from './components/Profile';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const users = [
  {userName: "bogus1", firstName: "Lena", lastName: "Thompson", school: "University of North Carolina at Chapel Hill", classLevel:"Freshman", email: "lena.thompson@example.com", profilePicture: "1" },
  {userName: "bogus2", firstName: "Lena", lastName: "Thompson", school: "University of North Carolina at Chapel Hill", classLevel:"Freshman", email: "lena.thompson@example.com", profilePicture: "2" },
  {userName: "bogus3", firstName: "Lena", lastName: "Thompson", school: "University of North Carolina at Chapel Hill", classLevel:"Senior", email: "lena.thompson@example.com", profilePicture: "3" }
]
root.render(
  <React.StrictMode>
    {/* <ProfilePic id={users[0].profilePicture}/>  */}
    <Profile id = {users[0].profilePicture} firstName={users[0].firstName} lastName={users[0].lastName} classLevel={users[0].classLevel} email={users[0].email} school={users[0].school} />
    <Profile id = {users[1].profilePicture} firstName={users[1].firstName} lastName={users[1].lastName} classLevel={users[1].classLevel} email={users[1].email} school={users[1].school} />
    <Profile id = {users[2].profilePicture} firstName={users[2].firstName} lastName={users[2].lastName} classLevel={users[2].classLevel} email={users[2].email} school={users[2].school} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
