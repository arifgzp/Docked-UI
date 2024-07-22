import { CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import {
	Box,
	Center,
	GluestackUIProvider,
	Text,
	StatusBar,
	Input,
	HStack,
	VStack,
	FormControlLabel,
	FormControl,
	FormControlLabelText,
	InputField,
	FormControlHelper,
	FormControlHelperText,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Platform, useWindowDimensions, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Image } from "@gluestack-ui/themed";
import { ImageAssets } from "../../../assets/Assets";
import appStoreInstance from "../../stores/AppStore";
import { ButtonIcon } from "@gluestack-ui/themed";
import CircularProgress from "react-native-circular-progress-indicator";
import { Card } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { observer } from "mobx-react";

const HomeScreenPage = ({ navigation }) => {
	const months = [
		{
			name: "Jan",
			data: "17",
		},
		{
			name: "Feb",
			data: "27",
		},
		{
			name: "March",
			data: "38",
		},

		{
			name: "April",
			data: "26",
		},
		{
			name: "May",
			data: "25",
		},
		{
			name: "June",
			data: "41",
		},

		{
			name: "July",
			data: "48",
		},

		{
			name: "August",
			data: "38",
		},
		{
			name: "September",
			data: "58",
		},

		{
			name: "October",
			data: "17",
		},

		{
			name: "November",
			data: "17",
		},
		{
			name: "December",
			data: "57",
		},
	];
	const { height: screenHeight, width: screenWidth } = useWindowDimensions();

	// const screenWidth = Dimensions.get("window").width;
	const data = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		datasets: [
			{
				data: [20, 12, 16, 8, 24, 10],
			},
		],
	};

	const chartConfig = {
		backgroundGradientFrom: "#D6D4CD",
		backgroundGradientTo: "#D6D4CD",
		color: (opacity = 1) => `rgba(54, 123, 113, ${opacity})`,
		strokeWidth: 2, // optional, default 3
		barPercentage: 0.2,
		useShadowColorFromDataset: false, // optional
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Box h='$full' backgroundColor='$primaryBackground' pt='$8'>
				<ScrollView>
					<Box p={10}>
						<HStack justifyContent='space-between' alignItems='center'>
							<VStack>
								<Text fontFamily='Inter_Bold' color='#000' size='xl'>
									Hello Dr. {appStoreInstance.Name ? appStoreInstance.Name.split(" ")[0] : "User"}
								</Text>
								<Text>{appStoreInstance.UserBroadSpecialty}</Text>
							</VStack>
							<Pressable onPress={() => navigation.navigate("ProfilePage")}>
								<Image width={35} height={35} source={ImageAssets.profileIcon} alt='Docked-Logo' />
							</Pressable>
							{/* <Button
								onPress={() => navigation.navigate("ProfilePage")}
								height={50}
								justifyContent='flex-start'
								alignItems='flex-start'
								variant='link'>
								<ButtonIcon as={Ionicons} size={50} name='person-circle-outline' color='#367B71' />
							</Button> */}
						</HStack>
					</Box>
					<Box p={10} width={"$full"} borderBottomEndRadius={50} backgroundColor='#367B71'>
						<HStack>
							<Box width='$55%'>
								<Text color='#FFF' size='xs'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt{" "}
								</Text>
							</Box>
							<Box width='$45%' justifyContent='flex-end' alignItems='center'>
								<Button alignItems='flex-end' size='sm' variant='link'>
									<HStack alignItems='center'>
										<ButtonText color='#FFF' bold underline>
											Get Started
										</ButtonText>
										<ButtonIcon pl={5} as={Ionicons} size={15} name='arrow-forward-outline' color='#FFF' />
									</HStack>
								</Button>
							</Box>
						</HStack>
					</Box>
					<Box p={10}>
						<HStack justifyContent='space-around'>
							<VStack space='md' alignItems='center'>
								<Text bold color='#000'>
									Observed
								</Text>
								<CircularProgress
									value={50}
									radius={40}
									maxValue={100}
									inActiveStrokeColor={"#D9D9D9"}
									activeStrokeColor={"#367B71"}
									inActiveStrokeWidth={20}
									progressValueColor={"#000"}
								/>
							</VStack>
							<VStack space='md' alignItems='center'>
								<Text bold color='#000'>
									Assisted
								</Text>
								<CircularProgress
									value={170}
									radius={40}
									maxValue={200}
									inActiveStrokeColor={"#D9D9D9"}
									activeStrokeColor={"#367B71"}
									inActiveStrokeWidth={20}
									progressValueColor={"#000"}
								/>
							</VStack>
							<VStack space='md' alignItems='center'>
								<Text bold color='#000'>
									Performed
								</Text>
								<CircularProgress
									value={90}
									radius={40}
									maxValue={200}
									inActiveStrokeColor={"#D9D9D9"}
									activeStrokeColor={"#367B71"}
									inActiveStrokeWidth={20}
									progressValueColor={"#000"}
								/>
							</VStack>
						</HStack>
					</Box>
					<ScrollView pb={15} horizontal={true}>
						<HStack>
							<Card borderRadius={25} size='md' variant='filled' m='$3'>
								<Heading mb='$1' size='md'>
									General Anaesthesia
								</Heading>
								<HStack space='2xl'>
									<VStack alignItems='center'>
										<Text size='xs'>Observed</Text>
										<Text bold color='#000'>
											10
										</Text>
									</VStack>
									<VStack alignItems='center'>
										<Text size='xs'>Assisted</Text>
										<Text bold color='#000'>
											10
										</Text>
									</VStack>
									<VStack alignItems='center'>
										<Text size='xs'>Performed</Text>
										<Text bold color='#000'>
											10
										</Text>
									</VStack>
								</HStack>
							</Card>
							<Card borderRadius={25} size='md' variant='filled' m='$3'>
								<Heading mb='$1' size='md'>
									Regional Anaesthesia
								</Heading>
								<HStack space='2xl'>
									<VStack alignItems='center'>
										<Text size='xs'>Observed</Text>
										<Text bold color='#000'>
											10
										</Text>
									</VStack>
									<VStack alignItems='center'>
										<Text size='xs'>Assisted</Text>
										<Text bold color='#000'>
											10
										</Text>
									</VStack>
									<VStack alignItems='center'>
										<Text size='xs'>Performed</Text>
										<Text bold color='#000'>
											10
										</Text>
									</VStack>
								</HStack>
							</Card>
						</HStack>
					</ScrollView>
					<Box p={10}>
						<VStack justifyContent='center' alignItems='center' space='md'>
							<Text alignSelf='flex-start'>Case logs</Text>
							<HStack space='lg'>
								<Card width={"$40%"} size='sm' variant='filled' borderRadius={25}>
									<VStack space='2xl' alignItems='center'>
										<VStack alignItems='center'>
											<Text size='xs'>Completed Logs</Text>
											<Text bold color='#000'>
												30
											</Text>
										</VStack>
										<Box alignItems='center'>
											<Text bold color='#CC3F0C'>
												Congrats
											</Text>
										</Box>
									</VStack>
								</Card>
								<Card width={"$40%"} size='sm' variant='filled' borderRadius={25}>
									<VStack space='md' alignItems='center'>
										<VStack alignItems='center'>
											<Text size='xs'>Uncompleted Logs</Text>
											<Text bold color='#000'>
												3
											</Text>
										</VStack>
										<Button variant='primary'>
											<ButtonText fontSize='$xs'>Complete</ButtonText>
										</Button>
									</VStack>
								</Card>
							</HStack>
						</VStack>
					</Box>
					<Box p={10} mb={"$20%"}>
						<VStack space='md'>
							<Text>Duration</Text>
							<View style={{ borderRadius: 16, overflow: "hidden" }}>
								<BarChart data={data} width={screenWidth} height={220} chartConfig={chartConfig} />
							</View>
						</VStack>
					</Box>

					{/* <VStack mb={"$20%"} w='$full' h={450} justifyContent='flex-start' px='$4'>
						<Image width='$full' h='$full' resizeMode='contain' source={ImageAssets.chart} alt='graph' />
					</VStack> */}
				</ScrollView>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default observer(HomeScreenPage);
