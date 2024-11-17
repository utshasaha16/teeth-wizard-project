const Modal = () => {
  const handleFormSubmit = (e) => {
      e.preventDefault()
      console.log(e);
  }
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form onSubmit={handleFormSubmit} className="space-y-3 p-4 ">
          <div>
          First Name :
          <input
            type="text"
            name="Fname"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs ml-4"
          />
          </div>
          <div>
          Last Name :
          <input
            type="text"
            name="Lname"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs ml-4"
          />
          </div>
          <div>
            Email :
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs ml-12"
          />
          </div>
          <div>
            Phone :
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="input input-bordered w-full max-w-xs ml-10"
          />
          </div>
          <div>
           Date :
          <input
            type="date"
            name="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs ml-12"
          />
          </div>
          <div>
            Address :
          <input
            type="text"
            name="address"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs ml-6"
          />
          </div>
          <button className="btn btn-primary w-full">Make Appointment</button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
