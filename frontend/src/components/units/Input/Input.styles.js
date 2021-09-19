import styled from "styled-components";
import Colors from "theme/Colors";
import tw, {theme} from "twin.macro";

export const InputStyled = styled.div`
	&.createNewAd {
		${tw`flex mb-4`};
		//display: flex;
		@media screen and (max-width: 600px) {
			flex-direction: column;
		}
		//margin-bottom: 15px;
	}

	label {
		${tw`pt-0.5	pr-11 pb-0 pl-0`};
		//padding: 3px 45px 0 0;
		color: ${theme`colors.lightGrey`};
	}

	.inputsContainer {
		${tw`flex flex-col`};
		/*display: flex;
		flex-direction: column;*/
	}
`;

export const StyledIconInput = styled.div.attrs({
	className:
		"flex flex-row items-center flex-nowrap rounded-md border border-solid border-gray-400 p-1.5 h-10 w-72",
})`
	/*display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
	border-radius: 5px;
	border: 1px solid #dddddd;
	width: 18.6rem;
	height: 2.6rem;
	padding: 5px;*/
	&:focus-within {
		${tw`focus:outline-none border-2 border-solid border-black`};
		/*outline: 0 none;
		border: 3px solid #000 !important;*/
	}
	&.error {
		${tw`border-solid border-red-600 border text-gray-600`};
		/*border: 1px solid ${Colors.redColor};
		color: #7d868b;*/
	}
	&.createNewAd {
		${tw`border border-solid border-gray-600`};
		//border: 1px solid #707070;
	}

	&.styledIcon {
		${tw`flex mr-1.5 w-5`};
		/*display: flex;
		margin-right: 6px;*/
		color: ${theme`colors.lightGrey`};
		//flex-basis: 20px;
	}
`;

export const StyledInput = styled.input.attrs({
	className: "border-none	w-72 flex text-sm text-gray-800	p-3	",
})`
	font: normal normal normal 16px/32px Helvetica Neue;
	max-height: 80%;
	/*width: 18.6rem;
	border: none;
	display: flex;
	font-size: 14px;
	color: #393939;
	padding: 0.75rem;*/
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	&:focus-within {
		${tw`outline-none border-none`};
		/*outline: 0 none;
		border: none;*/
	}
	&.error {
		${tw`border-none outline-none text-red-500`};
		color: ${theme`colors.darkOrange`};
		/*border: none;
		outline: 0 none;*/
	}
`;

export const StyledError = styled.small.attrs({
	className: "text-red-600 absolute left-0 visible",
})`
	color: ${theme`colors.redColor`};
	/*position: absolute;
	left: 0;
	visibility: visible;*/
	&.errorProfile {
		${tw`static`};
		//position: static;
	}
`;
