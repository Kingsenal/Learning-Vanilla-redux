import { createStore } from 'redux';

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

number.innerText = 0

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return count + 1
    case "MINUS":
     return count -1   
    default:
     return count;
    }
}

const countStore = createStore(countModifier);

const onChnage = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChnage)

const handlePlus = () => {
  countStore.dispatch({ type: "PLUS" })
}

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" })
}

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);