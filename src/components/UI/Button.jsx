export default function Button(props) {
  return (
    <button class="bg-teal-600/85 text-white px-8 py-2 rounded-md">
      {props.children}
    </button>
  );
}
