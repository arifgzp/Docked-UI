import { Alert, CloseIcon, HStack, Button, ButtonIcon, VStack, Text } from "@gluestack-ui/themed";
import React from "react";

const ToastAlert = ({ id, status, variant, title, description, isClosable, onClose, ...rest }) => (
	<Alert maxWidth='100%' alignSelf='center' flexDirection='row' status={status ? status : "info"} variant={variant} bg='$primary400' {...rest}>
		<VStack space={1} flexShrink={1} w='100%'>
			<HStack flexShrink={1} alignItems='center' justifyContent='space-between'>
				<HStack space={2} flexShrink={1} alignItems='center'>
					<Alert.Icon color='$secondary100' />
					<Text fontSize='$md' fontWeight='$medium' flexShrink={1} color='$secondary100'>
						{title}
					</Text>
				</HStack>
				{isClosable ? (
					<Button
						variant='outline'
						_icon={{
							color: "$secondary100",
						}}
						onPress={onClose}
						borderRadius='$full'
						size='lg'
						p='$3.5'>
						<ButtonIcon as={CloseIcon} />
					</Button>
				) : null}
			</HStack>
			<Text px='$6' color='$secondary100'>
				{description}
			</Text>
		</VStack>
	</Alert>
);

export default ToastAlert;
