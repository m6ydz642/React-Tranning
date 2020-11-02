import React, {Component} from 'react'; //  리엑트라고 하는 라이브러리에서 Component라는 클래스를 로딩
// 리엑트에 필수 

class TOC extends Component {
      // 직접 만든 것을 class App extends Component {
      // 에서 div태그에 TOC 사용자 태그처럼 사용함
      render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length)  {
          lists.push(  <li key={data[i].id}><a href={"/content"+data[i].id}>{data[i].title} </a></li>);
          // react가 내부에서 요구하는 키값
          i+=1;
        }
        return (
    
          <nav>
          <ul>
                {/* <li><a href="1.html" > {this.props.html1}</a></li>
                <li><a href="2.html">{this.props.html2} </a></li>
                <li><a href="3.html">{this.props.html3}</a></li> */}
                 {/* {lists}  */}
                 {/* 위의코드랑 같아짐 */}
                {/* <li><a href="2.html">css </a></li>
                <li><a href="3.html">javascript</a></li> */}
                {lists}
          </ul>
          </nav> 
    
        );
      }
    }

    export default TOC; // 외부에서 사용가능하게