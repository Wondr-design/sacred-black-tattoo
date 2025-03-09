import Card from "./components/Card";
const App = () => {
  return (
    <>
      <section
        className="bg-background w-[100vw] h-auto grid grid-rows-3 place-items-center sm:grid-cols-2 place-items-center"
        style={{ overflow: "hidden" }}
      >
        <Card color="red" />
        <Card color="red" />
        <Card color="red" />
        <Card color="red" />
        <Card color="blue" />
        <Card color="red" />
        <Card color="red" />
        <Card color="red" />
      </section>
    </>
  );
};

export default App;
