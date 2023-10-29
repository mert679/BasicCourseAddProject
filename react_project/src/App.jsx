import { useState } from 'react'
import './App.css'
import { Course } from './Course'

function getRandomCourse() {
    const course = ["Angular","Ccsharp","Bootstrap","Kompleweb"]
    return course[Math.floor(Math.random() * course.length)]
}
function App() {
  const [course, setCourses] = useState([])
  const [showCase,setShowCase] = useState(true)
  function AddCourse() {
    setCourses([...course,getRandomCourse()])
    setShowCase(true)
  }
  function RemoveCourse(){
    if (course.length === 0) {
      setShowCase(false);
    } else {
      const updatedCourses = [...course];
      updatedCourses.pop(); 
      setCourses(updatedCourses);
    }
  }

  return (
    <div className='App'>
    <div className="btn-wrapper">
      <button onClick={AddCourse}>Add Course</button>
      <button onClick={RemoveCourse}>Remove Course</button>
    </div>
    <div className='wrapper' style={{ display: showCase ? "flex":"none"}}>
    {
      course.map((course,index)=>{
          return  <Course key={index} course = {course} />
      })
    }
   </div>
    </div>
  )
}

export default App
