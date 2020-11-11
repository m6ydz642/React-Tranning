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
          lists.push(  
          <li key={data[i].id}>
            <a href={"/content/"+data[i].id+ "." +data[i].title}
            data-id={data[i].id} //  data에 아이디를 가르키는 거임
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
            
            >{data[i].title} </a>
            
            </li>);
          // 확장자 처럼 보이게 하기 
          // react가 내부에서 요구하는 키값
          console.log("state title 데이터 내용", JSON.stringify(data[i].title)); // 3개 다 들어간 상태
         console.log("data내용", JSON.stringify(data)); 
         // console.log 에서 원하는 문자열과 같이 출력 시키고 싶으면 JSON.stringify
         // 함수를 써서 적어야함 안그러면 object[object] 타입으로 나와서 
         // 단독으로 console.log(변수); 라고 하던지 stringify를 써서 json변환하는함수랑 같이 출력시키던지 해야함
         
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