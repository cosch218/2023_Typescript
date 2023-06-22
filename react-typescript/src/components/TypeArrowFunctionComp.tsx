import React from "react";

interface CounterProps {
  startNumber: number;
}

// 화살표함수의 컴포넌트는 함수형 컴포넌트와 동일하게 매개변수에서 interface 자료형을 설정하여 사용할 수도 있고,
// 클래스형 컴포넌트와 비슷하게 리액트에서 제공하는 React.FC<Props>를 이용하여 작성할 수 있다
const TypeArrowFunctionComp: React.FC<CounterProps> = (props) => {
  return (
    // useState()는 사용방식이 동일
    <div>
      <h3>TypeArrowFunctionComp</h3>
      <p>{props.startNumber}</p>
    </div>
  )
}

export default TypeArrowFunctionComp