import { isNil } from "lodash-es";
import { observer } from "mobx-react";
import { AnimatedView } from "@gluestack-style/animation-resolver";
import { Box, CheckCircleIcon, PresenceTransition, Spinner, Text, useToast, VStack } from "@gluestack-ui/themed";
import { styled, useToken } from "@gluestack-style/react";
import React, { useEffect, useState, useMemo } from "react";
import { useWindowDimensions } from "react-native";

import ToastAlert from "./ToastAlert.jsx";
import CheckConnection from "../utils/CheckConnection.js";

var loadingTimer = null;

const hexToRgbA = (hex) => {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split("");
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = "0x" + c.join("");
		return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.2)";
	}
	throw new Error("Bad Hex");
};

function Loader(props) {
	const { height: screenHeight, width: screenWidth } = useWindowDimensions();
	const { queryInfo = {}, showSuccessMsg, apiLoadingInfo: loading_api, apiErrorInfo: error_api, children } = props;
	const { loading: loading_graphQL, error: error_graphQL, query } = queryInfo;
	const [showStatus, setShowStatus] = useState(loading_graphQL || loading_api);
	const [success, setSuccess] = useState(false);
	const toast = useToast();
	let toast_network_request_failed = "network-request-failed";
	let toast_session_expired = "session-expired";
	let toast_server_error = "server-error";
	let toast_api_error = "api-error";

	//console.log("L :", loading, " E :", error);
	//console.log("showStatus : ", showStatus);
	//console.log("SSSSuccess : ", success);
	//console.log("showSuccessMsg : ", showSuccessMsg);

	useEffect(() => {
		//console.log('Loader >> useEffect >> Loading : ', loading);
		const _isLoading = loading_graphQL || loading_api;
		if (!showStatus && _isLoading) {
			//console.log("Loader >> useEffect >> SHOW Status");
			setShowStatus(true);
		}
		if (showStatus && !_isLoading) {
			if (showSuccessMsg) {
				//console.log("Loader >> useEffect >> HIDE Status >> showSuccessMsg");
				const _isError = !isNil(error_graphQL) || !isNil(error_api);
				//console.log("Loader >> useEffect >>  HIDE Status >> showSuccessMsg >> error_graphQL, error_api >>", error_graphQL, error_api);
				//console.log("Loader >> useEffect >>  HIDE Status >> showSuccessMsg >> _isError, _isLoading >>", _isError, _isLoading);
				if (!_isError && !_isLoading) {
					console.log("Loader >> useEffect >> Ready to show Success..");
					setSuccess(true);
					setTimeout(() => {
						setShowStatus(false);
					}, 2000);
					setTimeout(() => {
						setSuccess(false);
					}, 2600);
				} else {
					setShowStatus(false);
				}
			} else {
				//console.log("Loader >> useEffect >> HIDE Status");
				setTimeout(() => {
					setShowStatus(false);
				}, 1000);
			}
		}

		if (showSuccessMsg) {
			const _isError = !isNil(error_graphQL) || !isNil(error_api);
			if (!_isError && !loading_graphQL) {
				//console.log("Ready to show Success..");
				//loadingTimer && clearTimeout(loadingTimer);
				setShowStatus(true);
				setSuccess(true);
				setTimeout(() => {
					setShowStatus(false);
				}, 2000);
				setTimeout(() => {
					setSuccess(false);
				}, 2600);
			}
		}
	}, [error_graphQL, loading_graphQL, error_api, loading_api, showSuccessMsg]);

	useEffect(() => {
		const errorInfo = !(isNil(error_graphQL) || !error_graphQL) ? error_graphQL : error_api;
		if (errorInfo) {
			console.log("========== Error Start ==========");
			console.log({ error: errorInfo });
			console.log(errorInfo.response);
			console.log("========== Error End ==========");
			if (errorInfo.message == "Network request failed") {
				console.log("Network request failed", errorInfo.message);
				if (!toast.isActive(toast_network_request_failed)) {
					toast.show({
						duration: 5000,
						render: ({ id }) => {
							toast_network_request_failed = id;
							return (
								<ToastAlert
									id={id}
									title="We're sorry, but we're having trouble connecting to the server right now."
									description='Please check your internet connection and try again.'
									variant='subtle'
									isClosable={true}
									onClose={() => toast.close(id)}
								/>
							);
						},
					});
				}
				if (query) {
					CheckConnection.PostConnectionHandler = () => {
						if (!query.queryKey.includes("mutation")) {
							query.refetch();
						}
					};
				}
				return;
			} else if (errorInfo.response?.status == 401) {
				console.log("Session Expired", errorInfo.response?.status);
				if (!toast.isActive(toast_session_expired)) {
					toast.show({
						duration: 5000,
						render: ({ id }) => {
							toast_session_expired = id;
							return (
								<ToastAlert
									id={id}
									title='Session Expired'
									description='Redirecting to login screen.'
									variant='subtle'
									isClosable={true}
									onClose={() => toast.close(id)}
								/>
							);
						},
					});
				}
				setTimeout(() => {
					console.log("logout");
				}, 3100);

				return;
			} else if (errorInfo.type === "ApiError") {
				console.log("Api Error", errorInfo.message);
				if (!toast.isActive(toast_api_error)) {
					toast.show({
						duration: 5000,
						render: ({ id }) => {
							toast_api_error = id;
							return (
								<ToastAlert
									id={id}
									title={errorInfo.name}
									description={errorInfo.message}
									variant='subtle'
									isClosable={true}
									onClose={() => toast.close(id)}
								/>
							);
						},
					});
				}
			} else {
				console.error("Something went wrong IF", { error: errorInfo });
				console.error("error message ->", errorInfo.message);
				console.log("error response ->", errorInfo.response);
				if (!toast.isActive(toast_server_error)) {
					toast.show({
						duration: 5000,
						render: ({ id }) => {
							toast_server_error = id;
							return (
								<ToastAlert
									id={id}
									title="We're sorry, but we're having trouble processing your request"
									description='Please try again later.'
									variant='subtle'
									isClosable={true}
									onClose={() => toast.close(id)}
								/>
							);
						},
					});
				}
			}
		}
	}, [error_graphQL, error_api]);

	const ParentBox = useMemo(
		() =>
			styled(AnimatedView, {
				":initial": {
					opacity: 1,
				},
				":animate": {
					x: 0,
				},
				":exit": {
					opacity: 0,
				},
			}),
		[AnimatedView]
	);

	const ChildBox = useMemo(
		() =>
			styled(AnimatedView, {
				":initial": {
					opacity: 0,
					scale: 0,
				},
				":animate": {
					opacity: 1,
					scale: 1,
				},
			}),
		[AnimatedView]
	);

	const LoaderBox = useMemo(
		() =>
			styled(AnimatedView, {
				":initial": {
					opacity: 1,
					x: screenWidth,
				},
				":animate": {
					x: 0,
				},
				":exit": {
					opacity: 0,
				},
			}),
		[AnimatedView]
	);

	const bgColorHEX = useToken("colors", "coolGray600");

	const bgColorRGBA = useMemo(() => hexToRgbA(bgColorHEX), [bgColorHEX]);

	return (
		<>
			{showStatus && (
				<ParentBox
					position='absolute'
					justifyContent='center'
					alignItems='center'
					left='$0'
					right='$0'
					top='$0'
					bottom='$0'
					zIndex={2}
					style={{ backgroundColor: bgColorRGBA }}>
					<LoaderBox>
						<Box key={"ParentBoxStack"} p={8} bg='$white' shadow={5} rounded='$lg' justifyContent='center' alignItems='center'>
							{showSuccessMsg && success ? (
								<ChildBox>
									<VStack space={4} justifyContent='center' alignItems='center' px={2}>
										<CheckCircleIcon size='$xl' color='$primary400' />
										<Text fontSize='$xl' color='$primary500'>
											Done
										</Text>
									</VStack>
								</ChildBox>
							) : (
								<VStack space={4} p={8}>
									<Spinner size='$lg' color='$figmared' />
									<Text fontSize='$xl' color='$figmared'>
										Loading ...
									</Text>
								</VStack>
							)}
						</Box>
					</LoaderBox>
				</ParentBox>
			)}
			<Box pointerEvents={showStatus ? "none" : "auto"}>
				<Box w='100%' h='100%'>
					{children}
				</Box>
			</Box>
		</>
	);
}

export default observer(Loader);
