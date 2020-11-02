import React, {Component} from 'react';
import './App.css';
import TOC from "./components/TOC"; // component폴더에 TOC.js 로딩
import Subject from "./components/Subject";
import Arti from "./components/Arti";



// 전부 클래스 외부에서 사용함

// class Arti extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦
// // App 클래스안에 div태그에서 사용시 대소문자 구분안하면 태그 안써짐
//   render () { // 랜더 함수, function생략됨
//     return ( // 리턴해서 내보냄
//       // 하나의 최상위 태그만 써야됨

//       <article>
//             <h2>{this.props.title}</h2>
//             {this.props.desc}
//       </article>
//     );
//   }
// }



// class Subject extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦

//   render () { // 랜더 함수, function생략됨
//     return ( // 리턴해서 내보냄
//       // 하나의 최상위 태그만 써야됨

//       /* this.props.속성명 을 통해서 밑에서 수정한 내용이
//       여기로 바로 반영되게끔 바꿈
//       */

//       <header> 
//       <h1>{this.props.title}</h1>
//       {this.props.sub}
//       </header>
//     );
//   }
// }


// 외부에서 사용하려고 옮김
// class TOC extends Component {
//   // 직접 만든 것을 class App extends Component {
//   // 에서 div태그에 TOC 사용자 태그처럼 사용함
//   render() {
//     return (

//       <nav>
//       <ul>
//             <li><a href="1.html" > {this.props.html1}</a></li>
//             <li><a href="2.html">{this.props.html2} </a></li>
//             <li><a href="3.html">{this.props.html3}</a></li>
//       </ul>
//       </nav>

//     );
//   }
// }

class App extends Component {
  // 자바스크립트와 유사하지만 자바스크립트가 아님


  // state값을 초기화
 // 내부적으로 사용은 state를 사용함
 // state에서 정의한 값을 props로 준거임
 // 상위컴포넌트 값을 state로 하위 컴포넌트의 props값으로 전달하는 것임

  constructor (props) { // constructor = render보다 먼저 실행되면서 Component를 초기화 시켜줌
    super(props);
    this.state = {
      Subject:{title:"state웹", sub:"state world wide"},
      Subject2:{ // 임의로 여기서 지정한 이름임
        title:"state 리엑트", 
        sub:"state for ui"}, 

      // arti에 있는 값을 건드릴 예정(?)
      contents: [
        {id:1, title:'satehtml', desc:'state html is hypertext...'},
        {id:2, title:'satecss', desc:'state css is ...'},
        {id:3, title:'satejavascript', desc:'state javascript is ...'}
    ]

    }  
  }; 
//  this.state = {
//    Subject:{
//       title:"state 리엑트", 
//       sub:"state for ui"} 
//     }
// }
 render() {
  return (
    <div className="App">
      <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}> </Subject>
      <Subject title={this.state.Subject2.title} sub={this.state.Subject2.sub}> </Subject> 
      {/* state 값 2개 전달 */}
    
      {/* <TOC html1="html" html2="css" html3="javascript"></TOC> */}
      <TOC data={this.state.contents}></TOC>
      <Arti title="title" desc="html is hypertext markyup language"></Arti>
      <Subject> </Subject>
    </div>
  );
}
}

export default App;
