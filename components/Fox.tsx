export default function Fox(props: FoxProps) {
  const { height, width, fill, opacity } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 183 141"
      fill={fill}
      opacity={opacity}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M169.128 79.2517L93.282 132.306L93.282 26.1972L169.128 79.2517Z"
        fill={fill}
      />
      <path
        d="M18.0228 79.2517L93.869 132.727L93.869 25.7761L18.0228 79.2517Z"
        fill={fill}
      />
      <path
        d="M23.4015 11.7649L70.7505 52.3859L30.2179 72.7634L23.4015 11.7649Z"
        fill={fill}
      />
      <path
        d="M159.746 11.2525L154.339 72.384L113.346 52.8942L159.746 11.2525Z"
        fill={fill}
      />
    </svg>
  );
}

interface FoxProps {
  height: string;
  width: string;
  fill: string;
  opacity?: number;
}
