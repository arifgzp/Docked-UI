const customColors = {
	// replacing secondary color
	figmalightred: "#e6ced2",
	figmared: "#de2323",
	figmalightred2: "#efdcd0",
	figmaorange: "#ea701f",
	figmalightaqua: "#b6eae9",
	figmacardred: "#e3898b",
	figmaaqua: "#357a71",
	font: "#495e5d",
	textColor100: "#97979733",
	textColor400: "#5E6366",
	figmacardgray: "#c6cdd3",
	figmalightblue: "#96c8f2",
	figmablue: "#0676d6",
	figmacardyellow: "#ebdb96",
	figmayellow: "#aa8500",
	figmalightyellow: "#edcf5e",
	primaryBackground: "#E6E3DB",
	secondaryBackground: "#FFFFFF",
	primary50: "#76d9ca",
	primary100: "#5ecaba",
	primary200: "#48b9a8",
	primary300: "#42978b",
	primary400: "#367b71",
	primary500: "#346760",
	primary600: "#30544f",
	primary700: "#2b423f",
	primary800: "#243230",
	primary900: "#1c2221",
};

import { createStyle } from "@gluestack-style/react";

const customButton = createStyle({
	borderRadius: 10,
	backgroundColor: "$primary500",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",

	_text: {
		color: "$textLight0",
		fontWeight: "$semibold",
		_dark: {
			color: "$textDark0",
		},
	},

	_icon: {
		color: "$textLight0",
		_dark: {
			color: "$textDark0",
		},
	},

	_spinner: {
		props: {
			color: "$backgroundLight0",
		},
		_dark: {
			props: {
				color: "$backgroundDark0",
			},
		},
	},

	variants: {
		action: {
			primary: {
				bg: "#40E0D0",
				borderColor: "#40E0D0",
				borderRadius: 10,

				":hover": {
					bg: "#357A71",
					borderColor: "#357A71",
				},

				":active": {
					bg: "#357A71",
					borderColor: "#357A71",
				},

				_text: {
					color: "#357A71",
					":hover": {
						color: "#357A71",
					},
					":active": {
						color: "#357A71",
					},
				},

				_icon: {
					color: "$primary600",
					":hover": {
						color: "$primary600",
					},
					":active": {
						color: "$primary700",
					},
				},

				_spinner: {
					props: {
						color: "$primary600",
					},
					":hover": {
						props: {
							color: "$primary600",
						},
					},
					":active": {
						props: {
							color: "$primary700",
						},
					},
				},

				_dark: {
					bg: "$primary400",
					borderColor: "$primary700",
					":hover": {
						bg: "$primary500",
						borderColor: "$primary400",
					},
					":active": {
						bg: "$primary600",
						borderColor: "$primary300",
					},
					_text: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_icon: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_spinner: {
						props: { color: "$primary300" },
						":hover": {
							props: { color: "$primary300" },
						},
						":active": {
							props: { color: "$primary200" },
						},
					},

					":focusVisible": {
						_web: {
							boxShadow: "offset 0 0 0 2px $info400",
						},
					},
				},
			},
			secondary: {
				bg: "rgba(64, 224, 208, 0.1)",
				borderColor: "#357A71",
				borderRadius: 10,
				borderWidth: 1,

				":hover": {
					bg: "$secondary600",
					borderColor: "$secondary400",
				},

				":active": {
					bg: "$secondary700",
					borderColor: "$secondary700",
				},

				_text: {
					color: "$secondary600",
					":hover": {
						color: "$secondary600",
					},
					":active": {
						color: "$secondary700",
					},
				},
				_icon: {
					color: "$secondary600",
					":hover": {
						color: "$secondary600",
					},
					":active": {
						color: "$secondary700",
					},
				},

				_spinner: {
					props: {
						color: "$secondary600",
					},
					":hover": {
						props: { color: "$secondary600" },
					},
					":active": {
						props: { color: "$secondary700" },
					},
				},

				_dark: {
					bg: "$secondary400",
					borderColor: "$secondary700",
					":hover": {
						bg: "$secondary500",
						borderColor: "$secondary400",
					},
					":active": {
						bg: "$secondary600",
						borderColor: "$secondary300",
					},
					_text: {
						color: "$secondary300",
						":hover": {
							color: "$secondary300",
						},
						":active": {
							color: "$secondary200",
						},
					},
					_icon: {
						color: "$secondary300",
						":hover": {
							color: "$secondary300",
						},
						":active": {
							color: "$secondary200",
						},
					},
					_spinner: {
						props: {
							color: "$secondary300",
						},
						":hover": {
							props: { color: "$secondary300" },
						},
						":active": {
							props: { color: "$secondary200" },
						},
					},
				},
			},
			positive: {
				bg: "$success500",
				borderColor: "$success300",
				":hover": {
					bg: "$success600",
					borderColor: "$success400",
				},

				":active": {
					bg: "$success700",
					borderColor: "$success700",
				},

				_text: {
					color: "$success600",
					":hover": {
						color: "$success600",
					},
					":active": {
						color: "$success700",
					},
				},
				_icon: {
					color: "$success600",
					":hover": {
						color: "$success600",
					},
					":active": {
						color: "$success700",
					},
				},
				_spinner: {
					props: {
						color: "$success600",
					},
					":hover": {
						props: { color: "$success600" },
					},
					":active": {
						props: { color: "$success700" },
					},
				},
				_dark: {
					bg: "$success400",
					borderColor: "$success700",
					":hover": {
						bg: "$success500",
						borderColor: "$success400",
					},
					":active": {
						bg: "$success600",
						borderColor: "$success300",
					},
					_text: {
						color: "$success300",
						":hover": {
							color: "$success300",
						},
						":active": {
							color: "$success200",
						},
					},
					_icon: {
						color: "$success300",
						":hover": {
							color: "$success300",
						},
						":active": {
							color: "$success200",
						},
					},
					_spinner: {
						props: {
							color: "$success300",
						},
						":hover": {
							props: { color: "$success300" },
						},
						":active": {
							props: { color: "$success200" },
						},
					},
					":focusVisible": {
						_web: {
							boxShadow: "offset 0 0 0 2px $info400",
						},
					},
				},
			},
			negative: {
				bg: "$error500",
				borderColor: "$error300",
				":hover": {
					bg: "$error600",
					borderColor: "$error400",
				},

				":active": {
					bg: "$error700",
					borderColor: "$error700",
				},
				_text: {
					color: "$error600",
					":hover": {
						color: "$error600",
					},
					":active": {
						color: "$error700",
					},
				},
				_icon: {
					color: "$error600",
					":hover": {
						color: "$error600",
					},
					":active": {
						color: "$error700",
					},
				},
				_spinner: {
					props: {
						color: "$error600",
					},
					":hover": {
						props: { color: "$error600" },
					},
					":active": {
						props: { color: "$error700" },
					},
				},
				_dark: {
					bg: "$error400",
					borderColor: "$error700",
					":hover": {
						bg: "$error500",
						borderColor: "$error400",
					},
					":active": {
						bg: "$error600",
						borderColor: "$error300",
					},
					_text: {
						color: "$error300",
						":hover": {
							color: "$error300",
						},
						":active": {
							color: "$error200",
						},
					},
					_icon: {
						color: "$error300",
						":hover": {
							color: "$error300",
						},
						":active": {
							color: "$error200",
						},
					},
					_spinner: {
						props: {
							color: "$error300",
						},
						":hover": {
							props: { color: "$error300" },
						},
						":active": {
							props: { color: "$error200" },
						},
					},
					":focusVisible": {
						_web: {
							boxShadow: "offset 0 0 0 2px $info400",
						},
					},
				},
			},

			default: {
				bg: "$transparent",
				":hover": {
					bg: "$backgroundLight50",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "$backgroundDark900",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
		},

		variant: {
			link: {
				px: "$0",
				":hover": {
					_text: {
						textDecorationLine: "underline",
					},
				},
				":active": {
					_text: {
						textDecorationLine: "underline",
					},
				},
				_text: {
					color: "#1E1E1E",
					":hover": {
						color: "#1E1E1E",
					},
					":active": {
						color: "#1E1E1E",
					},
				},
			},
			outline: {
				bg: "transparent",
				borderWidth: "$1",
				":hover": {
					bg: "$backgroundLight50",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "$backgroundDark900",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
			solid: {
				_text: {
					color: "$textLight0",
					":hover": {
						color: "$textLight0",
					},
					":active": {
						color: "$textLight0",
					},
				},
				_spinner: {
					props: { color: "$textLight0" },
					":hover": {
						props: { color: "$textLight0" },
					},
					":active": {
						props: { color: "$textLight0" },
					},
				},
				_icon: {
					props: { color: "$textLight0" },
					":hover": {
						props: { color: "$textLight0" },
					},
					":active": {
						props: { color: "$textLight0" },
					},
				},
				_dark: {
					_text: {
						color: "$textDark0",
						":hover": {
							color: "$textDark0",
						},
						":active": {
							color: "$textDark0",
						},
					},
					_spinner: {
						props: { color: "$textDark0" },
						":hover": {
							props: { color: "$textDark0" },
						},
						":active": {
							props: { color: "$textDark0" },
						},
					},
					_icon: {
						props: { color: "$textDark0" },
						":hover": {
							props: { color: "$textDark0" },
						},
						":active": {
							props: { color: "$textDark0" },
						},
					},
				},
			},
			primary: {
				bg: "#367B71",
				borderColor: "#367B71",
				borderRadius: 100,
				size: "md",

				":hover": {
					bg: "#357A71",
					borderColor: "#357A71",
				},

				":active": {
					bg: "",
					borderColor: "",
				},

				_text: {
					color: "#FFFFFF",
					fontFamily: "Inter",
					":hover": {
						color: "#FFFFFF",
					},
					":active": {
						color: "#FFFFFF",
					},
				},

				_icon: {
					color: "$primary600",
					":hover": {
						color: "$primary600",
					},
					":active": {
						color: "$primary700",
					},
				},

				_spinner: {
					props: {
						color: "$primary600",
					},
					":hover": {
						props: {
							color: "$primary600",
						},
					},
					":active": {
						props: {
							color: "$primary700",
						},
					},
				},

				_dark: {
					bg: "$primary400",
					borderColor: "$primary700",
					":hover": {
						bg: "$primary500",
						borderColor: "$primary400",
					},
					":active": {
						bg: "$primary600",
						borderColor: "$primary300",
					},
					_text: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_icon: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_spinner: {
						props: { color: "$primary300" },
						":hover": {
							props: { color: "$primary300" },
						},
						":active": {
							props: { color: "$primary200" },
						},
					},

					":focusVisible": {
						_web: {
							boxShadow: "offset 0 0 0 2px $info400",
						},
					},
				},
			},
			disable: {
				bg: "#A3A3A3",
				borderColor: "#A3A3A3",
				borderRadius: 10,
				width: "$70%",
				size: "lg",

				":hover": {
					bg: "#A3A3A3",
					borderColor: "#A3A3A3",
				},

				":active": {
					bg: "#A3A3A3",
					borderColor: "#A3A3A3",
				},

				_text: {
					color: "#1E1E1E",
					fontFamily: "Inter_Bold",
					":hover": {
						color: "#1E1E1E",
					},
					":active": {
						color: "#1E1E1E",
					},
				},

				_icon: {
					color: "$primary600",
					":hover": {
						color: "$primary600",
					},
					":active": {
						color: "$primary700",
					},
				},

				_spinner: {
					props: {
						color: "$primary600",
					},
					":hover": {
						props: {
							color: "$primary600",
						},
					},
					":active": {
						props: {
							color: "$primary700",
						},
					},
				},

				_dark: {
					bg: "$primary400",
					borderColor: "$primary700",
					":hover": {
						bg: "$primary500",
						borderColor: "$primary400",
					},
					":active": {
						bg: "$primary600",
						borderColor: "$primary300",
					},
					_text: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_icon: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_spinner: {
						props: { color: "$primary300" },
						":hover": {
							props: { color: "$primary300" },
						},
						":active": {
							props: { color: "$primary200" },
						},
					},

					":focusVisible": {
						_web: {
							boxShadow: "offset 0 0 0 2px $info400",
						},
					},
				},
			},
			secondary: {
				bg: "",
				borderColor: "#367B71",
				borderRadius: "$full",
				borderWidth: 1,
				width: "",
				size: "lg",

				":hover": {
					bg: "#",
					borderColor: "#367B71",
				},

				":active": {
					bg: "",
					borderColor: "",
				},

				_text: {
					color: "#367B71",
					textAlign: "center",
					":hover": {
						color: "#367B71",
					},
					":active": {
						color: "#367B71",
					},
				},
				_icon: {
					color: "$secondary600",
					":hover": {
						color: "$secondary600",
					},
					":active": {
						color: "$secondary700",
					},
				},

				_spinner: {
					props: {
						color: "$secondary600",
					},
					":hover": {
						props: { color: "$secondary600" },
					},
					":active": {
						props: { color: "$secondary700" },
					},
				},

				_dark: {
					bg: "$secondary400",
					borderColor: "$secondary700",
					":hover": {
						bg: "$secondary500",
						borderColor: "$secondary400",
					},
					":active": {
						bg: "$secondary600",
						borderColor: "$secondary300",
					},
					_text: {
						color: "$secondary300",
						":hover": {
							color: "$secondary300",
						},
						":active": {
							color: "$secondary200",
						},
					},
					_icon: {
						color: "$secondary300",
						":hover": {
							color: "$secondary300",
						},
						":active": {
							color: "$secondary200",
						},
					},
					_spinner: {
						props: {
							color: "$secondary300",
						},
						":hover": {
							props: { color: "$secondary300" },
						},
						":active": {
							props: { color: "$secondary200" },
						},
					},
				},
			},
			tertiary: {
				bg: "#FFFFFF",
				borderColor: "#357A71",
				borderRadius: 10,
				width: "$30%",
				borderWidth: 1,
				size: "sm",

				":hover": {
					bg: "#357A71",
					borderColor: "#357A71",
				},

				":active": {
					bg: "",
					borderColor: "",
				},

				_text: {
					color: "#1E1E1E",
					fontFamily: "Inter_Bold",
					":hover": {
						color: "#1E1E1E",
					},
					":active": {
						color: "#1E1E1E",
					},
				},

				_icon: {
					color: "$primary600",
					":hover": {
						color: "$primary600",
					},
					":active": {
						color: "$primary700",
					},
				},

				_spinner: {
					props: {
						color: "$primary600",
					},
					":hover": {
						props: {
							color: "$primary600",
						},
					},
					":active": {
						props: {
							color: "$primary700",
						},
					},
				},

				_dark: {
					bg: "$primary400",
					borderColor: "$primary700",
					":hover": {
						bg: "$primary500",
						borderColor: "$primary400",
					},
					":active": {
						bg: "$primary600",
						borderColor: "$primary300",
					},
					_text: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_icon: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_spinner: {
						props: { color: "$primary300" },
						":hover": {
							props: { color: "$primary300" },
						},
						":active": {
							props: { color: "$primary200" },
						},
					},

					":focusVisible": {
						_web: {
							boxShadow: "offset 0 0 0 2px $info400",
						},
					},
				},
			},
			logs: {
				bg: "rgba(64, 224, 208, 0.1)",
				borderColor: "#357A71",
				borderRadius: 10,
				borderWidth: 1,
				width: "$90%",
				size: "lg",
				fontFamily: "Inter_Bold",

				":hover": {
					bg: "#40E0D0",
					borderColor: "#40E0D0",
				},

				":active": {
					bg: "",
					borderColor: "",
				},

				_text: {
					color: "#1E1E1E",
					textAlign: "center",
					":hover": {
						color: "#357A71",
					},
					":active": {
						color: "#357A71",
					},
				},
				_icon: {
					color: "$secondary600",
					":hover": {
						color: "$secondary600",
					},
					":active": {
						color: "$secondary700",
					},
				},

				_spinner: {
					props: {
						color: "$secondary600",
					},
					":hover": {
						props: { color: "$secondary600" },
					},
					":active": {
						props: { color: "$secondary700" },
					},
				},

				_dark: {
					bg: "$secondary400",
					borderColor: "$secondary700",
					":hover": {
						bg: "$secondary500",
						borderColor: "$secondary400",
					},
					":active": {
						bg: "$secondary600",
						borderColor: "$secondary300",
					},
					_text: {
						color: "$secondary300",
						":hover": {
							color: "$secondary300",
						},
						":active": {
							color: "$secondary200",
						},
					},
					_icon: {
						color: "$secondary300",
						":hover": {
							color: "$secondary300",
						},
						":active": {
							color: "$secondary200",
						},
					},
					_spinner: {
						props: {
							color: "$secondary300",
						},
						":hover": {
							props: { color: "$secondary300" },
						},
						":active": {
							props: { color: "$secondary200" },
						},
					},
				},
			},
			specialLogs: {
				bg: "rgba(230, 227, 219, 0.5)",
				borderColor: "#40E0D0",
				borderRadius: 100,
				width: "$95%",
				size: "lg",

				":hover": {
					bg: "#357A71",
					borderColor: "#357A71",
				},

				":active": {
					bg: "",
					borderColor: "",
				},

				_text: {
					color: "#1E1E1E",
					textAlign: "left",
					fontFamily: "Inter_Bold",
					fontSize: 12,
					":hover": {
						color: "#1E1E1E",
					},
					":active": {
						color: "#1E1E1E",
					},
				},

				_icon: {
					color: "$primary600",
					":hover": {
						color: "$primary600",
					},
					":active": {
						color: "$primary700",
					},
				},

				_spinner: {
					props: {
						color: "$primary600",
					},
					":hover": {
						props: {
							color: "$primary600",
						},
					},
					":active": {
						props: {
							color: "$primary700",
						},
					},
				},

				_dark: {
					bg: "$primary400",
					borderColor: "$primary700",
					":hover": {
						bg: "$primary500",
						borderColor: "$primary400",
					},
					":active": {
						bg: "$primary600",
						borderColor: "$primary300",
					},
					_text: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_icon: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_spinner: {
						props: { color: "$primary300" },
						":hover": {
							props: { color: "$primary300" },
						},
						":active": {
							props: { color: "$primary200" },
						},
					},

					":focusVisible": {
						_web: {
							boxShadow: "offset 0 0 0 2px $info400",
						},
					},
				},
			},
			logEntry: {
				bg: "",
				borderColor: "",
				borderRadius: 10,
				width: "$95%",
				borderBottomWidth: 1,
				size: "lg",

				":hover": {
					bg: "#A3A3A3",
					borderColor: "",
				},

				":active": {
					bg: "",
					borderColor: "",
				},

				_text: {
					color: "#1E1E1E",
					textAlign: "left",
					fontFamily: "Inter",
					":hover": {
						color: "#1E1E1E",
					},
					":active": {
						color: "#1E1E1E",
					},
				},

				_icon: {
					color: "$primary600",
					":hover": {
						color: "$primary600",
					},
					":active": {
						color: "$primary700",
					},
				},

				_spinner: {
					props: {
						color: "$primary600",
					},
					":hover": {
						props: {
							color: "$primary600",
						},
					},
					":active": {
						props: {
							color: "$primary700",
						},
					},
				},

				_dark: {
					bg: "$primary400",
					borderColor: "$primary700",
					":hover": {
						bg: "$primary500",
						borderColor: "$primary400",
					},
					":active": {
						bg: "$primary600",
						borderColor: "$primary300",
					},
					_text: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_icon: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_spinner: {
						props: { color: "$primary300" },
						":hover": {
							props: { color: "$primary300" },
						},
						":active": {
							props: { color: "$primary200" },
						},
					},

					":focusVisible": {
						_web: {
							boxShadow: "offset 0 0 0 2px $info400",
						},
					},
				},
			},
			date: {
				bg: "#FFF",
				borderRadius: 5,
				width: "$100%",
				borderWidth: 1,
				borderColor: "#E6E3DB",

				":hover": {
					bg: "#A3A3A3",
					borderColor: "",
				},

				":active": {
					bg: "",
					borderColor: "",
				},

				_text: {
					color: "#4D5356",
					textAlign: "left",
					fontSize: 14,
					fontFamily: "Inter",
					":hover": {
						color: "#1E1E1E",
					},
					":active": {
						color: "#1E1E1E",
					},
				},

				_icon: {
					color: "#367B71",
					":hover": {
						color: "$primary600",
					},
					":active": {
						color: "$primary700",
					},
				},

				_spinner: {
					props: {
						color: "$primary600",
					},
					":hover": {
						props: {
							color: "$primary600",
						},
					},
					":active": {
						props: {
							color: "$primary700",
						},
					},
				},

				_dark: {
					bg: "$primary400",
					borderColor: "$primary700",
					":hover": {
						bg: "$primary500",
						borderColor: "$primary400",
					},
					":active": {
						bg: "$primary600",
						borderColor: "$primary300",
					},
					_text: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_icon: {
						color: "$primary300",
						":hover": {
							color: "$primary300",
						},
						":active": {
							color: "$primary200",
						},
					},
					_spinner: {
						props: { color: "$primary300" },
						":hover": {
							props: { color: "$primary300" },
						},
						":active": {
							props: { color: "$primary200" },
						},
					},

					":focusVisible": {
						_web: {
							boxShadow: "offset 0 0 0 2px $info400",
						},
					},
				},
			},
		},

		size: {
			xs: {
				px: "$3.5",
				h: "$8",
				_icon: {
					props: {
						size: "2xs",
					},
				},
				_text: {
					props: {
						size: "xs",
					},
				},
			},
			sm: {
				px: "$4",
				h: "$9",
				_icon: {
					props: {
						size: "sm",
					},
				},
				_text: {
					props: {
						size: "sm",
					},
				},
			},
			md: {
				px: "$5",
				h: "$10",
				_icon: {
					props: {
						size: "md",
					},
				},
				_text: {
					props: {
						size: "md",
					},
				},
			},
			lg: {
				px: "$6",
				h: "$11",
				_icon: {
					props: {
						size: "md",
					},
				},
				_text: {
					props: {
						size: "lg",
					},
				},
			},
			xl: {
				px: "$7",
				h: "$12",
				_icon: {
					props: {
						size: "lg",
					},
				},
				_text: {
					props: {
						size: "xl",
					},
				},
			},
		},
	},
	compoundVariants: [
		{
			action: "primary",
			variant: "link",
			value: {
				px: "$0",
				bg: "transparent",
				":hover": {
					bg: "transparent",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "transparent",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
		},
		{
			action: "secondary",
			variant: "link",
			value: {
				px: "$0",
				bg: "transparent",
				":hover": {
					bg: "transparent",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "transparent",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
		},
		{
			action: "positive",
			variant: "link",
			value: {
				px: "$0",
				bg: "transparent",
				":hover": {
					bg: "transparent",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "transparent",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
		},
		{
			action: "negative",
			variant: "link",
			value: {
				px: "$0",
				bg: "transparent",
				":hover": {
					bg: "transparent",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "transparent",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
		},
		{
			action: "primary",
			variant: "outline",
			value: {
				bg: "transparent",
				":hover": {
					bg: "$backgroundLight50",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "$backgroundDark900",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
		},
		{
			action: "secondary",
			variant: "outline",
			value: {
				bg: "transparent",
				":hover": {
					bg: "$backgroundLight50",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "$backgroundDark900",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
		},
		{
			action: "positive",
			variant: "outline",
			value: {
				bg: "transparent",
				":hover": {
					bg: "$backgroundLight50",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "$backgroundDark900",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
		},
		{
			action: "negative",
			variant: "outline",
			value: {
				bg: "transparent",
				":hover": {
					bg: "$backgroundLight50",
				},
				":active": {
					bg: "transparent",
				},
				_dark: {
					bg: "transparent",
					":hover": {
						bg: "$backgroundDark900",
					},
					":active": {
						bg: "transparent",
					},
				},
			},
		},
		{
			action: "primary",
			variant: "solid",
			value: {
				_text: {
					color: "$textLight0",
					":hover": {
						color: "$textLight0",
					},
					":active": {
						color: "$textLight0",
					},
				},
				_icon: {
					color: "$textLight0",
					":hover": {
						color: "$textLight0",
					},
					":active": {
						color: "$textLight0",
					},
				},
				_spinner: {
					props: { color: "$textLight0" },
					":hover": {
						props: { color: "$textLight0" },
					},
					":active": {
						props: { color: "$textLight0" },
					},
				},
				_dark: {
					_text: {
						color: "$textDark0",
						":hover": {
							color: "$textDark0",
						},
						":active": {
							color: "$textDark0",
						},
					},
					_icon: {
						color: "$textDark0",
						":hover": {
							color: "$textDark0",
						},
						":active": {
							color: "$textDark0",
						},
					},
					_spinner: {
						props: { color: "$textDark0" },
						":hover": {
							props: { color: "$textDark0" },
						},
						":active": {
							props: { color: "$textDark0" },
						},
					},
				},
			},
		},
		{
			action: "secondary",
			variant: "solid",
			value: {
				_text: {
					color: "$textLight0",
					":hover": {
						color: "$textLight0",
					},
					":active": {
						color: "$textLight0",
					},
				},
				_icon: {
					color: "$textLight0",
					":hover": {
						color: "$textLight0",
					},
					":active": {
						color: "$textLight0",
					},
				},
				_spinner: {
					props: { color: "$textLight0" },
					":hover": {
						props: { color: "$textLight0" },
					},
					":active": {
						props: { color: "$textLight0" },
					},
				},
				_dark: {
					_text: {
						color: "$textDark0",
						":hover": {
							color: "$textDark0",
						},
						":active": {
							color: "$textDark0",
						},
					},
					_icon: {
						color: "$textDark0",
						":hover": {
							color: "$textDark0",
						},
						":active": {
							color: "$textDark0",
						},
					},
					_spinner: {
						props: { color: "$textDark0" },
						":hover": {
							props: { color: "$textDark0" },
						},
						":active": {
							props: { color: "$textDark0" },
						},
					},
				},
			},
		},
		{
			action: "positive",
			variant: "solid",
			value: {
				_text: {
					color: "$textLight0",
					":hover": {
						color: "$textLight0",
					},
					":active": {
						color: "$textLight0",
					},
				},
				_icon: {
					color: "$textLight0",
					":hover": {
						color: "$textLight0",
					},
					":active": {
						color: "$textLight0",
					},
					props: { color: "$textLight0" },
				},
				_spinner: {
					props: { color: "$textLight0" },
					":hover": {
						props: { color: "$textLight0" },
					},
					":active": {
						props: { color: "$textLight0" },
					},
				},

				_dark: {
					_text: {
						color: "$textDark0",
						":hover": {
							color: "$textDark0",
						},
						":active": {
							color: "$textDark0",
						},
					},
					_icon: {
						color: "$textDark0",
						":hover": {
							color: "$textDark0",
						},
						":active": {
							color: "$textDark0",
						},
					},
					_spinner: {
						props: { color: "$textDark0" },
						":hover": {
							props: { color: "$textDark0" },
						},
						":active": {
							props: { color: "$textDark0" },
						},
					},
				},
			},
		},
		{
			action: "negative",
			variant: "solid",
			value: {
				_text: {
					color: "$textLight0",
					":hover": {
						color: "$textLight0",
					},
					":active": {
						color: "$textLight0",
					},
				},
				_icon: {
					color: "$textLight0",
					":hover": {
						color: "$textLight0",
					},
					":active": {
						color: "$textLight0",
					},
				},
				_spinner: {
					props: { color: "$textLight0" },
					":hover": {
						props: { color: "$textLight0" },
					},
					":active": {
						props: { color: "$textLight0" },
					},
				},
				_dark: {
					_text: {
						color: "$textDark0",
						":hover": {
							color: "$textDark0",
						},
						":active": {
							color: "$textDark0",
						},
					},
					_icon: {
						color: "$textDark0",
						":hover": {
							color: "$textDark0",
						},
						":active": {
							color: "$textDark0",
						},
					},
					_spinner: {
						props: { color: "$textDark0" },
						":hover": {
							props: { color: "$textDark0" },
						},
						":active": {
							props: { color: "$textDark0" },
						},
					},
				},
			},
		},
	],

	props: {
		size: "md",
		variant: "solid",
		action: "primary",
	},

	_web: {
		":focusVisible": {
			outlineWidth: "$0.5",
			outlineColor: "$primary700",
			outlineStyle: "solid",
			_dark: {
				outlineColor: "$primary300",
			},
		},
	},

	":disabled": {
		opacity: 0.4,
	},
});

const customCheckboxIcon = createStyle({
	":checked": {
		color: "$primary600",
	},
	":disabled": {
		opacity: 0.4,
	},
	_dark: {
		":checked": {
			color: "$backgroundDark0",
		},
		":disabled": {
			opacity: 0.4,
		},
	},
});

const customCheckboxIndicator = createStyle({
	justifyContent: "center",
	alignItems: "center",
	borderColor: "$borderLight300",
	bg: "$transparent",
	borderRadius: 6,

	_web: {
		":focusVisible": {
			outlineWidth: "2px",
			outlineColor: "$primary700",
			outlineStyle: "solid",
			_dark: {
				outlineColor: "$primary300",
			},
		},
	},

	/*':checked': {
    borderColor: '$primary600',
    bg: '$primary600',
  },*/

	":checked": {
		bg: "#E6E3DB",
		borderColor: "#E6E3DB",
	},

	":hover": {
		borderColor: "$borderLight500",
		bg: "transparent",
		":invalid": {
			borderColor: "$error700",
		},
		":checked": {
			bg: "$primary700",
			borderColor: "$primary700",
			":disabled": {
				borderColor: "$primary600",
				bg: "$primary600",
				opacity: 0.4,
				":invalid": {
					borderColor: "$error700",
				},
			},
		},
		":disabled": {
			borderColor: "$borderLight400",
			":invalid": {
				borderColor: "$error700",
			},
		},
	},

	":active": {
		":checked": {
			bg: "#E6E3DB",
			borderColor: "#E6E3DB",
		},
	},
	":invalid": {
		borderColor: "$error700",
	},
	":disabled": {
		opacity: 0.4,
	},

	_dark: {
		borderColor: "$borderDark500",
		bg: "$transparent",

		":checked": {
			borderColor: "$primary500",
			bg: "$primary500",
		},
		":hover": {
			borderColor: "$borderDark400",
			bg: "transparent",
			":invalid": {
				borderColor: "$error400",
			},
			":checked": {
				bg: "$primary400",
				borderColor: "$primary400",
				":disabled": {
					borderColor: "$primary500",
					bg: "$primary500",
					opacity: 0.4,
					":invalid": {
						borderColor: "$error400",
					},
				},
			},
			":disabled": {
				borderColor: "$borderDark500",
				":invalid": {
					borderColor: "$error400",
				},
			},
		},
		":active": {
			":checked": {
				bg: "$primary300",
				borderColor: "$primary300",
			},
		},

		":invalid": {
			borderColor: "$error400",
		},
		":disabled": {
			opacity: 0.4,
		},
	},
});

export { customColors, customButton, customCheckboxIcon, customCheckboxIndicator };
