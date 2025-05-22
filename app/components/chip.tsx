type ChipProps = {
  label: string;
};

const Chip = ({ label }: ChipProps) => {
  return (
    <div className="border border-black rounded-2xl px-3 py-0.5 text-lg bg-gradient-to-br from-primary to-secondary text-black">
      {label}
    </div>
  );
};

export default Chip;
