import { VStack } from "@gluestack-ui/themed";
import SkeletonLoader from "expo-skeleton-loader";
import React from "react";

export default function IsReadyLoader() {
	return (
		<VStack w='full' h='full' p='4' space={10} overflow='hidden'>
			<SkeletonLoader boneColor='#eee8e7' highlightColor='#d3c7c6'>
				<SkeletonLoader.Container style={{ flex: 1, flexDirection: "row", paddingVertical: 20, paddingHorizontal: 20 }}>
					<SkeletonLoader.Item
						style={{
							width: 40,
							height: 40,
							borderRadius: 40 / 2,
							marginRight: 20,
						}}
					/>
					<SkeletonLoader.Container style={{ paddingVertical: 10 }}>
						<SkeletonLoader.Item style={{ width: 220, height: 10, marginBottom: 5 }} />
						<SkeletonLoader.Item style={{ width: 150, height: 10 }} />
					</SkeletonLoader.Container>
				</SkeletonLoader.Container>
				<SkeletonLoader.Container style={{ flex: 1, flexDirection: "column", paddingVertical: 40, paddingHorizontal: 20 }}>
					<SkeletonLoader.Item style={{ width: "50%", height: 10, marginVertical: 5 }} />
					<SkeletonLoader.Item style={{ width: "90%", height: 10, marginVertical: 5 }} />
				</SkeletonLoader.Container>
				<SkeletonLoader.Container style={{ flex: 1, flexDirection: "column", paddingVertical: 40, paddingHorizontal: 20 }}>
					<SkeletonLoader.Item style={{ width: "50%", height: 10, marginVertical: 5 }} />
					<SkeletonLoader.Item style={{ width: "70%", height: 10, marginVertical: 5 }} />
					<SkeletonLoader.Item style={{ width: "90%", height: 10, marginVertical: 5 }} />
				</SkeletonLoader.Container>
				<SkeletonLoader.Container style={{ flex: 1, flexDirection: "column", paddingVertical: 40, paddingHorizontal: 20 }}>
					<SkeletonLoader.Item style={{ width: "50%", height: 10, marginVertical: 5 }} />
					<SkeletonLoader.Item style={{ width: "90%", height: 10, marginVertical: 5 }} />
				</SkeletonLoader.Container>
				<SkeletonLoader.Container style={{ flex: 1, flexDirection: "column", paddingVertical: 40, paddingHorizontal: 20 }}>
					<SkeletonLoader.Item style={{ width: "50%", height: 10, marginVertical: 5 }} />
					<SkeletonLoader.Item style={{ width: "70%", height: 10, marginVertical: 5 }} />
					<SkeletonLoader.Item style={{ width: "90%", height: 10, marginVertical: 5 }} />
				</SkeletonLoader.Container>
				<SkeletonLoader.Container style={{ flex: 1, flexDirection: "column", paddingVertical: 40, paddingHorizontal: 20 }}>
					<SkeletonLoader.Item style={{ width: "50%", height: 10, marginVertical: 5 }} />
					<SkeletonLoader.Item style={{ width: "90%", height: 10, marginVertical: 5 }} />
				</SkeletonLoader.Container>
				<SkeletonLoader.Container style={{ flex: 1, flexDirection: "column", paddingVertical: 40, paddingHorizontal: 20 }}>
					<SkeletonLoader.Item style={{ width: "50%", height: 10, marginVertical: 5 }} />
					<SkeletonLoader.Item style={{ width: "90%", height: 10, marginVertical: 5 }} />
				</SkeletonLoader.Container>
			</SkeletonLoader>
		</VStack>
	);
}
