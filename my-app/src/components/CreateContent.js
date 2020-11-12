import React, {Component} from 'react'; 

class CreateContent extends Component { // 컴포넌트 상속받아서 subject라는 이름만듦
      // App 클래스안에 div태그에서 사용시 대소문자 구분안하면 태그 안써짐
        render () { // 랜더 함수, function생략됨
          return ( // 리턴해서 내보냄
            // 하나의 최상위 태그만 써야됨
      
            <article>
                  <h2>Create성공!</h2>
                 <form action="create_process" method="post" onSubmit={function(e){
                    e.preventDefault(); // 자체 이벤트 안되게 함
                    // onsubmit이 일어날때 create_process로 넘기긴 하지만 이동은 안함
                    alert("전송 성공 페이지 이동 안함");
                 }.bind(this)} > 
                 {/* submit클릭했을때 이벤트 호출 */}
                    <p> <input type="text" name="createtitle" placeholder="제목을 입력하세요"></input></p>
                    <p>
                      <textarea name="createdesc" placeholder="내용을 입력하세요"></textarea>

                    </p>

                    <p>
                      <input type="submit" value="전송"></input>
                    </p>

                 </form>
            </article>
          );
        }
      }

      export default CreateContent;
