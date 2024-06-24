import {
  CheckIcon,
  CheckboxGroup,
  CheckboxIndicator,
  Divider,
  KeyboardAvoidingView,
  Select,
  SelectInput,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import {
  Box,
  Center,
  GluestackUIProvider,
  Text,
  StatusBar,
  Input,
  HStack,
  VStack,
  FormControlLabel,
  FormControl,
  FormControlLabelText,
  InputField,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  AlertCircleIcon,
  FormControlErrorIcon,
  FormControlErrorText,
  Button,
  ButtonText,
  Toast,
  useToast,
  ToastTitle,
  ToastDescription,
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { SelectIcon } from "@gluestack-ui/themed";
import DatePicker from "react-native-date-picker";
import { ChevronDown } from "lucide-react-native";
import { SelectBackdrop } from "@gluestack-ui/themed";
import { SelectItem, SelectContent } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import { format } from "date-fns";
import appStoreInstance from "../../../src/stores/AppStore";
import AppStore from "../../../src/stores/AppStore";
import { useQuery } from "../../../src/models";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import Loader from "../../../components/Loader";
import { ButtonIcon } from "@gluestack-ui/themed";
import { Modal } from "@gluestack-ui/themed";
import { ModalBackdrop } from "@gluestack-ui/themed";
import { ModalContent } from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { ModalCloseButton } from "@gluestack-ui/themed";
import { CloseIcon } from "@gluestack-ui/themed";
import { ModalBody } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";

const LogProfilePage = ({ navigation, route }) => {
  const { caseLogFormToGet } = route.params;
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      hospital: "",
      faculties: [],
      rotations: [],
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [modalView, setModalView] = useState("");
  const ref = useRef(null);
  const {
    control: controlForRotations,
    handleSubmit: handleSubmitForRotations,
    formState: { errors: errorsForRotations },
    reset: resetForRotations,
    watch: watchForRotations,
    setValue: setValueForRotations,
  } = useForm({
    defaultValues: {
      department: "",
      from: new Date(),
      to: new Date(),
    },
  });

  const {
    control: controlForFaculty,
    handleSubmit: handleSubmitForFaculty,
    formState: { errors: errorsForFaculty },
    reset: resetForFaculty,
    watch: watchForFaculty,
    setValue: setValueForFaculty,
  } = useForm({
    defaultValues: {
      facultyName: "",
      facultyDesignation: "",
      facultyPhoneNumber: "",
    },
  });

  const toast = useToast();
  const queryInfo = useQuery();
  const { store, setQuery } = queryInfo;
  const [currentKey, setCurrentKey] = useState(null);
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const [facultyList, setFacultyList] = useState([]);
  const [rotationList, setRotationList] = useState([]);

  const handleSetDate = (date, key) => {
    if (date instanceof Date && !isNaN(date)) {
      setValue(key, date);
    } else {
      console.error("Invalid date value");
    }
  };

  const handleOpenFaculty = () => {
    setModalView("faculty");
    setShowModal(true);
  };

  const handleOpenRotation = () => {
    setModalView("rotation");
    setShowModal(true);
  };
  const handleSaveFaculty = () => {
    setShowModal(false);
    const newFaculty = {
      name: watchForFaculty("facultyName"),
      designation: watchForFaculty("facultyDesignation"),
      phoneNumber: watchForFaculty("facultyPhoneNumber"),
    };
    setFacultyList([...facultyList, newFaculty]);
    resetForFaculty({
      facultyName: null,
      facultyDesignation: null,
      facultyPhoneNumber: null,
      from: new Date(),
      to: new Date(),
    });
    resetForRotations({
      from: new Date(),
      to: new Date(),
    });
    setFromDate(new Date());
    setToDate(new Date());
  };

  const handleSaveRotation = () => {
    setShowModal(false);
    const newRotation = {
      department: watchForRotations("department"),
      from: watchForRotations("from"),
      to: watchForRotations("to"),
    };
    setRotationList([...rotationList, newRotation]);
    resetForRotations({
      department: null,
      from: new Date(),
      to: new Date(),
    });
    setFromDate(new Date());
    setToDate(new Date());
  };

  const handleOnSave = async () => {
    // Check if rotationList or facultyList is empty
    if (rotationList.length === 0 || facultyList.length === 0) {
      // Raise an error indicating rotation or faculty cannot be empty
      toast.show({
        placement: "top",
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
            <Toast nativeID={toastId} action="warning" variant="accent">
              <VStack space="xs" mx="$4">
                <ToastTitle>Alert</ToastTitle>
                <ToastDescription>
                  Rotation or faculty cannot be empty.
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
      return; // Exit function early
    }

    const data = {
      faculties: facultyList,
      rotations: rotationList,
      hospital: watch("hospital"),
    };
    console.log("caseLogFormToGet", caseLogFormToGet);
    try {
      const query = store.updateUserLogProfile(AppStore.UserId, {
        set: { logProfile: data },
      });
      setQuery(query);
      const finishUpdatingLogProfile = await query;
      if (finishUpdatingLogProfile) {
        if (caseLogFormToGet) {
          navigation.navigate("Plus", {
            screen: "CaseLogFormScreen",
            params: { caseLogFormToGet: caseLogFormToGet },
          });
        } else {
          navigation.goBack();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchLogProfile = async () => {
      try {
        const query = store.fetchUserLogProfile(AppStore.UserName);
        setQuery(query);
        const finishFetchingLogProfile = await query;
        if (finishFetchingLogProfile) {
          const userData = toJS(finishFetchingLogProfile.queryUser[0]);
          const facultiesList = userData.logProfile.faculties.map((faculty) => {
            delete faculty.id;
            delete faculty.__typename;
            return faculty;
          });
          const rotationsList = userData.logProfile.rotations.map(
            (rotation) => {
              delete rotation.id;
              delete rotation.__typename;
              return rotation;
            }
          );
          reset({
            hospital: userData.logProfile.hospital,
            from: new Date(
              userData.logProfile.rotations[0]?.from || new Date()
            ),
            to: new Date(userData.logProfile.rotations[0]?.to || new Date()),
          });
          setFacultyList(facultiesList);
          setRotationList(rotationsList);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchLogProfile();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      style={{ flex: 1, zIndex: 999 }}
    >
      <Loader
        queryInfo={queryInfo}
        showSuccessMsg={false}
        navigation={navigation}
      >
        <Box
          flex={1}
          backgroundColor="$primaryBackground"
          justifyContent="center"
          alignItems="center"
        >
          <ScrollView width={"$100%"}>
            <Box
              width={"$100%"}
              flex={3 / 4}
              alignItems="center"
              paddingTop={20}
              paddingBottom={20}
            >
              <VStack space="lg" width={"$100%"} alignItems="center">
                <Box width={"$90%"}>
                  <Box alignItems="center" paddingBottom={10}>
                    <Text alignSelf="flex-start" fontFamily="Inter_Bold">
                      Hospital <Text color="#DE2E2E">*</Text>
                    </Text>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      key="hospital"
                      name="hospital"
                      render={({ field: { onChange, onBlur, value } }) => {
                        return (
                          <Select
                            width={"$100%"}
                            onBlur={onBlur}
                            onValueChange={onChange}
                            selectedValue={value}
                          >
                            <SelectTrigger variant="underlined" size="md">
                              <SelectInput placeholder="Hospital" />
                              <SelectIcon mr="$3">
                                <Icon as={ChevronDown} m="$2" w="$4" h="$4" />
                              </SelectIcon>
                            </SelectTrigger>
                            <SelectPortal>
                              <SelectBackdrop />
                              <SelectContent>
                                <Text padding={10} size="xl">
                                  Hospital
                                </Text>
                                <Divider borderWidth={0.1} />
                                <SelectItem label="JJ" value="JJ" />
                              </SelectContent>
                            </SelectPortal>
                          </Select>
                        );
                      }}
                    />
                  </Box>
                  <Box alignItems="center">
                    <Box width={"$100%"}>
                      {errors.hospital && (
                        <Text color="#DE2E2E">This is required.</Text>
                      )}
                    </Box>
                  </Box>
                </Box>
                <Box width={"$90%"}>
                  <Text alignSelf="flex-start" fontFamily="Inter_Bold">
                    Faculty list <Text color="#DE2E2E">*</Text>
                  </Text>
                </Box>
                <Box width={"$90%"}>
                  <Button
                    onPress={handleOpenFaculty}
                    ref={ref}
                    alignSelf="flex-start"
                    width={"$50%"}
                    height={50}
                    size="sm"
                    variant="secondary"
                  >
                    <ButtonText
                      color="#1E1E1E"
                      fontFamily="Inter_Bold"
                      textAlign="center"
                    >
                      Create Faculty
                    </ButtonText>
                  </Button>
                  <Modal
                    isOpen={showModal}
                    onClose={() => {
                      setShowModal(false);
                    }}
                    finalFocusRef={ref}
                  >
                    <ModalBackdrop />
                    <ModalContent p="$3">
                      {modalView === "faculty" ? (
                        <>
                          <HStack justifyContent="space-between">
                            <Heading size="lg">Create Faculty</Heading>
                            <ModalCloseButton>
                              <Icon as={CloseIcon} />
                            </ModalCloseButton>
                          </HStack>

                          <Box px="$3" pb="$3">
                            <Box>
                              <Controller
                                control={controlForFaculty}
                                rules={{
                                  required: true,
                                }}
                                key="facultyName"
                                name="facultyName"
                                render={({
                                  field: { onChange, onBlur, value },
                                }) => {
                                  return (
                                    <Input
                                      width={"$100%"}
                                      variant="underlined"
                                      size="md"
                                      isDisabled={false}
                                      isInvalid={false}
                                      isReadOnly={false}
                                    >
                                      <InputField
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Faculty name"
                                      />
                                    </Input>
                                  );
                                }}
                              />
                            </Box>
                            <Box alignItems="center">
                              <Box width="$100%">
                                {errorsForFaculty.facultyName && (
                                  <Text color="#DE2E2E">This is required.</Text>
                                )}
                              </Box>
                            </Box>

                            <Box>
                              <Box alignItems="center">
                                <Controller
                                  control={controlForFaculty}
                                  rules={{
                                    required: true,
                                  }}
                                  name="facultyDesignation"
                                  key="facultyDesignation"
                                  render={({
                                    field: { onChange, onBlur, value },
                                  }) => {
                                    return (
                                      <Select
                                        width={"$100%"}
                                        onBlur={onBlur}
                                        onValueChange={onChange}
                                        selectedValue={value}
                                      >
                                        <SelectTrigger
                                          variant="underlined"
                                          size="md"
                                        >
                                          <SelectInput placeholder="Designation" />
                                          <SelectIcon mr="$3">
                                            <Icon
                                              as={ChevronDown}
                                              m="$2"
                                              w="$4"
                                              h="$4"
                                            />
                                          </SelectIcon>
                                        </SelectTrigger>
                                        <SelectPortal>
                                          <SelectBackdrop />
                                          <SelectContent>
                                            <Text padding={10} size="xl">
                                              Designation
                                            </Text>
                                            <Divider borderWidth={0.1} />
                                            <SelectItem
                                              label="Designation"
                                              value="Designation"
                                            />
                                          </SelectContent>
                                        </SelectPortal>
                                      </Select>
                                    );
                                  }}
                                />
                              </Box>
                              <Box alignItems="center">
                                <Box width={"$100%"}>
                                  {errorsForFaculty.facultyDesignation && (
                                    <Text color="#DE2E2E">
                                      This is required.
                                    </Text>
                                  )}
                                </Box>
                              </Box>
                            </Box>
                            <Box>
                              <Box alignItems="center">
                                <Controller
                                  control={controlForFaculty}
                                  rules={{
                                    required: true,
                                  }}
                                  key="facultyPhoneNumber"
                                  name="facultyPhoneNumber"
                                  render={({
                                    field: { onChange, onBlur, value },
                                  }) => {
                                    return (
                                      <Input
                                        width={"$100%"}
                                        variant="underlined"
                                        size="md"
                                        isDisabled={false}
                                        isInvalid={false}
                                        isReadOnly={false}
                                      >
                                        <InputField
                                          onChangeText={onChange}
                                          value={value}
                                          placeholder="Phone Number"
                                        />
                                      </Input>
                                    );
                                  }}
                                />
                              </Box>
                              <Box alignItems="center">
                                <Box width={"$100%"}>
                                  {errorsForFaculty.facultyPhoneNumber && (
                                    <Text color="#DE2E2E">
                                      This is required.
                                    </Text>
                                  )}
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <HStack justifyContent="$space-between">
                            <Button
                              size="sm"
                              w="$45%"
                              variant="secondary"
                              onPress={() => {
                                setShowModal(false);
                              }}
                            >
                              <ButtonText>Cancel</ButtonText>
                            </Button>
                            <Button
                              w="$50%"
                              size="sm"
                              variant="primary"
                              action="positive"
                              onPress={handleSubmitForFaculty(
                                handleSaveFaculty
                              )}
                            >
                              <ButtonText>Save Faculty</ButtonText>
                            </Button>
                          </HStack>
                        </>
                      ) : (
                        <>
                          <HStack justifyContent="space-between">
                            <Heading size="lg">Create Rotation</Heading>
                            <ModalCloseButton>
                              <Icon as={CloseIcon} />
                            </ModalCloseButton>
                          </HStack>

                          <Box px="$3" pb="$3">
                            <Box alignItems="center" paddingBottom={10}>
                              <Controller
                                control={controlForRotations}
                                rules={{
                                  required: true,
                                }}
                                name="department"
                                key="department"
                                render={({
                                  field: { onChange, onBlur, value },
                                }) => {
                                  return (
                                    <Select
                                      width={"$100%"}
                                      onBlur={onBlur}
                                      onValueChange={onChange}
                                      selectedValue={value}
                                    >
                                      <SelectTrigger
                                        variant="underlined"
                                        size="md"
                                      >
                                        <SelectInput placeholder="Department" />
                                        <SelectIcon mr="$3">
                                          <Icon
                                            as={ChevronDown}
                                            m="$2"
                                            w="$4"
                                            h="$4"
                                          />
                                        </SelectIcon>
                                      </SelectTrigger>
                                      <SelectPortal>
                                        <SelectBackdrop />
                                        <SelectContent>
                                          <Text padding={10} size="xl">
                                            Department
                                          </Text>
                                          <Divider borderWidth={0.1} />
                                          <SelectItem
                                            label="Department"
                                            value="Department"
                                          />
                                          <SelectItem
                                            label="Department-1"
                                            value="Department-1"
                                          />
                                          <SelectItem
                                            label="Department-2"
                                            value="Department-2"
                                          />
                                        </SelectContent>
                                      </SelectPortal>
                                    </Select>
                                  );
                                }}
                              />
                            </Box>

                            <Box alignItems="center">
                              <Box width={"$100%"}>
                                {errorsForRotations.department && (
                                  <Text color="#DE2E2E">This is required.</Text>
                                )}
                              </Box>
                            </Box>

                            <VStack
                              width={"$90%"}
                              spcae="lg"
                              justifyContent="space-between"
                            >
                              <Button
                                width={"$90%"}
                                justifyContent="flex-start"
                                alignItems="center"
                                variant="link"
                                onPress={() => {
                                  setCurrentKey("from");
                                  setFromOpen(true);
                                }}
                              >
                                <ButtonIcon
                                  pr="$2"
                                  as={Ionicons}
                                  size={20}
                                  name="calendar-outline"
                                  color="#1E1E1E"
                                />

                                <ButtonText fontFamily="Inter">
                                  From -{" "}
                                  {format(new Date(fromDate), "do/MMM/yyy")}
                                </ButtonText>
                              </Button>
                              <Button
                                width={"$90%"}
                                justifyContent="flex-start"
                                alignItems="center"
                                variant="link"
                                onPress={() => {
                                  setCurrentKey("to");
                                  setToOpen(true);
                                }}
                              >
                                <ButtonIcon
                                  pr="$2"
                                  as={Ionicons}
                                  size={20}
                                  name="calendar-outline"
                                  color="#1E1E1E"
                                />

                                <ButtonText fontFamily="Inter">
                                  To - {format(new Date(toDate), "do/MMM/yyyy")}
                                </ButtonText>
                              </Button>
                              <DatePicker
                                modal
                                open={fromOpen}
                                theme="light"
                                date={fromDate}
                                // onDateChange={(date) => {
                                // 	//setDate(date);
                                // 	handelSetDate(date);
                                // }}
                                onConfirm={(date) => {
                                  setFromDate(date);
                                  setFromOpen(false);
                                  handleSetDate(date, currentKey);
                                }}
                                onCancel={() => {
                                  setFromOpen(false);
                                }}
                                mode="date"
                              />
                              <DatePicker
                                modal
                                open={toOpen}
                                theme="light"
                                date={toDate}
                                // onDateChange={(date) => {
                                // 	//setDate(date);
                                // 	handelSetDate(date);
                                // }}
                                onConfirm={(date) => {
                                  setToDate(date);
                                  setToOpen(false);
                                  handleSetDate(date, currentKey);
                                }}
                                onCancel={() => {
                                  setToOpen(false);
                                }}
                                mode="date"
                              />
                            </VStack>
                          </Box>
                          <HStack justifyContent="$space-between">
                            <Button
                              size="sm"
                              w="$45%"
                              variant="secondary"
                              onPress={() => {
                                setShowModal(false);
                              }}
                            >
                              <ButtonText>Cancel</ButtonText>
                            </Button>
                            <Button
                              w="$50%"
                              size="sm"
                              variant="primary"
                              action="positive"
                              onPress={handleSubmitForRotations(
                                handleSaveRotation
                              )}
                            >
                              <ButtonText>Save Rotation</ButtonText>
                            </Button>
                          </HStack>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </Box>
                <VStack space="lg" width={"$90%"} alignItems="center">
                  {facultyList.map((faculty, index) => {
                    return (
                      <HStack
                        key={index}
                        alignItems="center"
                        space="lg"
                        width={"$100%"}
                      >
                        <Text width={"$10%"}>{index + 1}.</Text>
                        <Text width={"$18%"}>{faculty.name}</Text>
                        <Text width={"$30%"}>{faculty.designation}</Text>
                        <Text width={"$30%"}>{faculty.phoneNumber}</Text>

                        {/* <Button
                          width={"$30%"}
                          height={50}
                          size="sm"
                          variant="secondary"
                        >
                          <ButtonText
                            color="#1E1E1E"
                            fontFamily="Inter_Bold"
                            textAlign="center"
                          >
                            Verify
                          </ButtonText>
                        </Button> */}
                      </HStack>
                    );
                  })}
                </VStack>
                {/* <Box width={"$90%"}>
                  <Text size="xs" alignSelf="flex-start">
                    Faculty will shortly receive a verification link
                  </Text>
                </Box> */}
                <Box width={"$90%"}>
                  <Text alignSelf="flex-start" fontFamily="Inter_Bold">
                    Rotation<Text color="#DE2E2E">*</Text>
                  </Text>
                </Box>
                <Box width={"$90%"}>
                  <Button
                    onPress={handleOpenRotation}
                    ref={ref}
                    alignSelf="flex-start"
                    width={"$50%"}
                    height={50}
                    size="sm"
                    variant="secondary"
                  >
                    <ButtonText
                      color="#1E1E1E"
                      fontFamily="Inter_Bold"
                      textAlign="center"
                    >
                      Create Rotation
                    </ButtonText>
                  </Button>
                </Box>
                <VStack space="lg" width={"$90%"} alignItems="center">
                  {rotationList.map((rotation, index) => {
                    console.log("rotation", rotation);
                    return (
                      <HStack
                        key={index}
                        alignItems="center"
                        space="lg"
                        width={"$100%"}
                      >
                        <Text width={"$10%"}>{index + 1}.</Text>
                        <Text width={"$25%"}>{rotation.department}</Text>
                        <Text width={"$25%"}>
                          {format(new Date(rotation?.from), "do MMM yyyy")}
                        </Text>
                        <Text width={"$25%"}>
                          {format(new Date(rotation?.to), "do MMM yyyy")}
                        </Text>
                      </HStack>
                    );
                  })}
                </VStack>
              </VStack>
            </Box>
            <Box
              flex={1 / 4}
              width={"$100%"}
              alignItems="center"
              paddingBottom={"$30%"}
            >
              <Button
                onPress={handleSubmit(handleOnSave)}
                height={50}
                size="lg"
                variant="primary"
              >
                <ButtonText
                  color="#1E1E1E"
                  fontFamily="Inter_Bold"
                  textAlign="center"
                >
                  Save
                </ButtonText>
              </Button>
            </Box>
          </ScrollView>
        </Box>
      </Loader>
    </KeyboardAvoidingView>
  );
};

export default observer(LogProfilePage);
