/* 
   1) react에서 태그는 반드시 닫아야 한다.   
   2) 2개 이상의 태그는 하나의 부모 태그로 감싸한다. 
   3) 자바스크립트 코드를 작성하려면 { }를 사용
   4) 주석은 {\/* 주석처리 *\/}
   리액트 [가상돔] 
*/
import './App.css';
function App() {
  // jsx

  const len = 'react';
  const name = '이동현';
  return (
    <div>
      {/* 여긴 헤더 영역입니다. */}
      <header
        className="header-component"
        // 속성을 추가하려면 여기에...
      >
        <h1>{len}</h1>
      </header>
      {/* 여긴 내용 영역입니다. */}
      <section className="contents">
        <label htmlFor="username">닉네임</label>
        <input id="username" />
        <div>언어: {len}</div>
        <div>이름: {name}</div>
      </section>
    </div>
  );
}

export default App;
