import { Button, ButtonIcon, HStack } from "@gluestack-ui/themed";
import { Box, Text } from "@gluestack-ui/themed";
import * as React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { ButtonText } from "@gluestack-ui/themed";
import { SearchBar } from "react-native-elements";
import IsReadyLoader from "../../../../../components/IsReadyLoader";
import useIsReady from "../../../../../hooks/useIsReady";
import appStoreInstance from "../../../../../stores/AppStore";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useCallback } from "react";

const FirstRoute = require("./CaseLogTab").default;
const SecondRoute = require("./AcademicLogTab").default;
const ThirdRoute = require("./ThesisLogTab").default;
const FourthRoute = require("./CustomLogTab").default;
const FifthRoute = require("./SpecialCaseLogTab").default;

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
	third: ThirdRoute,
	fourth: FourthRoute,
	fifth: FifthRoute,
});

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
	useFocusEffect(
		useCallback(() => {
			setTimeout(() => {
				console.log("this is happening or not?");
				appStoreInstance.setIsTabBarVisble(true);
			}, 1); // 500 milliseconds = 0.5 seconds

			return () => {
				console.log("this should out of focus now");
				appStoreInstance.setIsTabBarVisble(false);
			};
		}, [])
	);
	const isReady = useIsReady();
	const layout = useWindowDimensions();
	const [search, setSearch] = React.useState("");
	const initialTabIndex = route?.params?.initialTabIndex ?? 0;

	const [index, setIndex] = React.useState(initialTabIndex);

	const [routes] = React.useState([
		{ key: "first", title: "Cases" },
		{ key: "second", title: "Academics" },
		{ key: "third", title: "Thesis" },
		{ key: "fourth", title: "Custom" },
		{ key: "fifth", title: "Special Case" },
	]);

	const updateSearch = (search) => {
		setSearch(search);
	};

	React.useEffect(() => {
		// Update index when initialTabIndex changes
		setIndex(initialTabIndex);
	}, [initialTabIndex]);

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
					{/* <Box>
						<SearchBar
							inputContainerStyle={styles.inputContainer}
							containerStyle={styles.container}
							inputStyle={styles.input}
							placeholder='Type Here...'
							onChangeText={updateSearch}
							value={search}
						/>
					</Box> */}
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
		height: 45, // Adjust the height to include padding, etc.
		width: 120,
	},
	input: {
		color: "#000",
	},
});
