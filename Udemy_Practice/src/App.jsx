export default function App(){
  async function getAdvise() {
    const res=await fetch("https://api.adviceslip.com/advice");
    const data=await res.json();
    console.log(data.slip.id);
    
  }
  return(
    <div>
      <h1>Hello</h1>
      <button onClick={getAdvise}> Get Advise</button>
      </div>
  )
}