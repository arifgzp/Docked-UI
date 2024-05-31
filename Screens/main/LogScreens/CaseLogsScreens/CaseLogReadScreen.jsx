import {
  Box,
  HStack,
  VStack,
  Button,
  ButtonText,
  KeyboardAvoidingView,
  Divider,
} from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import CaselogDropDownOptions from "./CaselogDropDownOptions";
import SpecialCaseLogSelectOptions from "./SpecialCaseLogSelectOptions";
import { useQuery } from "../../../../src/models";
import { formatRFC3339 } from "date-fns";
import { useRoute } from "@react-navigation/native";
import Loader from "../../../../components/Loader";

const CaseLogReadScreen = ({ navigation }) => {
  const routes = useRoute();
  const queryInfo = useQuery();
  const { store, setQuery } = queryInfo;
  const [loading, setLoading] = useState(false);
  const { control, formState, reset, watch, handleSubmit, setValue } = useForm({
    defaultValues: {
      hospital: "",
      faculty: "",
      date: new Date(),
    },
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log(store.getAnaesthesiaCaseLogById(routes.params.id));
    reset({
      ...store.getAnaesthesiaCaseLogById(routes.params.id)[0],
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      style={{ flex: 1, zIndex: 999 }}
    >
      <Loader
        apiLoadingInfo={loading}
        showSuccessMsg={false}
        navigation={navigation}
      >
        <Box flex={1} backgroundColor="$primaryBackground">
          <ScrollView>
            <Box paddingTop={10} justifyContent="center" alignItems="center">
              <Box width={"$100%"}>
                <CaselogDropDownOptions
                  control={control}
                  readOnly={true}
                  setValue={setValue}
                  formState={formState}
                />
                <Divider />
              </Box>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Box width={"$100%"}>
                <SpecialCaseLogSelectOptions
                  control={control}
                  formState={formState}
                />
              </Box>
            </Box>
          </ScrollView>
        </Box>
      </Loader>
    </KeyboardAvoidingView>
  );
};

export default CaseLogReadScreen;
