# MMM-CountDown

Count down module for MagicMirror<sup>2</sup>

![Screenshot](https://github.com/sredden17/MMM-CountDown/blob/main/screenshots/screenshot.png)


## Installation

1. Clone this repo into `~/MagicMirror/modules` directory.<br>
  `git clone https://github.com/sredden17/MMM-CountDown.git`
2. Configure your `~/MagicMirror/config/config.js`:

Here is an example entry for `config.js`.

```
{
    module: "MMM-CountDown",
    position: "top_left", // Or any valid MagicMirror position.
    config: {
    	date: '2030-01-01 12:00:00',
        // See 'Configuration options' for more information.
    }
}
```

## Configuration options

| Option           | Description                                                |
| ---------------- | -----------------------------------------------------------|
| `date`           | *Required* Date to count down to (YYYY-MM-DD HH:MM:SS)     |
| `eventname`      | Name of the count down event                               |
| `customInterval` | Update interval. Default is 1000 													|
| `showYears`      | Display the years. Default is true                         |
| `showMonths`     | Display the months. Default is true                        |
| `showWeeks`      | Display the weeks. Default is true                         |
| `showHours`      | Display the hours. Default is true                         |
| `showDays`       | Display the days. Default is true                          |
| `showMinutes`    | Display the minutes. Default is true                       |
| `showSeconds`    | Display the seconds. Default is true                       |
| `yearsLabel`     | Display your years label. Default is 'Years'               |
| `monthsLabel`    | Display your months label. Default is 'Months'             |
| `weeksLabel`     | Display your weeks label. Default is 'Weeks'               |
| `daysLabel`      | Display your Days label. Default is 'Days'                 |
| `hoursLabel`     | Display your Hours label. Default is 'Hours'               |
| `minutesLabel`   | Display your Minutes label. Default is 'Minutes'           |
| `secondsLabel`   | Display your Seconds label. Default is 'Seconds'           |
| `image`          | Background image. 																					|

