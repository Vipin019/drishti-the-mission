import React, { Component } from 'react'
import "./Registration.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from 'axios'
// import CommingSoon from "../../CommingSoon/CommingSoon";

function redirector(){
  window.location.href="/registred-success"
}

export default class Registration extends Component {

  constructor(){
    super()
    this.state={
      fullName: "",
      contactNo: "",
      email: "",
      targetExam: ""
    }
    this.changeFullName=this.changeFullName.bind(this)
    this.changeContactNo=this.changeContactNo.bind(this)
    this.changeEmail=this.changeEmail.bind(this)
    this.changeTargetExam=this.changeTargetExam.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

  changeFullName(event){
    this.setState({
      fullName: event.target.value
    })
  }
  changeContactNo(event){
    this.setState({
      contactNo: event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email: event.target.value
    })
  }
  changeTargetExam(event){
    this.setState({
      targetExam: event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const regestred={
      fullName: this.state.fullName,
      contactNo: this.state.contactNo,
      email: this.state.email,
      targetExam: this.state.targetExam
    }

    axios.post('http://localhost:4000/app/registration',regestred)
    .then(res=>console.log(res.data))

    this.state({
      fullName: "",
      enrollmentNo: "",
      link: ""
    })

  }

  render() {
    return (
      <div className="registration">
       <Navbar></Navbar>
       <form onSubmit={this.onSubmit}>
        <div className="form-group">
        <label for="inputName">Name : </label>
        <input type="text"
        placeholder='Full Name'
        id="inputName"
        onChange={this.changeFullName}
        value={this.state.fullName}
        class="form-control"
         />
         </div>
         <div className="form-group">
         <label for="inputContactNo">Contact Number : </label>
        <input type="tel"
        placeholder='Contact No.'
        id="inputContactNo"
        onChange={this.changeContactNo}
        value={this.state.contactNo}
        class="form-control"
         />
         </div>
         <div className="form-group">
         <label for="inputEmail">Email address : </label>
        <input type="email"
        placeholder='email019@gmail.com'
        id="inputEmail"
        onChange={this.changeEmail}
        value={this.state.email}
        class="form-control"
         />
         </div>
         <div className="form-group">
         <label for="inputTargetExam">Target Exam : </label>
        <input type="text"
        placeholder='For which exam you want to prepare'
        id="inputTargetExam"
        onChange={this.changeTargetExam}
        value={this.state.targetExam}
        class="form-control"
         />
         </div>
         <div className="form-group">
         <input id='upload__btn' type="submit" value="Submit" onClick={redirector} class="form-control btn"/>
        </div>
        </form>
        <Footer></Footer>
      </div>
    )
  }
}





/*

<form onSubmit={this.onSubmit}>
        <div className="form-group">
        <label for="inputName">Name : </label>
        <input type="text"
        placeholder='Full Name'
        id="inputName"
        onChange={this.changeFullName}
        value={this.state.fullName}
        class="form-control"
         />
         </div>
         <div className="form-group">
         <label for="inputContactNo">Contact Number : </label>
        <input type="tel"
        placeholder='Contact No.'
        id="inputContactNo"
        onChange={this.changeContactNo}
        value={this.state.contactNo}
        class="form-control"
         />
         </div>
         <div className="form-group">
         <label for="inputEmail">Email address : </label>
        <input type="email"
        placeholder='email019@gmail.com'
        id="inputEmail"
        onChange={this.changeEmail}
        value={this.state.email}
        class="form-control"
         />
         </div>
         <div className="form-group">
         <label for="inputTargetExam">Target Exam : </label>
        <input type="text"
        placeholder='For which exam you want to prepare'
        id="inputTargetExam"
        onChange={this.changeTargetExam}
        value={this.state.targetExam}
        class="form-control"
         />
         </div>
         <div className="form-group">
         <input id='upload__btn' type="submit" value="Submit" onClick={redirector} class="form-control btn"/>
        </div>
        </form>

*/ 



























// const Registration = (input) => {
//   const[userInput, setUserInput]=useState({
//     name:'',
//     contactNo:'',
//     email:'',
//     targetExam:''
//   })

//   function handleOnInput(event){

//   }
//   function handleSubmit(event){

//   }
//   function handleSubmit(event){
//     let enteredInput={
//       name:event.value,
//       contactNo:event.value,
//       email:"",
//       targetExam:""
//     }
//     setUserInput(enteredInput);
//   }
  


//   return (
//     <div className="registration">
//       <Navbar></Navbar>
//       <form>
//         <div class="form-group">
//           <label for="inputName">Name : </label>
//           <input
//             type="text"
//             class="form-control"
//             id="inputName"
//             placeholder="Enter name"
//             onChange={handleOnInput}
//             name='name'
//             value={input.name}
//           />
//         </div>
//         <div class="form-group">
//           <label for="inputContactNo">Contact Number : </label>
//           <input
//             type="tel"
//             class="form-control"
//             id="inputContactNo"
//             placeholder="Enter Contact No."
//             onChange={handleOnInput}
//             name='contactNo'
//             value={input.contactNo}
//           />
//         </div>
//         <div class="form-group">
//           <label for="inputEmail">Email address : </label>
//           <input
//             type="email"
//             class="form-control"
//             id="inputEmail"
//             placeholder="Enter email"
//             onChange={handleOnInput}
//           />
//         </div>
//         <div class="form-group">
//           <label for="inputTargetExam">Target Exam : </label>
//           <input
//             type="text"
//             class="form-control"
//             id="inputTargetExam"
//             placeholder="For which exam you want to prepare"
//             onChange={handleOnInput}
//           />
//         </div>
//         <div className="form-group">
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       </form>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Registration;
