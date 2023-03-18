// import React, { useState } from 'react';

// export default function renderContact() {
//     // Here we set the state variables using `useState`
//     const [fullName, setfullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [id, setId] = useState(0);

//     const handleInputChange = (e) => {
//         // Getting the value and name of the input which triggered the change
//         const { name, value } = e.target;
//         if (name === 'fullName') {
//             setfullName(value)
//         }
//         else if (name === 'email') {
//             setEmail(value)
//         }
//         else if (name === 'message') {
//             setMessage(value)
//         }
//     };

//     const handleIncrease = () => {
//         setId((prevId) => prevId + 1);
//         localStorage.setItem("myMessages", id.toString());
//     };

//     const handleFormSubmit = (e) => {
//         // Preventing the default behavior of the form submit (which is to refresh the page)
//         e.preventDefault();
//         handleIncrease();
//         // Alert the user their message was submited successfully, and clear the inputs/textarea
//         alert(`Thank you for your message ${fullName}!`);
//         setfullName('');
//         setEmail('');
//         setMessage('')
//     };

//     return (
//         <>
//             <form id="contact" name="newMessage" method="post" action="newMessage" className="card-body cardbody-color p-lg-2">
//                 <div className="form-outline mb-4">
//                     <input className="form-control form-control-lg"
//                         value={fullName}
//                         name="fullName"
//                         onChange={handleInputChange}
//                         type="text"
//                         placeholder="Name"
//                         required
//                     />
//                 </div>
//                 <div className="form-outline mb-4">
//                     <input className="form-control form-control-lg"
//                         value={email}
//                         name="email"
//                         onChange={handleInputChange}
//                         type="email"
//                         placeholder="Email Address"
//                         required
//                     />
//                 </div>
//                 <div className="form-outline mb-4">
//                     <textarea className="fs-small form-control form-control-lg"
//                         value={message}
//                         name="message"
//                         onChange={handleInputChange}
//                         type="text"
//                         rows="6"
//                         required
//                     ></textarea>
//                 </div>
//                 <div className="d-flex justify-content-center mt-1">
//                     <button type="button" className="gradient light-shades btn ps-3 pe-3 d-flex justify-content-center flex-nowrap mb-2 mt-4 width-20"
//                         onClick={handleFormSubmit}>
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </>
//     )
// }