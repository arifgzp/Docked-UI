import React, { useState, useMemo } from "react";
import { Box, VStack, HStack, Text, Pressable } from "@gluestack-ui/themed";

const DynamicBarGraph = ({ data }) => {
	console.log("this is data inside the graph component", data);
	const [selectedBar, setSelectedBar] = useState(null);
	const [selectedPeriod, setSelectedPeriod] = useState("Daily");

	const { title, periods } = data || { title: "", periods: {} };
	const periodKeys = Object.keys(periods);

	const activeData = useMemo(() => periods[selectedPeriod] || { labels: [], durations: [] }, [selectedPeriod, periods]);

	const { labels, durations } = activeData;

	const maxValue = useMemo(() => Math.max(...durations, 0), [durations]);
	const roundedMax = useMemo(() => Math.max(Math.ceil(maxValue / 5) * 5, 5), [maxValue]);

	const yAxisValues = useMemo(() => {
		const step = roundedMax / 5;
		return Array.from({ length: 6 }, (_, i) => roundedMax - i * step);
	}, [roundedMax]);

	const formatYAxisLabel = (value) => {
		return Number.isInteger(value) ? value.toString() : value.toFixed(1);
	};

	const renderBar = (value, index) => {
		const barHeight = roundedMax > 0 ? (value / roundedMax) * 190 : 0;
		const isSelected = selectedBar === index;

		return (
			<Pressable key={index} onPress={() => setSelectedBar(isSelected ? null : index)}>
				<VStack alignItems='center'>
					<Box width={12} height={Math.max(barHeight, 1)} backgroundColor={isSelected ? "#333" : "#367B71"} borderRadius={10} marginBottom={5} />
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

	if (!data || !periods || Object.keys(periods).length === 0) {
		return (
			<Box bg='rgba(151, 151, 151, 0.2)' borderRadius='$xl' m='$4' pb='$3' height={300} justifyContent='center' alignItems='center'>
				<Text>No data available</Text>
			</Box>
		);
	}

	return (
		<Box bg='rgba(151, 151, 151, 0.2)' borderRadius='$xl' m='$4' pb='$3'>
			<VStack space='4xl' p='$5' height={300}>
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

				{durations && durations.length > 0 ? (
					<HStack justifyContent='flex-end' w='$100%' height={230}>
						<VStack justifyContent='space-between' position='absolute' height={190} w='$100%'>
							{yAxisValues.map((value, index) => (
								<HStack key={index} alignItems='center' justifyContent='space-between'>
									<Text fontSize='$xs' color='#666'>
										{formatYAxisLabel(value)}
									</Text>
									<Box h={0.8} bg='#E6E3DB' w='$90%' />
								</HStack>
							))}
						</VStack>
						<HStack w='$90%' space='xs' justifyContent='space-between' alignItems='flex-end' height={215}>
							{durations.map((value, index) => renderBar(value, index))}
						</HStack>
					</HStack>
				) : (
					<Box flex={1} justifyContent='center' alignItems='center'>
						<Text textAlign='center'>No Data Available for {selectedPeriod}</Text>
					</Box>
				)}
			</VStack>
		</Box>
	);
};

export default DynamicBarGraph;
