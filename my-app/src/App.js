import React, {Component} from 'react';
import './App.css';



class Arti extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦
// App 클래스안에 div태그에서 사용시 대소문자 구분안하면 태그 안써짐
  render () { // 랜더 함수, function생략됨
    return ( // 리턴해서 내보냄
      // 하나의 최상위 태그만 써야됨

      <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
      </article>
    );
  }
}



class Subject extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦

  render () { // 랜더 함수, function생략됨
    return ( // 리턴해서 내보냄
      // 하나의 최상위 태그만 써야됨

      /* this.props.속성명 을 통해서 밑에서 수정한 내용이
      여기로 바로 반영되게끔 바꿈
      */

      <header> 
      <h1>{this.props.title}</h1>
      {this.props.sub}
      </header>
    );
  }
}


class TOC extends Component {
  // 직접 만든 것을 class App extends Component {
  // 에서 div태그에 TOC 사용자 태그처럼 사용함
  render() {
    return (

      <nav>
      <ul>
            <li><a href="1.html" > {this.props.html1}</a></li>
            <li><a href="2.html">{this.props.html2} </a></li>
            <li><a href="3.html">{this.props.html3}</a></li>

      </ul>
      </nav>

    );
  }
}

class App extends Component {
  // 자바스크립트와 유사하지만 자바스크립트가 아님
 render() {
  return (
    <div className="App">
      <Subject title="web" sub="world 와이드 웹"> </Subject>
      <Subject title="react" sub="for UI"> </Subject>
    
      <TOC html1="html" html2="css" html3="javascript"></TOC>
      <Arti title="title" desc="html is hypertext markyup language"></Arti>
      <Subject> </Subject>
    </div>
  );
}
}

export default App;
