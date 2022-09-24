import React,{useState} from "react";
import "./Registration.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import CommingSoon from "../../CommingSoon/CommingSoon";

const Registration = (input) => {
  const[userInput, setUserInput]=useState({
    name:'',
    contactNo:'',
    email:'',
    targetExam:''
  })

  function handleOnInput(event){

  }
  function handleSubmit(event){

  }
  function handleSubmit(event){
    let enteredInput={
      name:event.value,
      contactNo:event.value,
      email:"",
      targetExam:""
    }
    setUserInput(enteredInput);
  }
  


  return (
    <div className="registration">
      <Navbar></Navbar>
      <form>
        <div class="form-group">
          <label for="inputName">Name : </label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            placeholder="Enter name"
            onChange={handleOnInput}
            name='name'
            value={input.name}
          />
        </div>
        <div class="form-group">
          <label for="inputContactNo">Contact Number : </label>
          <input
            type="tel"
            class="form-control"
            id="inputContactNo"
            placeholder="Enter Contact No."
            onChange={handleOnInput}
            name='contactNo'
            value={input.contactNo}
          />
        </div>
        <div class="form-group">
          <label for="inputEmail">Email address : </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="Enter email"
            onChange={handleOnInput}
          />
        </div>
        <div class="form-group">
          <label for="inputTargetExam">Target Exam : </label>
          <input
            type="text"
            class="form-control"
            id="inputTargetExam"
            placeholder="For which exam you want to prepare"
            onChange={handleOnInput}
          />
        </div>
        <div className="form-group">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Registration;
