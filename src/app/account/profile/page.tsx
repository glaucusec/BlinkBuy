import React from "react";
import Button from "../../../components/buttons/Button";

function page() {
  return (
    <div className="">
      <form action="">
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-3 flex flex-col">
            <label htmlFor="first-name">First Name</label>
            <input
              className="border rounded-xl p-3 focus:outline-none focus:border-blinkblue"
              type="text"
              name="first-name"
              required
              placeholder=""
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="last-name">Last Name</label>
            <input
              className="border rounded-xl p-3 focus:outline-none focus:border-blinkblue"
              type="text"
              name="last-name"
              placeholder=""
            />
          </div>
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border rounded-xl p-3 focus:outline-none focus:border-blinkblue"
            type="text"
            name="email"
            placeholder=""
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            className="border rounded-xl p-3 focus:outline-none focus:border-blinkblue"
            type="text"
            name="mobile"
            placeholder=""
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="dob">Date or Birth</label>
          <input
            className="border rounded-xl p-3 focus:outline-none focus:border-blinkblue"
            type="date"
            name="dob"
            placeholder=""
          />
        </div>
        <div className="mb-3 flex flex-row gap-4">
          <span className="">Gender</span>
          <div className="flex flex-row gap-2">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
      </form>
      <div className="">
        <Button text="Save Changes"></Button>
      </div>
    </div>
  );
}

export default page;
