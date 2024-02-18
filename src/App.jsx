import Button from "./components/UI/Button.jsx";
import Search from "./components/Form/Search.jsx";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

function App() {
  const [file, setFile] = createSignal();
  function handleFileChange(event) {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      setFile(() => selectedFile);
      const formData = new FormData();
      formData.append("image", selectedFile);
    }
  }
  return (
    <>
      <main class="container m-auto text-center flex justify-between flex-col h-lvh">
        <div class={"mt-24"}>
          <div id="uploader" class={"h-64 w-64 border-2 m-auto"}>
            {file() && (
              <img src={URL.createObjectURL(files())} alt="Selected Image" />
            )}
          </div>
          <p class={"p-4 text-3xl"}>
            <label for={"files"} class={"text-teal-700/85"}>
              Upload an image
            </label>{" "}
            <input
              id="files"
              accept={"image/*"}
              type="file"
              hidden
              onChange={handleFileChange}
            />
            <span> to ask question about</span>
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
