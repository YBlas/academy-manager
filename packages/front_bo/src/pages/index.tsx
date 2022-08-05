import type { NextPage } from "next";
import { useState } from "react";
import withApollo from "../apollo/withApollo";
import { ContentStart, LateralMenu } from "../components";
import { sections } from "../config";

const HomePage: NextPage = () => {
  //Example set cookie
  // import { useCookies } from "react-cookie";
  // const [cookie, setCookie, removeCookie] = useCookies(['token']);
  // setCookie('token', "NCC-1701", { path: '/' });
  // removeCookie('token', { path: '/' });
  // {cookie.token && console.log(cookie.token)}
  // {!cookie.token && console.log("Pues no hay token")}

  const [section, setSection] = useState<string>(sections[0].title);
  const [label, setLabel] = useState<string>(sections[0].links[0].label);

  return (
    <div>
      <LateralMenu
        sections={sections}
        changeLabel={setLabel}
        changeSection={setSection}
      />
      <ContentStart section={section} label={label} />
    </div>
  );
};

export default withApollo(HomePage);
