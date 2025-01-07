const LogoComponent = () => {
  return (
    <>
      <img
        className="block w-auto h-8 dark:hidden"
        src="public/ekirana_nobg.png"
        alt=""
      />
      <img
        className="hidden w-auto h-8 dark:block"
        src="public/ekirana_nobg.png"
        alt=""
      />
    </>
  );
};

export default LogoComponent;
