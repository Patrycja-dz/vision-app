import Button from "./components/UI/Button.jsx";
import Search from "./components/Form/Search.jsx";

function App() {
  return (
    <>
      <main class="container m-auto text-center flex justify-between flex-col h-lvh">
        <div class={"mt-24"}>
          <div id="uploader"></div>
          <p class={"p-4 text-3xl"}>
            <label htmlFor={"files"} class={"text-teal-700/85"}>
              Upload an image
            </label>
            <span> to ask question about</span>
            <input id="files" accept={"image/*"} type="file" hidden />
          </p>
          <p class={"text-balance text-xl"}>
            What do you want to know about image?
          </p>
        </div>
        <section class={"mb-10  w-full flex flex-col max-h-96 scroll-y-auto"}>
          <div class={"flex gap-10"}>
            <Search />
            <Button>Check</Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
