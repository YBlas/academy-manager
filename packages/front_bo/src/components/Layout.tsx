import { FC, ReactNode } from "react";
import { ContentStart, ErrorContent, LateralMenu } from ".";
import { sections } from "../config";

const Layout: FC<{
  children?: ReactNode;
  childrenHeader?: ReactNode;
  childrenSubHeader?: ReactNode;
  section: string;
  label: string;
  error?: number;
}> = ({
  children,
  section,
  error,
  childrenHeader,
  label,
  childrenSubHeader,
}) => {
  return (
    <div>
      <LateralMenu sections={sections} section={section} label={label} />
      {!error && (
        <ContentStart
          childrenSubHeader={childrenSubHeader}
          childrenHeader={childrenHeader}
          section={section}
        >
          {children}
        </ContentStart>
      )}
      {error && <ErrorContent error={error} />}
    </div>
  );
};

export default Layout;
