import React, { Component } from 'react';

// props 값을 가져오기 위해 interface로 지정해서 사용
interface CounterProps {
  startNumber: number;
  name?: string;
  check: boolean;
};

// state를 사용하기 위해서 interface를 지정해서 넣어야 한다
// interface에 이름과 타입이 없으면 쓸 수 없다
interface CounterState {
  number: number;
  text: string;
  array: number[];
}

// 쿨래스형의 제너릭의 자료형(타입)을 지정
// 자료형을 지정해주면 들어오는 props의 자료형을 알고 메소드를 쓸 수 있다
// 이름을 미리 지정했기 때문에 props의 이름을 자동완성으로 가져올 수 있다
// Component의 자료형으로 props와 stat를 지정할 때는 순서를 고정해서 import해야함
export default class TypeClassComp extends Component<CounterProps, CounterState> {

  // state를 사용하기 위해 constructor 생성
  // props의 자료형은 위에서 작성한 interface로 지정
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      number : props.startNumber,
      text: "hi",
      array: [1,2,3]
    }
  }

  // 이벤트 함수 안에 들어가있으면 e 객체의 자료형을 지정할 필요가 없지만,
  // 밖으로 꺼내서 쓰면 관련 이벤트의 자료형으로 작성
  // >> (e: React.ChangeEvent<HTMLInputElement>)
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({text: e.target.value})
  }

  handleNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({number: parseInt(e.target.value)})
  }

  render() {
    return (
      <div>
        <h3>TypeClassComp</h3>
        {/** render에서 화면에 출력되는 방식은 동일 */}
        <p>{this.props.startNumber}</p>
        <p>{this.props.name}</p>
        <p>{this.state.number}</p>
        {/** props와 boolean값 check를 받아와서 삼항연산자로 확인 미확인을 출력하세요 */}
        <p>{this.props.check ? "확인" : "미확인"}</p>
        {/** state에 배열값 [1,2,3]을 넣어 화면에 li태그로 출력하세요 */}
        {
          this.state.array.map((num)=>(
            <li>{num}</li>
          ))
        }

        <div style={{width: '300px', margin: 'auto', paddingBottom: '20px', border: '1px solid black'}}>
          <p>* 바뀌는 숫자 : {this.state.number}</p>
          <button 
            onClick={()=>{this.setState({number:this.state.number + 1})}}
          >
            +1
          </button>
          <br />
        </div>

        {/** 이벤트 객체의 값을 가져오는 이벤트 함수 */}
        <div style={{width: '300px', margin: 'auto', paddingBottom: '20px', border: '1px solid black'}}>
          <p>* 글자 작성 : {this.state.text}</p>
          <input 
            type="text" 
            onChange={this.handleChange}
          />
        </div>

        {/** input 태그에 숫자값을 넣으면 state의 num이 바뀜 */}
        <div style={{width: '300px', margin: 'auto', paddingBottom: '20px', border: '1px solid black'}}>
          <p>* 숫자 작성 : {this.state.number}</p>
          <input 
            type="number" 
            onChange={this.handleNum}
          />
        </div>
      </div>
    )
  }
}
