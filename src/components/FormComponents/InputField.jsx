import React from "react";
import { VStack, Text, Box, Input, InputField as GluestackInputField, InputSlot } from "@gluestack-ui/themed";
import { Controller } from "react-hook-form";

const InputField = ({ field, control, inputRefs, scrollToInput, handleNext }) => {
	return (
		<VStack width={field.width ?? "$100%"} gap='$2'>
			<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
				{field.name}
			</Text>
			<Box alignItems='center'>
				<Controller
					control={control}
					name={field.uid}
					rules={{ required: false }}
					render={({ field: { onChange, value } }) => (
						<Input variant='outline' size='sm'>
							<GluestackInputField
								ref={(el) => (inputRefs.current[field.uid] = el)}
								onFocus={() => scrollToInput(field.uid)}
								keyboardType={field.type === "number" ? "number-pad" : "default"}
								onChangeText={onChange}
								value={value}
								onSubmitEditing={() => handleNext(field.uid)}
								returnKeyType='next'
								blurOnSubmit={false}
							/>
							{field.unit && (
								<InputSlot pr='$3'>
									<Text size='xs'>{field.unit}</Text>
								</InputSlot>
							)}
						</Input>
					)}
				/>
			</Box>
		</VStack>
	);
};

export default InputField;
