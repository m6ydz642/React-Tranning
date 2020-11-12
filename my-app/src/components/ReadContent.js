import React, {Component} from 'react'; 

class ReadContent extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦
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

      export default ReadContent;
