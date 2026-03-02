import React from 'react'
import User from './components/User'

const App = () => {
   const arr=[1,2,3];
// const arr =[
//   {
//     user:'nitin',
//     age:21,

//   },
//   {
//     user:'hello',
//     age:22,

//   }
// ]
  // 
  return (
    <div className='parent'>App
    {/* <User name={arr[0]}/>
    <User name={arr[1]}/>
    <User name={arr[2]}/> */}
    {arr.map(function(elem){
      // console.log(elem.user)
      // return  elem
      return <User/>
    })}
    </div>
    
  )
}

export default App