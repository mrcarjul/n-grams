import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, getNgrams } from "../utils";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flex: 2,
    justifyContent: "center",
  },
  btnTxt: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "space-around",
    margin: 30,
  },
  errorTxt: {
    alignItems: "center",
    color: colors.tertiary,
    flex: 1,
    fontSize: 16,
    justifyContent: "center",
  },
  input: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 3,
  },
  itemContainer: {
    borderColor: colors.primary,
    borderWidth: 1,
    minHeight: 30,
    justifyContent: "center",
    marginVertical: 5,
    paddingVertical: 5,
    width: width * 0.8,
  },
  listContainer: {
    backgroundColor: colors.background,
    height: height * 0.8,
    width,
  },
  normalTxt: {
    color: colors.text,
    fontSize: 13,
    paddingHorizontal: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    justifyContent: "space-around",
  },
});

export function HomeScreen() {
  const [phrase, setPhrase] = React.useState<string>("");
  const [showError, setShowError] = React.useState<boolean>(false);
  const [ngrams, setNgrams] = React.useState<string[]>([]);

  const RenderItem = React.useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={styles.normalTxt}>{item}</Text>
      </View>
    ),
    []
  );

  const onPressBtn = React.useCallback(() => {
    if (phrase.length > 0) {
      setNgrams(getNgrams(phrase));
    } else {
      setShowError(true);
      setNgrams([]);
    }
  }, [phrase, setNgrams]);

  const ListEmptyComponent = React.useCallback(() => {
    if (showError) {
      return <Text style={styles.errorTxt}>Please input a phrase</Text>;
    }
    return null;
  }, [showError]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          onChangeText={setPhrase}
          style={styles.input}
          testID="inputHome"
        />
        <TouchableOpacity
          onPress={onPressBtn}
          style={styles.btnContainer}
          testID="btnHome"
        >
          <Text style={styles.btnTxt}>Get N-Grams</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          testID="flatlistHome"
          data={ngrams}
          renderItem={RenderItem}
          ListEmptyComponent={ListEmptyComponent}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
