const Buttons = ({ children, style, onclick }) => {
  return (
    <button
      className={`${style} text-xs sm:text-sm lg:text-[16px] py-2 px-4 text-dark dark:text-light rounded-lg bg-hLight dark:bg-hDark flex items-center justify-center focus:ring-2 focus:ring-hLight dark:focus:ring-hDark ring-offset-4 ring-offset-light dark:ring-offset-dark duration-200 `}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Buttons;
