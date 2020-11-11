import React, {Component} from 'react'; //  리엑트라고 하는 라이브러리에서 Component라는 클래스를 로딩

class Subject extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦

      render () { // 랜더 함수, function생략됨
        return ( // 리턴해서 내보냄
          // 하나의 최상위 태그만 써야됨
    
          /* this.props.속성명 을 통해서 밑에서 수정한 내용이
          여기로 바로 반영되게끔 바꿈
          */
    
          <header> 
          <h1> <a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title} </a></h1>
          {this.props.sub}
          </header>
        );
      }
    }

export default Subject;
