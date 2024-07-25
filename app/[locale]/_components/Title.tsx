export const Title = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="relative scroll-m-20 text-4xl font-bold tracking-tight text-customGold/20 w-72">
        <span className="absolute -top-2 -left-3.5 -z-10 select-none">{title}</span>
      </div>
      <h4 className="scroll-m-20 text-3xl font-bold tracking-tight text-customGold">{title}</h4>
    </div>
  );
};
