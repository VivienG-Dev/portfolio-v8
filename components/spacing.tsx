export type SpacingProps = {
  height?: "sm" | "md" | "lg";
};

export const Spacing = ({ height = "md" }: SpacingProps) => {
  const getHeightClass = () => {
    switch (height) {
      case "sm":
        return "h-4 lg:h-8";
      case "md":
        return "h-8 lg:h-16";
      case "lg":
        return "h-16 lg:h-32";
      default:
        return "h-8 lg:h-16";
    }
  };

  return <div className={getHeightClass()} />;
};
