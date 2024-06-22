import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { InteractionManager } from "react-native";

const useIsReady = () => {
	const [isReady, setIsReady] = useState(false);

	useFocusEffect(
		useCallback(() => {
			InteractionManager.runAfterInteractions(() => {
				setTimeout(() => setIsReady(true), 100);
			});

			return () => {
				setIsReady(false);
			};
		}, [])
	);

	return isReady;
};

export default useIsReady;
