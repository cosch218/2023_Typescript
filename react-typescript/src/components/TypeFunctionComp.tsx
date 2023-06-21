import React, { useState } from 'react'

// props의 값을 사용하기 위해서 interface 작성
interface CounterProps {
  startNumber : number;
  name? : string;
  check : boolean;
}

// 매개변수로 받아오는 props 타입 지정 (props: CounterProps)
export default function TypeFunctionComp(props: CounterProps) {
  // interface로 작성한 props 속성을 알고 있기 때문에 ctrl+space를 이용해서 이름을 찾을 수 있다
  const {startNumber, name, check} = props;

  // 현재 넣어준 값으로 타입이 고정
  const [text, setText] = useState("");
  // 만약 count에 들어갈 타입이 두개 이상이라면 <> 안에 직접 적용
  const [count, setCount] = useState<number|undefined>(0)
  const [array, setArray] = useState<number[]>([1,2,3]);
  return (
    <div>
      <h3>TypeFunctionComp</h3>
      <p>{props.startNumber}</p>
      <p>{props.name}</p>
      <p>{count}</p>
      {/** props로 check를 boolean 값으로 받아오기 */}
      <p>{check ? "확인" : "미확인"}</p>
      {/** useState로 [1,2,3] 만들어서 map으로 출력하기 */}
      {
        array.map((num)=>(
          <li>{num}</li>
        ))
      }
    </div>
  )
}
