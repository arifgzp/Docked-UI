import React, { useEffect, useState } from "react";
import { VStack, Text, Button, ButtonText, ButtonIcon } from "@gluestack-ui/themed";
import DatePicker from "react-native-date-picker";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import appStoreInstance from "../../stores/AppStore";
import { observer } from "mobx-react";

const DateField = ({ field, control, setValue, initialDate }) => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState("--/--/--");
	const [dateForModal, setDateForModal] = useState(new Date());

	const handleDateSelect = (selectedDate) => {
		setDate(format(new Date(selectedDate), "dd / MM / yyyy"));
		setDateForModal(selectedDate);
		setOpen(false);
		setValue(field.uid, selectedDate);
	};

	useEffect(() => {
		if (appStoreInstance.ResetDate) {
			setDate("--/--/--");
			appStoreInstance.setResetDate(false);
		}
	}, [appStoreInstance.ResetDate]);

	useEffect(() => {
		if (initialDate) {
			setDate(format(new Date(initialDate), "dd / MM / yyyy"));
			setDateForModal(new Date(initialDate));
		}
	}, [initialDate]);

	console.log("what is the initial date", initialDate);

	return (
		<VStack width='$100%' gap='$2'>
			<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
				{field.name}
			</Text>
			<Button onPress={() => setOpen(true)} justifyContent='space-between' variant='date'>
				<ButtonText>{date}</ButtonText>
				<ButtonIcon as={Ionicons} size={20} name='calendar' color='#367B71' />
			</Button>
			<DatePicker
				modal
				theme='light'
				open={open}
				date={dateForModal}
				onConfirm={handleDateSelect}
				onCancel={() => setOpen(false)}
				mode='date'
				title='Select Date'
				dividerColor='#367B71'
			/>
		</VStack>
	);
};

export default observer(DateField);
