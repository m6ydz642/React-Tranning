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
      mode :'read',
      selected_content_id:2,
      Subject:{title:"state웹", sub:"state world wide"},
      welcome:{title: 'welcome', desc:'hello react'}, // welcome일때 출력

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
   var _title, _desc = null;

   if (this.state.mode === 'welcome') {
    _title = this.state.welcome.title;
    _desc = this.state.welcome.desc;
   }else if (this.state.mode === 'read') {
     var i = 0;
     while(i < this.state.contents.length) {
       var data = this.state.contents[i];
    // _title = this.state.contents[0].title;
    // _desc = this.state.contents[0].desc;
    if(data.id === this.state.selected_content_id) {
    _title = data.title;
    _desc = data.desc;
    break;
    }
    i+=1;
   }
  }
  return (
    <div className="App">
      <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}
              onChangePage={function() {
                this.setState({mode:'welcome'});
                alert('hi');
              }.bind(this) } > </Subject>
      <Subject title={this.state.Subject2.title} sub={this.state.Subject2.sub}>

        
         </Subject> 
      {/* state 값 2개 전달
    {/******************************************************************** */}
      {/* <header> {/*위에 Subject껄 그대로 풀어쓴거임}*/ }
      {/*}
          <h1> <a href="/" onClick={function (e) {
            console.log(e);
            e.preventDefault(); // 기본적인 동작을 금지시킴 (예) a태그의 링크기능
           // debugger; // 일종의 break point임
     //      this.state.mode = 'welcome'; // mode값을 welcome으로 바꿈

     // 위에 this.state.mode에서 this를 읽지 못하기 때문에 에러가 발생함 
     // 밑에서 bind함수를 호출해서 this 로  가르키면 해결됨
{/*}
     this.setState ( { // 동적으로 state값을 바꾸고 싶을 경우 this.state를 사용
       mode:'welcome' // setState를 통해서 state 값을 바꿈
     });
              alert('mode값 : ' + JSON.stringify(this.state.mode )); // mode값 뭔지 표시
              }.bind(this)}> {this.state.Subject.title} </a></h1>
          {this.state.Subject.sub}
      {/* </header> */}
{/******************************************************************** */}
      {/* <TOC html1="html" html2="css" html3="javascript"></TOC> */}
      
      <TOC onChangePage={function(id){
        alert('toc호출');
        alert(JSON.stringify(data.id));
      //  alert(this.state.contents.id);
        this.setState({mode:'read',
        selected_content_id:Number(id)
      });
      }.bind(this)} data={this.state.contents}></TOC>
      <Arti title={_title} desc={_desc}></Arti>
      <Subject> </Subject>
    </div>
  );
}
}

export default App;
