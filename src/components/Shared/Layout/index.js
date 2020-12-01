import Head from "next/head";
import { Container } from "react-bootstrap";
import classes from "./style.module.css";
import classNames from "classnames";
const Layout = ({ title = "", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classNames("py-4", classes.container)}>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
