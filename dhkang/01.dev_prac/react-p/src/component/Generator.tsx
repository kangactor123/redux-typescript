function* generator() {
  console.log("1 출력");
  yield 1;
  console.log("2 출력");
  yield 2;
  console.log("3 출력");
  yield 3;
  console.log("4 출력");
  return 4;
}

function Genertor() {
  let generation = generator();

  const handleClick = () => {
    let item = generation.next();
    console.log(generation);
    console.log(item);
  };
  return (
    <div>
      <button onClick={handleClick}>next</button>
    </div>
  );
}

export default Genertor;
