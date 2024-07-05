import { Button, ButtonIcon, HStack } from "@gluestack-ui/themed";
import { Box, Text } from "@gluestack-ui/themed";
import * as React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { ButtonText } from "@gluestack-ui/themed";
import { SearchBar } from "react-native-elements";

const FirstRoute = require("./CaseLogTab").default;
const SecondRoute = require("./AcademicLogTab").default;
const ThirdRoute = require("./ThesisLogTab").default;
const FourthRoute = require("./SpecialCaseLogTab").default;
const FifthRoute = require("./CustomLogTab").default;

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

export default function LogTabsMainScreen({ navigation }) {
	const layout = useWindowDimensions();
	const [search, setSearch] = React.useState("");

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "first", title: "Cases" },
		{ key: "second", title: "Academic" },
		{ key: "third", title: "Thesis" },
		{ key: "fourth", title: "Special Case" },
		{ key: "fifth", title: "Custom" },
	]);

	const updateSearch = (search) => {
		setSearch(search);
	};

	return (
		<Box p='$4' w='$full' h='$full' bg='$primaryBackground'>
			<HStack alignItems='center' w='$100%' justifyContent='space-between'>
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
