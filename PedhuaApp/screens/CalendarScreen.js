import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

var aggression = [];
var colors = [];
var type_agg = [];

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marked: null,
    };
  }

  handleButtonClickRed = (e) => {
    colors.push("red");
    type_agg.push("physical_aggression");
  };

  handleButtonClickYellow = (e) => {
    colors.push("#CCCC00");
    type_agg.push("verbal_aggression");
  };

  handleButtonClickPurple = (e) => {
    colors.push("purple");
    type_agg.push("sexual_aggression");
  };

  componentDidMount() {
    this.anotherFunc();
  }

  // call function after you successfully get value in nextDay array

  anotherFunc = () => {
    var i = 0;
    var obj = aggression.reduce(
      (c, v) =>
        Object.assign(c, {
          [v]: {
            selected: true,
            marked: true,
            selectedColor: colors[i++],
          },
        }),
      {}
    );
    this.setState({ marked: obj });
  };

  render() {
    return (
      <View>
        <Calendar
          onDayPress={(day) => {
            if (aggression.indexOf(day.dateString) === -1) {
              aggression.push(`${day.dateString}`), console.log(type_agg);
              this.anotherFunc();
            }
          }}
          minDate={"2018-05-24"}
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          hideArrows={false}
          hideExtraDays={true}
          disableMonthChange={false}
          firstDay={1}
          hideDayNames={false}
          showWeekNumbers={false}
          onPressArrowLeft={(substractMonth) => substractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          markedDates={this.state.marked}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "orange",
            monthTextColor: "rgb(203, 11, 101)",
            textMonthFontWeight: "bold",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
        <View style={styles.buttons}>
          <Button
            title="Menstruation"
            color="white"
            onPress={this.handleButtonClickRed}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title="Ovulation"
            color="white"
            onPress={this.handleButtonClickYellow}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title="Secretory phase"
            color="white"
            onPress={this.handleButtonClickPurple}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
  },
  buttons: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "rgb(203, 11, 101)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
