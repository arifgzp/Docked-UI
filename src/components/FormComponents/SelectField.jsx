import React from "react";
import { VStack, Text, Box } from "@gluestack-ui/themed";
import { Controller } from "react-hook-form";
import CustomSelect from "../CustomSelect";
import { Input } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";

const SelectField = ({ field, control, openSelectField, setOpenSelectField, handleNext, watch }) => {
	const selectedValue = watch(field.uid);

	return (
		<VStack width={field.width ?? "$100%"} gap='$2'>
			<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
				{field.name}
			</Text>
			<Box>
				<Controller
					control={control}
					name={field.uid}
					rules={{ required: false }}
					render={({ field: { onChange, value } }) => (
						<CustomSelect
							field={field}
							value={value}
							onChange={onChange}
							isOpen={openSelectField === field.uid}
							onOpen={() => setOpenSelectField(field.uid)}
							onClose={() => setOpenSelectField(null)}
							onSelect={() => handleNext(field.uid)}
						/>
					)}
				/>
			</Box>
			{(selectedValue === "Other" || selectedValue === "Others") && (
				<VStack width='$100%' pt='$2' gap='$2'>
					<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
						Other {field.name}
					</Text>
					<Controller
						control={control}
						name={`other${field.name}`}
						rules={{ required: false }}
						render={({ field: { onChange, value } }) => (
							<Input variant='outline' size='sm'>
								<InputField
									onChangeText={onChange}
									value={value}
									onSubmitEditing={() => handleNext("outcomeOther")}
									returnKeyType='next'
									blurOnSubmit={false}
								/>
							</Input>
						)}
					/>
				</VStack>
			)}
		</VStack>
	);
};

export default SelectField;
