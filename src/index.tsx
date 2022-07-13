import ReactDOM from "react-dom";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import MainContent from "./components/MainContent";

ReactDOM.render(<PageHeader />, document.getElementById("page-header"));
ReactDOM.render(<MainContent />, document.getElementById("main-content"));
ReactDOM.render(<PageFooter />, document.getElementById("page-footer"));
