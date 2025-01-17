import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "assets/fonts/Korb/KorbBold.otf";
import "assets/fonts/HelveticaNeue/Pragmatica-ExtraLight.ttf";
import "assets/css/normalize.css";
import App from "./App";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
