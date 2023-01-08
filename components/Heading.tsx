export default function Heading({ name, color }: HeadingProp) {
  return (
    <div className={color + " pt-2 mb-6"}>
      <h2 className="text-3xl text-center font-bold">{name}</h2>
    </div>
  );
}

interface HeadingProp {
  name: string;
  color: string;
}
