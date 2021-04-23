import NavBar from "../../landing/shared-components/NavBar";
import Footer from "../../landing/shared-components/Footer";

interface Props {
    sizeProps: "is-large" | "is-small",
    children?: ReactNode
}

const Layout = ({ children, sizeProps="is-large" }:Props) => (
    <>
        <NavBar sizeProps={sizeProps} tabList={}/>
            {children}
        <Footer/>
    </>
)