import { Topbar } from '../components/topbar'
import style from '../styles/Eom.module.css'

export  const Eom = ({employee}) => {
    console.log(employee)
  return (
     
    <div className="page-container">
           <Topbar />
    <div className={style.main}>
        <h1>Employee of the month</h1>
    

    <div className={style.employeeOfTheMonth}>
        <h3>{employee.name}</h3>
        <h6>{employee.postion}</h6>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmZNIubBUPlotCEtN9fylvJ-PPX1S8FE2KA&usqp=CAU" />
        <p>{employee.description}</p>
    </div>
    </div>
    </div>
  )
}


export const getServerSideProps = async pageContext => {
const apiResponse =await fetch(
    'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
);
const employee = await apiResponse.json();
return {
    props : {
        // employee : employee
        employee 
    }
}
}

export default Eom