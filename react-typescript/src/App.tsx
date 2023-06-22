import React from 'react';
import './App.css';
import NoProps from './components/NoProps';
import TypeClassComp from './components/TypeClassComp';
import TypeFunctionComp from './components/TypeFunctionComp';
import TypeArrowFunctionComp from './components/TypeArrowFunctionComp';

function App() {
  return (
    <div className="App">
      <NoProps/>
      {/** 클래스형에서 props를 interface로 지정하면 호출할 때도 자동완성으로 쓸 수 있다 */}
      <TypeClassComp startNumber={3} name='홍길동' check/>
      {/** 함수형 */}
      <TypeFunctionComp startNumber={0} check/>
      {/** 화살표함수형 */}
      <TypeArrowFunctionComp startNumber={1}/>
    </div>
  );
}

export default App;
