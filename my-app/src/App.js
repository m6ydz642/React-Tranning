import React, {Component} from 'react';
import './App.css';


class TOC extends Component {
  // 직접 만든 것을 class App extends Component {
  // 에서 div태그에 TOC 사용자 태그처럼 사용함
  render() {
    return (

      <nav>
      <ul>
            <li><a href="1.html"> </a>html</li>
            <li><a href="2.html"> </a>css</li>
            <li><a href="3.html"> </a>javascript</li>

      </ul>
      </nav>

    );
  }
}


class Arti extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦
// App 클래스안에 div태그에서 사용시 대소문자 구분안하면 태그 안써짐
  render () { // 랜더 함수, function생략됨
    return ( // 리턴해서 내보냄
      // 하나의 최상위 태그만 써야됨

      <article>
            <h2>html</h2>
            html is hypertext markyup language
      </article>
    );
  }
}



class Subject extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦

  render () { // 랜더 함수, function생략됨
    return ( // 리턴해서 내보냄
      // 하나의 최상위 태그만 써야됨

      <header> 
      <h1>Web</h1>
      world wide web;
      </header>
    );
  }
}


class App extends Component {
  // 자바스크립트와 유사하지만 자바스크립트가 아님
 render() {
  return (
    <div className="App">
      <Subject title="web" sub="world 와이드 웹"> </Subject>
    
      <TOC></TOC>
      <Arti></Arti>
      <Subject> </Subject>
    </div>
  );
}
}

export default App;
