# HooksPractice
studying hooks

어려워서 차근차근 말로 설명하면서 이해해야겠음

useState()는 state를 초기화시켜 주고 currentValue를 불러오고 changeValue 해준다.

state란 react에서 사용하는 컴포넌트 내에 유동적인 데이터를 표현하는 방식


#useInput()


import { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if(willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

- useInput() Hook은 initialValue와 validator를 매개변수로 받는다. (const name = useInput("Mr. ", maxlen);)

- useState()로 생성한 const [value, setValue].

 const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if(willUpdate) {
      setValue(value);
    }
  };
event가 발생할 때마다 호출되는 onChange 함수 내부에 const { target : { value } } = event; 선언.
validator 타입이 "function"이면 willUpdate를 validator(value)로 바꿔 준다.
validator는 maxLen이었고 value는 useState의 initialValue, 현재는 즉 "Mr. "인데

 <input placeholder="Name" {...name} />
 
여기에 선언된 onChange로 인해 value가 event이므로 value값이 변할 때마다 validator인 maxLen이 호출된다...
maxLen은 function이므로 willUpdate가 validator(value)로 변하고 maxLen은 value.length<=10이므로 10 이하일 때는 true기 때문에
if (willUpdate)가 실행되며 setValue(value)가 실행된다.
그렇지만 false, 즉 10 초과의 문자열이 들어오면 setValue()가 실행되지 않기 때문에 문자를 더이상 쓸 수가 없다...



#useTabs()



import React, { useState } from "react";

import "./styles.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
   return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;

- content가 주어지고 우리는 content 안의 모든 요소에 대해 button을 생성한다.

{content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      
section마다 tab을 button의 내용으로 입력해 주고 버튼을 클릭할 때마다 changeItem(index)를 실행한다.
changeItem은 useTabs(0, content);의 return값으로 전해지는 값을 사용하는데 그것은

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

여기의 changeItem에서 온다. allTabs, 즉 content가 배열이 아니라면 함수를 끝내 버리는 체크를 한 번 해 준 뒤에 initialTab을 이용해 currentIndex를 생성한다.
return의 currentItem을 이용해

<div>{currentItem.content}</div>

content를 출력해야 하므로 initialTab이 0일때는 currentIndex도 0며 allTabs[0]의 content, 즉

{
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  }
  
이걸 이용하게 된다. 하지만 버튼을 클릭해서 onClick() 함수가 호출되면 changeItem(index)가 이루어지는데 그것은 setCurrentIndex를 발생시키고 그것은 곧 useState를 발생시켜 currentIndex를 1로 바꿔줄 것이다.


개어렵



--

#useEffect

리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다. 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태로 보아도 무방합니다.

useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.currnet) {
        element.current.addEventListener("click", onClick);
      }
    };
  }, []);

useEffect() 안에 fucntion이 들어 있다면 component가 Mount될 때 그 함수를 실행할 것이다. 그리고 Unmount 될 때 return 할 것이다.


#useRef()

reference란 component 내의 요소를 선택할 수 있게 해 준다. 자바스크립트의 document.getElementById()랑 유사하다고 생각하면 됨.
const input = useRef(); 로 선언해 준 다음에 input.current~~로 사용해 주면 된다. 그러니까 기본적으로 React component는 상태가 바뀔 때마다 렌더링 되는데 current 속성을 가지고 있는 값은 변화해도 렌더링되지 않는다.
component 내에서는 <input ref={input}> 이런 식으로 사용해 준다.

