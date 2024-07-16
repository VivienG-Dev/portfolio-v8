import React from "react";

const SideProjectLayout: React.FC<{
  children: React.ReactNode;
  projectId: string;
}> = ({ children, projectId }) => {
  return (
    <div className="side-project-layout">
      <h1>Side Project: {projectId}</h1>
      <div className="content">{children}</div>
      {/* Add any other layout elements here */}
    </div>
  );
};

export default SideProjectLayout;
