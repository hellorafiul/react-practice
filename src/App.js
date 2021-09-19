import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Article></Article>
        <Blog heading='The Miracle Morning' author='Book by Hal Elrod'></Blog>
        <Mobile></Mobile>
        <ToDo></ToDo>

      </header>
    </div>
  );
}

// ১১. json placeholder এর ওয়েবসাইট এ গিয়ে todo এর ডাটা লোড করে। সেগুলাকে দেখাতে পারো কিনা দেখো। 

function ToDo() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Number of Data: {users.length}</h1>
      {
        users.map(user => <User id={user.id} title={user.title} completed={user.completed}></User>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div className="blog">
      <h2>User ID: {props.id}</h2>
      <h3>Title: {props.title}</h3>
      <h4>Completed: {props.completed ? "Passed" : 'Failed'}</h4>
    </div>
  );
}

// ২. JSX দিয়ে একটা div এর মধ্যে article ট্যাগ দিয়ে একটা ছোট ব্লগ টাইপের কিছু লিখতে পারো কিনা 
function Article() {
  const articleStyle = {
    color: 'blueviolet',
    borderBottom: '1px solid #fff',
    textTransform: 'uppercase',
    paddingBottom: '10px'

  }
  return (
    <div className='main-div'>
      <article className='blog'>
        <h1 style={articleStyle}>This is article Title</h1>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ipsa?</p>
      </article>
      <article className='blog'>
        <h1 style={articleStyle}>This is article Title</h1>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ipsa?</p>
      </article>
      <article className='blog'>
        <h1 style={articleStyle}>This is article Title</h1>
        <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ipsa?</p>
      </article>
    </div>
  )
}

// ৬. ব্লগ নামক একটা কম্পোনেন্ট বানাও

function Blog(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <h3>{props.author}</h3>
    </div>
  );
}

// ৯. আরেকটা কম্পোনেন্ট বানাও। যেটার নাম হবে। Mobile সেখানে একটা বাটন থাকবে। বাটন এর নাম হবে "battery down" আর উপরে একটা সংখ্যা থাকবে। ১০০। (এইটা দিয়ে বুঝবে মোবাইল এর ব্যাটারি ১০০% আছে) এখন তুমি যতবার বাটনে ক্লিক করবে। সেই সংখ্যা এর মান ১০ করে কমতে থাকবে। 
// ১০. (স্পেশাল চ্যালেঞ্জ) উপরের ব্যাটারী ডাউন বাটনে চাপ দিলে কমবে। তবে কমতে কমতে যখন ব্যাটারি এর পরিমাণ ০ হয়ে যাবে। তারপরে আর বাটনে চাপ দিলে। ব্যাটারি কমবে না। অর্থাৎ নেগেটিভ হবে না। (দেখো এইটা করতে পারো কিনা)

function Mobile() {
  const [number, setNumber] = useState(100);
  const downBattery = () => {
    const newNumber = number - 10;
    if (number > 0) {
      setNumber(newNumber)
    }
  }
  return (
    <div>
      <h2>Current Battery Status {number}% </h2>
      <button className='button' onClick={downBattery}>Battery down</button>
      {
        number == 0 ? <p>It's not possible</p> : ''
      }
    </div>
  );
}

function ShowAlert() {
  return (
    <p>it is not possible</p>
  );
}




export default App;
