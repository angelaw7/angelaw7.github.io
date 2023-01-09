import Fox from "./Fox";

export default function Skill(props: SkillProp) {
  const { name, value } = props;
  const arr = [];
  for (let i = 0; i < value; i++) {
    arr.push(true);
  }
  for (let i = 0; i < 5 - value; i++) {
    arr.push(false);
  }

  return (
    <div className="flex flex-row">
      <p>{name}:</p>
      <div className="flex flex-row ml-2">
        {arr.map((item, idx) =>
          item === true ? (
            <Fox key={idx} height="20" width="20" fill="white" />
          ) : (
            <Fox key={idx} height="20" width="20" fill="white" opacity={0.3} />
          )
        )}
      </div>
    </div>
  );
}

interface SkillProp {
  name: string;
  value: number;
}
