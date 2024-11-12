import { Button, ButtonIcon, HStack } from "@gluestack-ui/themed";
import { Box, Text, Spinner } from "@gluestack-ui/themed";
import * as React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { ButtonText } from "@gluestack-ui/themed";
import IsReadyLoader from "../../../../../components/IsReadyLoader";
import useIsReady from "../../../../../hooks/useIsReady";
import appStoreInstance from "../../../../../stores/AppStore";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useCallback, useState } from "react";

// Import components normally at the top
const CasesLogTabRoute = require("./CaseLogTab").default;
const AcademicLogTabRoute = require("./AcademicLogTab").default;
const ThesisLogTabRoute = require("./ThesisLogTab").default;
const CustomLogTabRoute = require("./CustomLogTab").default;

// Lazy placeholder component
const LazyPlaceholder = ({ route }) => (
	<Box flex={1} justifyContent='center' alignItems='center'>
		<Spinner size='large' color='#367B71' />
		<Text mt='$2' color='$textLight'>
			Loading {route.title}...
		</Text>
	</Box>
);

const renderTabBar = (props) => (
	<TabBar
		{...props}
		activeColor='#1E1E1E'
		inactiveColor='#71717A'
		indicatorStyle={{ backgroundColor: "#367B71" }}
		style={{ backgroundColor: "#E6E3DB", elevation: 1 }}
		tabStyle={{ width: "auto" }}
		scrollEnabled={true}
		labelStyle={{ textTransform: "capitalize" }}
	/>
);

export default function LogTabsMainScreen({ navigation, route }) {
	const isReady = useIsReady();
	const layout = useWindowDimensions();
	const [search, setSearch] = React.useState("");
	const initialTabIndex = route?.params?.initialTabIndex ?? 0;
	const [index, setIndex] = React.useState(initialTabIndex);

	// Track which tabs have been loaded
	const [loadedTabs, setLoadedTabs] = useState({});

	const [routes] = React.useState([
		{ key: "first", title: "Cases" },
		{ key: "second", title: "Academics" },
		{ key: "third", title: "Thesis" },
		{ key: "fourth", title: "Custom" },
	]);

	useFocusEffect(
		useCallback(() => {
			setTimeout(() => {
				appStoreInstance.setIsTabBarVisble(true);
			}, 1);

			return () => {
				appStoreInstance.setIsTabBarVisble(false);
			};
		}, [])
	);

	React.useEffect(() => {
		setIndex(initialTabIndex);
	}, [initialTabIndex]);

	// Handle tab loading
	const handleTabLoad = useCallback((tabKey) => {
		setLoadedTabs((prev) => ({ ...prev, [tabKey]: true }));
	}, []);

	const renderScene = ({ route }) => {
		// If the tab hasn't been loaded yet and isn't the current tab, show placeholder
		if (!loadedTabs[route.key] && route.key !== routes[index].key) {
			return <LazyPlaceholder route={route} />;
		}
		// Mark the tab as loaded when it's rendered
		if (!loadedTabs[route.key]) {
			handleTabLoad(route.key);
		}

		switch (route.key) {
			case "first":
				return <CasesLogTabRoute />;
			case "second":
				return <AcademicLogTabRoute />;
			case "third":
				return <ThesisLogTabRoute />;
			case "fourth":
				return <CustomLogTabRoute />;
			default:
				return null;
		}
	};

	if (!isReady) {
		return (
			<Box pt={20}>
				<IsReadyLoader />
			</Box>
		);
	}

	return (
		<Box py='$4' w='$full' h='$full' bg='$primaryBackground' pt='$10'>
			<HStack px='$4' alignItems='center' w='$100%' justifyContent='space-between'>
				<Text size='xl' fontFamily='Inter_Bold'>
					Logbook
				</Text>
				<HStack space='sm' alignItems='center'>
					<Button
						onPress={() => navigation.navigate("LogProfileReadPage", { caseLogFormToGet: "" })}
						backgroundColor='#367B71'
						borderRadius={"$full"}
						size='xs'>
						<ButtonText>Log Profile</ButtonText>
					</Button>
				</HStack>
			</HStack>
			<TabView
				lazy
				lazyPreloadDistance={0}
				renderLazyPlaceholder={LazyPlaceholder}
				renderTabBar={renderTabBar}
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
			/>
		</Box>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: "#f0f0f0",
		borderRadius: 10,
		paddingHorizontal: 10,
		height: 20,
	},
	container: {
		backgroundColor: "#ffffff",
		borderTopWidth: 0,
		borderBottomWidth: 0,
		height: 45,
		width: 120,
	},
	input: {
		color: "#000",
	},
});
