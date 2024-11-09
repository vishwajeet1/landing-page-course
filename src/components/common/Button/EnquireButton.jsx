const EnquireButton = ({ children, customCss }) => {
  return (
    <button className={["enquire-button px-8", customCss].join(" ")}>
      {children}
    </button>
  );
};
export default EnquireButton;
