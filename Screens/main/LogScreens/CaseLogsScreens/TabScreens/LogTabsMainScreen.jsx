import { Box, Text } from "@gluestack-ui/themed";
import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = require("./CaseLogMainTab").default;
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
		indicatorStyle={{ backgroundColor: "#DE2E23" }}
		style={{ backgroundColor: "#E8EEF3", elevation: 1 }}
		tabStyle={{ width: "auto" }}
		scrollEnabled={true}
		labelStyle={{ textTransform: "capitalize" }}
	/>
);

export default function LogTabsMainScreen() {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "first", title: "Cases" },
		{ key: "second", title: "Academic" },
		{ key: "third", title: "Thesis" },
		{ key: "fourth", title: "Special Case" },
		{ key: "fifth", title: "Custom" },
	]);

	return (
		<Box p='$4' w='$full' h='$full' bg='$primaryBackground'>
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
