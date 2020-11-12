import React, {Component} from 'react'; //  리엑트라고 하는 라이브러리에서 Component라는 클래스를 로딩

class Control extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦

      render () { // 랜더 함수, function생략됨
        return ( // 리턴해서 내보냄
         
          <ul>
          <li>
            <a href="/create" onClick={function(e){
                // 이벤트 핸들러 사용?
                e.preventDefault();
                this.props.onChangeMode('create'); // 모드명 알려주기, onChangeMode호출
            }.bind(this)}>Create</a>
          </li>
          <li>
            <a href="/update" onClick={function(e){
                // 이벤트 핸들러 사용?
                e.preventDefault();
                this.props.onChangeMode('update'); // 모드명 알려주기, onChangeMode호출
            }.bind(this)}>Update</a>
          </li>
  
          <li><input type="button" value="delete"></input></li>
          {/* 삭제는 링크 방식으로 하면 안됨 */}
  
        </ul>
 
        );
      }
    }

export default Control;
