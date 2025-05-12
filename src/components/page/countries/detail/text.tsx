interface TextProp {
  label: string;
  subLabel: string;
}

export default function Text({ label, subLabel }: TextProp) {
  return (
    <p className="font-semibold">
      {label}: <span className="font-thin">{subLabel}</span>
    </p>
  );
}
