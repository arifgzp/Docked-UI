import { Box, Text, VStack, Pressable, HStack, Center } from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import { LinearGradient } from "expo-linear-gradient";

const getRandomColor = (name) => {
	// Google Meet-like colors
	const colors = [
		"#1A73E8", // Blue
		"#EA4335", // Red
		"#34A853", // Green
		"#FBBC05", // Yellow
		"#8AB4F8", // Light blue
		"#F28B82", // Light red
		"#CCFF90", // Light green
		"#FDD663", // Light yellow
		"#4285F4", // Google blue
		"#DB4437", // Google red
		"#0F9D58", // Google green
		"#F4B400", // Google yellow
	];

	// Use the name string to generate a consistent index
	const charSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
	return colors[charSum % colors.length];
};

const ApprovalList = ({ card }) => {
	console.log("the card in the ApprovalList", card);

	const approvalData = useMemo(() => {
		if (!card || !Array.isArray(card)) return [];

		return card.map((item) => ({
			id: item.id,
			initial: item.createdBy.name.charAt(0).toUpperCase(),
			name: item.createdBy.name,
			backgroundColor: getRandomColor(item.createdBy.name),
		}));
	}, [card]);

	const ApprovalCard = ({ approval }) => (
		<Box overflow='hidden' borderRadius='$lg' mb='$3'>
			{/* Outer container with linear gradient */}
			<Box position='relative' p='$0.5'>
				<LinearGradient
					colors={["#CC3F0C", "#FFFFFF"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						borderRadius: 12,
					}}
				/>

				{/* Inner content container with solid background */}
				<Box
					style={{
						backgroundColor: "#DDAD97", // 30% opacity version of the background color
						borderRadius: 12,
					}}>
					<HStack p='$3' alignItems='center' space='sm'>
						{/* Initial circle */}
						<Center w='$8' h='$8' borderRadius='$full' bg={approval.backgroundColor}>
							<Text color='white' fontSize='$lg' fontWeight='$bold'>
								{approval.initial}
							</Text>
						</Center>

						{/* Name and status */}
						<Text flex={1} fontSize={12} color='white' fontWeight='$bold'>
							Dr. {approval.name}'s is awaiting your approval
						</Text>

						{/* Arrow icon */}
						<Box>
							<Ionicons name='arrow-forward-outline' size={20} color='#FFF' />
						</Box>
					</HStack>
				</Box>
			</Box>
		</Box>
	);

	return (
		<Box px='$4' pt='$2'>
			{/* Pending approvals list */}
			<VStack mb='$4'>
				{approvalData.map((approval) => (
					<Pressable
						key={approval.id}
						onPress={() => {
							/* Handle approval */
						}}>
						<ApprovalCard approval={approval} />
					</Pressable>
				))}
			</VStack>

			{/* Total logs counter */}
			<Box
				bg='white'
				p='$4'
				borderRadius='$lg'
				mb='$4'
				style={{
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.1,
					shadowRadius: 3,
					elevation: 3,
				}}>
				<Text textAlign='center' fontSize='$sm' color='#333333' fontWeight='$medium'>
					Total number of logs approved : {approvalData.length}
				</Text>
			</Box>
		</Box>
	);
};

export default observer(ApprovalList);
