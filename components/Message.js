import React, { useState, useRef } from "react";
import Buttons from "../utils/components/Buttons";
import { toast } from "react-hot-toast";
import { BiSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const Message = () => {
  const [form, setform] = useState({
    name: "",
    from: "",
    subject: "",
    message: "",
  });
  const ref = useRef();
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setform({ ...form, [name]: value });
  };
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const { name, from, subject, message } = form;
    if (!name || !from || !subject || !message) {
      toast.error("Fillup all the fileds");
    } else {
      try {
        const sendMail = await emailjs.sendForm(
          `${process.env.NEXT_PUBLIC_EMAIL_SERVICE}`,
          `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE}`,
          ref.current,
          `${process.env.NEXT_PUBLIC_EMAIL_KEY}`
        );
        toast.success("Send It Successfully");
        setform({
          name: "",
          from: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.log(error);
        toast.error("Something was wrong!");
      }
    }
  };

  return (
    <section className=" w-[90%] mx-auto mt-16 mb-28 text-center">
      <form
        ref={ref}
        onSubmit={handleEmailSubmit}
        className=" dark:text-light flex flex-col space-y-3 md:space-y-5 my-5 w-full md:w-[650px] lg:w-[850px] mx-auto"
      >
        <input
          type="name"
          name="name"
          value={form.name}
          onChange={handleInput}
          placeholder="Name"
          className=" text-sm lg:text-[16px] py-[10px] lg:py-[14px] px-6 rounded-md bg-hLight dark:bg-hDark focus:ring-2 ring-primary duration-500 outline-none"
        />
        <input
          type="email"
          name="from"
          value={form.from}
          onChange={handleInput}
          placeholder="Email"
          className=" text-sm lg:text-[16px] py-[10px] lg:py-[14px] px-6 rounded-md bg-hLight dark:bg-hDark focus:ring-2 ring-primary duration-500 outline-none"
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleInput}
          placeholder="Subject"
          className=" text-sm lg:text-[16px] py-[10px] lg:py-[14px] px-6 rounded-md bg-hLight dark:bg-hDark focus:ring-2 ring-primary duration-500 outline-none"
        />
        <textarea
          placeholder=" Write Message"
          name="message"
          value={form.message}
          onChange={handleInput}
          className=" h-40 lg:h-[200px] text-sm lg:text-[16px] py-5 px-4 rounded-md bg-hLight dark:bg-hDark focus:ring-2 ring-primary duration-500 outline-none"
        ></textarea>
        <Buttons style=" py-2 md:py-[12px] px-12 md:px-20 text-sm lg:text-[16px] !mt-16">
          Submit <BiSend className="ml-2 text-lg md:text-xl" />
        </Buttons>
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
