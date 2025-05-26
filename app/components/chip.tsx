type ChipProps = {
  label: string;
};

const Chip = ({ label }: ChipProps) => {
  return (
    <div className="rounded-2xl px-3 py-0.5 text-[14px] bg-gradient-to-br from-primary to-secondary text-black">
      {label}
    </div>
  );
};

export default Chip;
