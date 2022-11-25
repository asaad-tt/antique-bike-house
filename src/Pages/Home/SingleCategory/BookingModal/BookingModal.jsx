import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);
  const {
    title,
    name,
    img,
    originalPrice,
    resalePrice,
    condition,
    useDuration,
    location,
    postedTime,
    sellersName,
    description,
  } = product;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const itemName = form.itemName.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const meetingLocation = form.meetingLocation.value;

    const booking = {
      name,
      email,
      itemName,
      price,
      phone,
      meetingLocation,
      img,
    };

    fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("booking confirmed", { autoClose: 800 });
          setProduct(null);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Category: {title}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="itemName"
              type="text"
              placeholder="item name"
              defaultValue={name}
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="price"
              type="text"
              placeholder="item price"
              defaultValue={resalePrice}
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="meetingLocation"
              type="text"
              placeholder="meeting location"
              className="input w-full input-bordered"
            />

            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
