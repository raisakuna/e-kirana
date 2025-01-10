const LogoComponent = () => {
  return (
    <>
      <img
        className="block w-auto h-8 dark:hidden"
        src="/ekirana_nobg.png"
        alt=""
      />
      <img
        className="hidden w-auto h-8 dark:block"
        src="/ekirana_nobg.png"
        alt=""
      />
    </>
  );
};

export default LogoComponent;
