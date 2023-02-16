import Comp from "./Comp"
const Student = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <Comp name={props.name}/>
    </div>
  )
}
// const Student = ({name,age}) => {
//   return (
//     <div>
//     <h1>{name}</h1>
//     <h1>{age}</h1>

//     </div>
    
//   )
// }

export default Student