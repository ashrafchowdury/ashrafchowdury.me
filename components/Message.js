import React, { useState } from "react";
import Button from "../utils/components/Button";
import { toast } from "react-hot-toast";
const Message = () => {
  const [form, setform] = useState({
    name: "",
    to: "",
    from: "",
    subject: "",
    message: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setform({ ...form, [name]: value });
  };
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const { name, from, subject, message } = form;
    if (!name && !from && !subject && !message) {
      toast.error("Fillup all the fileds");
    }
  };

  return (
    <section className=" w-[90%] mx-auto mt-16 mb-28 text-center">
      <form
        onSubmit={handleEmailSubmit}
        className=" dark:text-light flex flex-col space-y-5 my-5 lg:w-[850px] mx-auto"
      >
        <input
          type="name"
          name="name"
          value={form.name}
          onChange={handleInput}
          placeholder="Name"
          className=" text-sm lg:text-[16px] py-2 lg:py-[14px] px-6 rounded-md bg-hLight dark:bg-hDark focus:ring-2 duration-500 outline-none"
        />
        <input
          type="email"
          name="from"
          value={form.from}
          onChange={handleInput}
          placeholder="Email"
          className=" text-sm lg:text-[16px] py-2 lg:py-[14px] px-6 rounded-md bg-hLight dark:bg-hDark focus:ring-2 duration-500 outline-none"
        />
        <input
          type="yext"
          name="subject"
          value={form.subject}
          onChange={handleInput}
          placeholder="Subject"
          className=" text-sm lg:text-[16px] py-2 lg:py-[14px] px-6 rounded-md bg-hLight dark:bg-hDark focus:ring-2 duration-500 outline-none"
        />
        <textarea
          placeholder=" Write Message"
          name="message"
          value={form.message}
          onChange={handleInput}
          className=" h-40 lg:h-[200px] text-sm lg:text-[16px] py-5 px-4 rounded-md bg-hLight dark:bg-hDark focus:ring-2 duration-500 outline-none"
        ></textarea>
        <Button style="py-[7px] text-sm lg:text-[16px] !mt-16">
          Submit <i className="fa-solid fa-plane ml-2"></i>
        </Button>
      </form>
    </section>
  );
};

export const Input = ({ handleInput, name }) => {
  return (
    <input
      type="email"
      name="from"
      value={form.name}
      placeholder={name}
      className=" text-sm lg:text-[16px] py-2 lg:py-[10px] px-4 rounded-md bg-light dark:bg-hDark border dark:border-none  outline-none"
      onChange={handleInput}
    />
  );
};

export default Message;
