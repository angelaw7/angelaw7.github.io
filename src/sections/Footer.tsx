import Contact from "../components/Contact";

export default function Footer() {
  return (
    <div className="h-42">
      <Contact showBgColour />
      <div className="bg-stone-100" />
      <p className="text-center mb-10">
        by Angela Wang &#40;angelaw7&#41;, 2023
      </p>
    </div>
  );
}
