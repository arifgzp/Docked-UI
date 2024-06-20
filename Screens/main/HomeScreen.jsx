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
import { Platform, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Image } from "@gluestack-ui/themed";
import { ImageAssets } from "../../assets/Assets";

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
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box h='$full' backgroundColor='$primaryBackground'>
				<ScrollView>
					<Box p={10}>
						<ScrollView horizontal={true}>
							<HStack gap='$4'>
								<Box w='$32' h='$32' rounded='$2xl' alignItems='flex-end' bg='$figmalightred' p='$2'>
									<VStack h='$full' justifyContent='space-between'>
										<Text color='$figmared' fontWeight='$medium' fontSize='$2xl'>
											123
										</Text>

										<Box>
											<Text color='$figmared' fontWeight='$medium' fontSize='$xs' textAlign='center'>
												Case Performed in last 7 days
											</Text>
										</Box>
									</VStack>
								</Box>

								<Box w='$32' h='$32' rounded='$2xl' alignItems='flex-end' bg='$figmalightred2' p='$2'>
									<VStack h='$full' w='$full' justifyContent='space-between'>
										<Text color='$figmaorange' fontWeight='$bold' fontSize='$xs'>
											Hours of surgeries performed
										</Text>

										<Box>
											<Text color='$figmaorange' fontWeight='$medium' fontSize='$xs' textAlign='center'>
												Total -
												<Text fontWeight='$medium' fontSize='$xs' color='$figmared'>
													{` 1234 `}
												</Text>
												hrs
											</Text>

											<Text color='$figmaorange' fontWeight='$medium' fontSize='$xs' textAlign='center'>
												In 7 Days - 40 hrs
											</Text>
										</Box>
									</VStack>
								</Box>
								<Box w='$32' h='$32' rounded='$2xl' alignItems='flex-end' bg='$figmalightaqua' p='$2'>
									<VStack h='$full' w='$full' alignItems='center' justifyContent='center'>
										<HStack alignItems='center' gap='$2'>
											<Text color='$figmaaqua' alignText='center' fontWeight='$bold' fontSize='$lg'>
												100
											</Text>

											<Text color='$font' alignText='center' fontWeight='$bold' fontSize='$xs'>
												performed
											</Text>
										</HStack>

										<HStack alignItems='center' gap='$2'>
											<Text color='$figmaaqua' alignText='center' fontWeight='$bold' fontSize='$lg'>
												25
											</Text>

											<Text color='$font' alignText='center' fontWeight='$bold' fontSize='$xs'>
												assisted
											</Text>
										</HStack>
									</VStack>
								</Box>
								<Box w='$32' h='$32' rounded='$2xl' alignItems='flex-start' bg='$figmacardgray' p='$2'>
									<VStack p='$2' h='$full' justifyContent='space-between'>
										<Text color='$black' fontWeight='$bold' fontSize='$sm'>
											Publications
										</Text>

										<Box pb='$2'>
											<HStack gap='$1' alignItems='center' justifyContent='center'>
												<Text color='$black' fontWeight='$medium' fontSize='$2xl' textAlign='center'>
													3
												</Text>

												<Text color='$black' fontWeight='$medium' fontSize='$xs' textAlign='center'>
													in 1 year
												</Text>
											</HStack>
										</Box>
									</VStack>
								</Box>

								<Box w='$32' h='$32' rounded='$2xl' alignItems='flex-start' bg='$figmalightblue ' p='$2'>
									<VStack p='$2' h='$full' justifyContent='space-between'>
										<Text color='$figmablue' fontWeight='$bold' fontSize='$sm'>
											Uploaded Content
										</Text>

										<Box pb='$2'>
											<HStack gap='$1' alignItems='center' justifyContent='center'>
												<Text color='$figmablue' fontWeight='$medium' fontSize='$2xl' textAlign='center'>
													27
												</Text>

												<Text color='$figmablue' fontWeight='$medium' fontSize='$xs' textAlign='center'>
													in 1 year
												</Text>
											</HStack>
										</Box>
									</VStack>
								</Box>

								<Box w='$32' h='$32' rounded='$2xl' alignItems='flex-end' bg='$figmacardyellow' p='$2'>
									<VStack h='$full' w='$full' gap='$2'>
										<Text color='$figmayellow' justifyContent='center' alignItems='center' textAlign='center' fontWeight='$bold' fontSize='$sm'>
											View log targets
										</Text>

										<Box gap='$2'>
											<HStack alignItems='center' justifyContent='space-between'>
												<Text color='$figmayellow' fontWeight='$medium' fontSize='$xs' textAlign='center'>
													SAB
												</Text>
												<Box p='$0.5' bg='$figmayellow' rounded='$2xl' h='$3' w='$1/2'>
													<Box bg='$figmalightyellow' rounded='$2xl' w='$full'>
														<Box bg='$figmayellow' rounded='$2xl' w='$64%' h='$full'></Box>
													</Box>
												</Box>
											</HStack>
											<HStack alignItems='center' justifyContent='space-between'>
												<Text color='$figmayellow' fontWeight='$medium' fontSize='$xs' textAlign='center'>
													Epidurals
												</Text>
												<Box p='$0.5' bg='$figmayellow' rounded='$2xl' h='$3' w='$1/2'>
													<Box bg='$figmalightyellow' rounded='$2xl' w='$full'>
														<Box bg='$figmayellow' rounded='$2xl' w='$30%' h='$full'></Box>
													</Box>
												</Box>
											</HStack>

											<HStack alignItems='center' justifyContent='space-between'>
												<Text color='$figmayellow' fontWeight='$medium' fontSize='$xs' textAlign='center'>
													GA
												</Text>
												<Box p='$0.5' bg='$figmayellow' rounded='$2xl' h='$3' w='$1/2'>
													<Box bg='$figmalightyellow' rounded='$2xl' w='$full'>
														<Box bg='$figmayellow' rounded='$2xl' w='$80%' h='$full'></Box>
													</Box>
												</Box>
											</HStack>
										</Box>
									</VStack>
								</Box>
							</HStack>
						</ScrollView>
					</Box>
					<Box pt={10}>
						<HStack>
							<Box flex={1 / 2} justifyContent='center' alignItems='center' p='$6'>
								<Box w='$32' h='$24' rounded='$xl' justifyContent='center' alignItems='center' bg='$figmalightaqua'>
									<Text color='$figmaaqua'>5</Text>

									<Text pt='$2' color='$font'>
										Days Streak
									</Text>
								</Box>
							</Box>
							<Box flex={1 / 2} justifyContent='center' alignItems='center' p='$6'>
								<Box w='$32' h='$24' rounded='$xl' justifyContent='center' alignItems='center' bg='$figmalightred'>
									<Text color='$figmared'>7</Text>

									<Text pt='$2' color='$font'>
										Unfinished Logs
									</Text>
								</Box>
							</Box>
						</HStack>
					</Box>
					<VStack w='$full' h={450} justifyContent='flex-start' px='$4'>
						<Image width='$full' h='$full' resizeMode='contain' source={ImageAssets.chart} alt='graph' />
					</VStack>
					<Box>
						<ScrollView horizontal={true}>
							<HStack gap='$8'>
								{months.map((month) => {
									return (
										<Box key={month.name} flex={1 / 3} justifyContent='center' alignItems='center'>
											<Box w='$24' h='$20' rounded='$xl' justifyContent='center' alignItems='center' bg='$figmacardred'>
												<Text color='$font'>{month.name}</Text>

												<Text pt='$2' color='$font'>
													{month.data}
												</Text>
											</Box>
										</Box>
									);
								})}
							</HStack>
						</ScrollView>
					</Box>
					<Box pt={10} pb={110}>
						<ScrollView horizontal={true}>
							<HStack gap='$8'>
								{months.map((month) => {
									return (
										<Box key={month.name} flex={1 / 3} justifyContent='center' alignItems='center'>
											<Box w='$24' h='$20' rounded='$xl' justifyContent='center' alignItems='center' bg='$figmalightaqua'>
												<Text color='$figmaaqua'>{month.name}</Text>

												<Text pt='$2' color='$font'>
													{month.data}
												</Text>
											</Box>
										</Box>
									);
								})}
							</HStack>
						</ScrollView>
					</Box>
				</ScrollView>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default HomeScreenPage;
