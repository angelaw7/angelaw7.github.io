export default function Heading({ name, color }: HeadingProp) {
  return (
    <div
      className={
        color + " pb-3 pt-5 mb-6 border-b-2 border-r-2 border-slate-100"
      }
    >
      <h2 className="text-3xl text-center font-bold">{name}</h2>
    </div>
  );
}

interface HeadingProp {
  name: string;
  color: string;
}
