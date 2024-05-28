import React, { useEffect, useState } from "react";
import { Box, KeyboardAvoidingView, ScrollView, Image } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { ImageAssets } from "../assets/Assets";

const SplashScreenPage = ({ navigation }) => {
	useEffect(() => {
		setTimeout(async () => {
			navigation.replace("Login Page");
		}, 1000);
	});
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<Box flex={1} backgroundColor='$primaryBackground'>
					<Box flex={1} justifyContent='center' alignItems='center'>
						<Image width={"$80%"} height={100} source={ImageAssets.logo} alt='Docked-Logo' />
					</Box>
				</Box>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
export default SplashScreenPage;
