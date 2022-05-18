const OddEvenResult =({count}) =>{ //counter의 자식 컴포넌트가 되어, count값을  props로 받아온다.
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEvenResult;