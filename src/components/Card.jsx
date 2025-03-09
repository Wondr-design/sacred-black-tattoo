const Card = ({ color }) => {
  return (
    <>
      <div className={`bg-${color}-500 w-full h-[30rem] rounded-[100vh]`}></div>
    </>
  );
};

export default Card;
