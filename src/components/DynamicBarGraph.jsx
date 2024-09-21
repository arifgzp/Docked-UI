import React, { useState, useMemo } from "react";
import { Box, VStack, HStack, Text, Pressable } from "@gluestack-ui/themed";

const DynamicBarGraph = ({ data }) => {
	const [selectedBar, setSelectedBar] = useState(null);
	const [selectedPeriod, setSelectedPeriod] = useState("Weekly");

	const { title, periods } = data;
	const periodKeys = Object.keys(periods);

	const activeData = useMemo(() => periods[selectedPeriod], [selectedPeriod, periods]);

	const { labels, durations } = activeData;

	const maxValue = useMemo(() => Math.max(...durations), [durations]);
	const roundedMax = useMemo(() => Math.ceil(maxValue / 5) * 5, [maxValue]);

	const yAxisValues = useMemo(() => {
		const step = roundedMax / 5;
		return Array.from({ length: 6 }, (_, i) => roundedMax - i * step);
	}, [roundedMax]);

	const renderBar = (value, index) => {
		const barHeight = (value / roundedMax) * 190; // 190 is the max height of the graph
		const isSelected = selectedBar === index;

		return (
			<Pressable key={index} onPress={() => setSelectedBar(isSelected ? null : index)}>
				<VStack alignItems='center'>
					<Box width={12} height={barHeight} backgroundColor={isSelected ? "#333" : "#367B71"} borderRadius={10} marginBottom={5} />
					<Text fontSize='$xs' color='#666'>
						{labels[index]}
					</Text>
					{isSelected && (
						<Text fontSize='$xs' color='#367B71' fontWeight='bold' mt={2}>
							{value}
						</Text>
					)}
				</VStack>
			</Pressable>
		);
	};

	return (
		<Box bg='rgba(151, 151, 151, 0.2)' borderRadius='$xl' m='$4'>
			<VStack space='4xl' p='$5'>
				<HStack justifyContent='space-between' alignItems='center'>
					<Text fontSize={14} fontWeight='bold'>
						{title}
					</Text>
					<HStack space='xs'>
						{periodKeys.map((period) => (
							<Pressable
								key={period}
								onPress={() => setSelectedPeriod(period)}
								style={{
									backgroundColor: selectedPeriod === period ? "#367B71" : "transparent",
									borderColor: "#367B71",
									borderWidth: 1,
									borderRadius: 20,
									paddingHorizontal: 12,
									paddingVertical: 4,
								}}>
								<Text color={selectedPeriod === period ? "white" : "#367B71"} fontSize={10}>
									{period}
								</Text>
							</Pressable>
						))}
					</HStack>
				</HStack>
				<HStack justifyContent='flex-end' w='$100%' height={230}>
					<VStack justifyContent='space-between' position='absolute' height={190} w='$100%'>
						{yAxisValues.map((value, index) => (
							<HStack key={index} alignItems='center' justifyContent='space-between'>
								<Text fontSize='$xs' color='#666'>
									{value}
								</Text>
								<Box h={0.8} bg='#E6E3DB' w='$90%' />
							</HStack>
						))}
					</VStack>
					<HStack w='$90%' space='xs' justifyContent='space-between' alignItems='flex-end' height={215}>
						{durations.map((value, index) => renderBar(value, index))}
					</HStack>
				</HStack>
			</VStack>
		</Box>
	);
};

export default DynamicBarGraph;
