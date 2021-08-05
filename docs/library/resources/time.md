---
id: time
title: Time
sidebar_label: Time
---

Gestão de dados temporal baseada no **java.time**.

---

## castToChronoLocalDate

---

#### _time.castToChronoLocalDate(arg0: _Object_) : _ChronoLocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _ChronoLocalDate_ )


---

## castToTemporal

---

#### _time.castToTemporal(arg0: _Object_) : _Temporal_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Temporal_ )


---

## castToTemporalAcessor

---

#### _time.castToTemporalAcessor(arg0: _Object_) : _TemporalAccessor_
##### Description

Converte o objeeto passado para TemporalAcessor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _TemporalAccessor_ )


---

## chronoField

---

#### _time.chronoField(arg0: string) : _ChronoField_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _ChronoField_ )


---

## chronoUnit

---

#### _time.chronoUnit(arg0: string) : _ChronoUnit_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _ChronoUnit_ )


---

## clock

---

#### _time.clock() : _Clock_
##### Return

( _Clock_ )


---

## clockFixed

---

#### _time.clockFixed(arg0: _Instant_, arg1: _ZoneId_) : _Clock_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Instant_ |   |
| arg1 | _ZoneId_ |   |

##### Return

( _Clock_ )


---

## clockOffset

---

#### _time.clockOffset(arg0: _Clock_, arg1: _Duration_) : _Clock_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |
| arg1 | _Duration_ |   |

##### Return

( _Clock_ )


---

## clockSystem

---

#### _time.clockSystem(arg0: _ZoneId_) : _Clock_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _Clock_ )


---

## clockSystemUTC

---

#### _time.clockSystemUTC() : _Clock_
##### Return

( _Clock_ )


---

## clockTick

---

#### _time.clockTick(arg0: _Clock_, arg1: _Duration_) : _Clock_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |
| arg1 | _Duration_ |   |

##### Return

( _Clock_ )


---

## clockTickMinutes

---

#### _time.clockTickMinutes(arg0: _ZoneId_) : _Clock_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _Clock_ )


---

## clockTickSeconds

---

#### _time.clockTickSeconds(arg0: _ZoneId_) : _Clock_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _Clock_ )


---

## currentMilis

---

#### _time.currentMilis() : _long_
##### Return

( _long_ )


---

## date

---

#### _time.date() : _Date_
##### Return

( _Date_ )


---

## dateFrom

---

#### _time.dateFrom(arg0: _Instant_) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Instant_ |   |

##### Return

( _Date_ )


---

## dateTimeFormatter

---

#### _time.dateTimeFormatter() : _DateTimeFormatter_
##### Return

( _DateTimeFormatter_ )


---

#### _time.dateTimeFormatter(arg0: string) : _DateTimeFormatter_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _DateTimeFormatter_ )


---

#### _time.dateTimeFormatter(arg0: string, arg1: _Locale_) : _DateTimeFormatter_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Locale_ |   |

##### Return

( _DateTimeFormatter_ )


---

## dateTimeFormatterBuilder

---

#### _time.dateTimeFormatterBuilder() : _DateTimeFormatterBuilder_
##### Return

( _DateTimeFormatterBuilder_ )


---

## decimalStyle

---

#### _time.decimalStyle() : _DecimalStyle_
##### Return

( _DecimalStyle_ )


---

#### _time.decimalStyle(arg0: string) : _DecimalStyle_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _DecimalStyle_ )


---

## duration

---

#### _time.duration() : _Duration_
##### Return

( _Duration_ )


---

#### _time.duration(arg0: string) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Duration_ )


---

## durationBetween

---

#### _time.durationBetween(arg0: _Temporal_, arg1: _Temporal_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Temporal_ |   |
| arg1 | _Temporal_ |   |

##### Return

( _Duration_ )


---

## durationFrom

---

#### _time.durationFrom(arg0: _TemporalAmount_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAmount_ |   |

##### Return

( _Duration_ )


---

## durationOf

---

#### _time.durationOf(arg0: _long_, arg1: _TemporalUnit_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _TemporalUnit_ |   |

##### Return

( _Duration_ )


---

## durationOfDays

---

#### _time.durationOfDays(arg0: _long_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _Duration_ )


---

## durationOfHours

---

#### _time.durationOfHours(arg0: _long_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _Duration_ )


---

## durationOfMillis

---

#### _time.durationOfMillis(arg0: _long_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _Duration_ )


---

## durationOfMinutes

---

#### _time.durationOfMinutes(arg0: _long_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _Duration_ )


---

## durationOfNanos

---

#### _time.durationOfNanos(arg0: _long_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _Duration_ )


---

## durationOfSeconds

---

#### _time.durationOfSeconds(arg0: _long_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _Duration_ )


---

#### _time.durationOfSeconds(arg0: _long_, arg1: _long_) : _Duration_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |

##### Return

( _Duration_ )


---

## instant

---

#### _time.instant() : _Instant_
##### Return

( _Instant_ )


---

#### _time.instant(arg0: string) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Instant_ )


---

#### _time.instant(arg0: _Clock_) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |

##### Return

( _Instant_ )


---

## instantFrom

---

#### _time.instantFrom(arg0: _TemporalAccessor_) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _Instant_ )


---

## instantOfEpochMilli

---

#### _time.instantOfEpochMilli(arg0: _long_) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _Instant_ )


---

## instantOfEpochSecond

---

#### _time.instantOfEpochSecond(arg0: _long_) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _Instant_ )


---

#### _time.instantOfEpochSecond(arg0: _long_, arg1: _long_) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |

##### Return

( _Instant_ )


---

## instantParse

---

#### _time.instantParse(arg0: _CharSequence_) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _CharSequence_ |   |

##### Return

( _Instant_ )


---

## isoFields

---

#### _time.isoFields(arg0: string) : _IsoFields_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _IsoFields_ )


---

## julianFields

---

#### _time.julianFields(arg0: string) : _JulianFields_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _JulianFields_ )


---

## localDate

---

#### _time.localDate() : _LocalDate_
##### Return

( _LocalDate_ )


---

#### _time.localDate(arg0: string) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDate_ )


---

#### _time.localDate(arg0: _Clock_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |

##### Return

( _LocalDate_ )


---

#### _time.localDate(arg0: _ZoneId_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _LocalDate_ )


---

## localDateFrom

---

#### _time.localDateFrom(arg0: _TemporalAccessor_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _LocalDate_ )


---

## localDateOf

---

#### _time.localDateOf(arg0: _int_, arg1: _int_, arg2: _int_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _LocalDate_ )


---

#### _time.localDateOf(arg0: _int_, arg1: _Month_, arg2: _int_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Month_ |   |
| arg2 | _int_ |   |

##### Return

( _LocalDate_ )


---

## localDateOfEpochDay

---

#### _time.localDateOfEpochDay(arg0: _long_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _LocalDate_ )


---

## localDateOfYearDay

---

#### _time.localDateOfYearDay(arg0: _int_, arg1: _int_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _LocalDate_ )


---

## localDateParse

---

#### _time.localDateParse(arg0: _CharSequence_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _CharSequence_ |   |

##### Return

( _LocalDate_ )


---

#### _time.localDateParse(arg0: _CharSequence_, arg1: _DateTimeFormatter_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _CharSequence_ |   |
| arg1 | _DateTimeFormatter_ |   |

##### Return

( _LocalDate_ )


---

## localDateTime

---

#### _time.localDateTime() : _LocalDateTime_
##### Return

( _LocalDateTime_ )


---

#### _time.localDateTime(arg0: string) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDateTime_ )


---

#### _time.localDateTime(arg0: _Clock_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |

##### Return

( _LocalDateTime_ )


---

#### _time.localDateTime(arg0: _ZoneId_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _LocalDateTime_ )


---

## localDateTimeFrom

---

#### _time.localDateTimeFrom(arg0: _TemporalAccessor_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _LocalDateTime_ )


---

## localDateTimeOf

---

#### _time.localDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |

##### Return

( _LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |

##### Return

( _LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_, arg6: _int_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |
| arg6 | _int_ |   |

##### Return

( _LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _Month_, arg2: _int_, arg3: _int_, arg4: _int_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Month_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |

##### Return

( _LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _Month_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Month_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |

##### Return

( _LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _Month_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_, arg6: _int_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Month_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |
| arg6 | _int_ |   |

##### Return

( _LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _LocalDate_, arg1: _LocalTime_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _LocalDate_ |   |
| arg1 | _LocalTime_ |   |

##### Return

( _LocalDateTime_ )


---

## localDateTimeOfEpochSecond

---

#### _time.localDateTimeOfEpochSecond(arg0: _long_, arg1: _int_, arg2: _ZoneOffset_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _int_ |   |
| arg2 | _ZoneOffset_ |   |

##### Return

( _LocalDateTime_ )


---

## localDateTimeOfInstant

---

#### _time.localDateTimeOfInstant(arg0: _Instant_, arg1: _ZoneId_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Instant_ |   |
| arg1 | _ZoneId_ |   |

##### Return

( _LocalDateTime_ )


---

## localDateTimeParse

---

#### _time.localDateTimeParse(arg0: _CharSequence_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _CharSequence_ |   |

##### Return

( _LocalDateTime_ )


---

#### _time.localDateTimeParse(arg0: _CharSequence_, arg1: _DateTimeFormatter_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _CharSequence_ |   |
| arg1 | _DateTimeFormatter_ |   |

##### Return

( _LocalDateTime_ )


---

## localTime

---

#### _time.localTime() : _LocalTime_
##### Return

( _LocalTime_ )


---

#### _time.localTime(arg0: string) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalTime_ )


---

#### _time.localTime(arg0: _Clock_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |

##### Return

( _LocalTime_ )


---

#### _time.localTime(arg0: _ZoneId_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _LocalTime_ )


---

## localTimeFrom

---

#### _time.localTimeFrom(arg0: _TemporalAccessor_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _LocalTime_ )


---

## localTimeOf

---

#### _time.localTimeOf(arg0: _int_, arg1: _int_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _LocalTime_ )


---

#### _time.localTimeOf(arg0: _int_, arg1: _int_, arg2: _int_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _LocalTime_ )


---

#### _time.localTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |

##### Return

( _LocalTime_ )


---

## localTimeOfNanoOfDay

---

#### _time.localTimeOfNanoOfDay(arg0: _long_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _LocalTime_ )


---

## localTimeOfSecondOfDay

---

#### _time.localTimeOfSecondOfDay(arg0: _long_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _LocalTime_ )


---

## localTimeParse

---

#### _time.localTimeParse(arg0: _CharSequence_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _CharSequence_ |   |

##### Return

( _LocalTime_ )


---

#### _time.localTimeParse(arg0: _CharSequence_, arg1: _DateTimeFormatter_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _CharSequence_ |   |
| arg1 | _DateTimeFormatter_ |   |

##### Return

( _LocalTime_ )


---

## month

---

#### _time.month(arg0: string) : _Month_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Month_ )


---

## monthDay

---

#### _time.monthDay() : _MonthDay_
##### Return

( _MonthDay_ )


---

#### _time.monthDay(arg0: _Clock_) : _MonthDay_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |

##### Return

( _MonthDay_ )


---

#### _time.monthDay(arg0: _ZoneId_) : _MonthDay_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _MonthDay_ )


---

## monthDayFrom

---

#### _time.monthDayFrom(arg0: _TemporalAccessor_) : _MonthDay_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _MonthDay_ )


---

## monthDayOf

---

#### _time.monthDayOf(arg0: _int_, arg1: _int_) : _MonthDay_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _MonthDay_ )


---

#### _time.monthDayOf(arg0: _Month_, arg1: _int_) : _MonthDay_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Month_ |   |
| arg1 | _int_ |   |

##### Return

( _MonthDay_ )


---

## monthOf

---

#### _time.monthOf(arg0: _int_) : _Month_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Month_ )


---

## monthValueOf

---

#### _time.monthValueOf(arg0: string) : _Month_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Month_ )


---

## offsetDateTime

---

#### _time.offsetDateTime() : _OffsetDateTime_
##### Return

( _OffsetDateTime_ )


---

#### _time.offsetDateTime(arg0: string) : _OffsetDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _OffsetDateTime_ )


---

## offsetDateTimeFrom

---

#### _time.offsetDateTimeFrom(arg0: _TemporalAccessor_) : _OffsetDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _OffsetDateTime_ )


---

## offsetDateTimeOf

---

#### _time.offsetDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_, arg6: _int_, arg7: _ZoneOffset_) : _OffsetDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |
| arg6 | _int_ |   |
| arg7 | _ZoneOffset_ |   |

##### Return

( _OffsetDateTime_ )


---

#### _time.offsetDateTimeOf(arg0: _LocalDate_, arg1: _LocalTime_, arg2: _ZoneOffset_) : _OffsetDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _LocalDate_ |   |
| arg1 | _LocalTime_ |   |
| arg2 | _ZoneOffset_ |   |

##### Return

( _OffsetDateTime_ )


---

#### _time.offsetDateTimeOf(arg0: _LocalDateTime_, arg1: _ZoneOffset_) : _OffsetDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _LocalDateTime_ |   |
| arg1 | _ZoneOffset_ |   |

##### Return

( _OffsetDateTime_ )


---

## offsetDateTimeOfInstant

---

#### _time.offsetDateTimeOfInstant(arg0: _Instant_, arg1: _ZoneOffset_) : _OffsetDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Instant_ |   |
| arg1 | _ZoneOffset_ |   |

##### Return

( _OffsetDateTime_ )


---

## offsetTime

---

#### _time.offsetTime() : _OffsetTime_
##### Return

( _OffsetTime_ )


---

#### _time.offsetTime(arg0: string) : _OffsetTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _OffsetTime_ )


---

#### _time.offsetTime(arg0: _Clock_) : _OffsetTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |

##### Return

( _OffsetTime_ )


---

#### _time.offsetTime(arg0: _ZoneId_) : _OffsetTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _OffsetTime_ )


---

## offsetTimeFrom

---

#### _time.offsetTimeFrom(arg0: _TemporalAccessor_) : _OffsetTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _OffsetTime_ )


---

## offsetTimeOf

---

#### _time.offsetTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _ZoneOffset_) : _OffsetTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _ZoneOffset_ |   |

##### Return

( _OffsetTime_ )


---

#### _time.offsetTimeOf(arg0: _LocalTime_, arg1: _ZoneOffset_) : _OffsetTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _LocalTime_ |   |
| arg1 | _ZoneOffset_ |   |

##### Return

( _OffsetTime_ )


---

## offsetTimeOfInstant

---

#### _time.offsetTimeOfInstant(arg0: _Instant_, arg1: _ZoneId_) : _OffsetTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Instant_ |   |
| arg1 | _ZoneId_ |   |

##### Return

( _OffsetTime_ )


---

## period

---

#### _time.period() : _Period_
##### Return

( _Period_ )


---

#### _time.period(arg0: string) : _Period_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Period_ )


---

## periodFrom

---

#### _time.periodFrom(arg0: _TemporalAmount_) : _Period_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAmount_ |   |

##### Return

( _Period_ )


---

## periodOf

---

#### _time.periodOf(arg0: _int_, arg1: _int_, arg2: _int_) : _Period_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _Period_ )


---

## periodOfDays

---

#### _time.periodOfDays(arg0: _int_) : _Period_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Period_ )


---

## periodOfMonths

---

#### _time.periodOfMonths(arg0: _int_) : _Period_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Period_ )


---

## periodOfWeeks

---

#### _time.periodOfWeeks(arg0: _int_) : _Period_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Period_ )


---

## periodOfYears

---

#### _time.periodOfYears(arg0: _int_) : _Period_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Period_ )


---

## unit

---

#### _time.unit(arg0: string) : _TimeUnit_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _TimeUnit_ )


---

## valueRangeOf

---

#### _time.valueRangeOf(arg0: _long_, arg1: _long_) : _ValueRange_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |

##### Return

( _ValueRange_ )


---

#### _time.valueRangeOf(arg0: _long_, arg1: _long_, arg2: _long_) : _ValueRange_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Return

( _ValueRange_ )


---

#### _time.valueRangeOf(arg0: _long_, arg1: _long_, arg2: _long_, arg3: _long_) : _ValueRange_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |
| arg3 | _long_ |   |

##### Return

( _ValueRange_ )


---

## year

---

#### _time.year() : _Year_
##### Return

( _Year_ )


---

#### _time.year(arg0: string) : _Year_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Year_ )


---

#### _time.year(arg0: _Clock_) : _Year_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |

##### Return

( _Year_ )


---

#### _time.year(arg0: _ZoneId_) : _Year_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _Year_ )


---

## yearFrom

---

#### _time.yearFrom(arg0: _TemporalAccessor_) : _Year_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _Year_ )


---

## yearMonth

---

#### _time.yearMonth() : _YearMonth_
##### Return

( _YearMonth_ )


---

#### _time.yearMonth(arg0: _Clock_) : _YearMonth_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |

##### Return

( _YearMonth_ )


---

#### _time.yearMonth(arg0: _ZoneId_) : _YearMonth_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _YearMonth_ )


---

## yearMonthFrom

---

#### _time.yearMonthFrom(arg0: _TemporalAccessor_) : _YearMonth_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _YearMonth_ )


---

## yearMonthOf

---

#### _time.yearMonthOf(arg0: _int_, arg1: _int_) : _YearMonth_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _YearMonth_ )


---

#### _time.yearMonthOf(arg0: _int_, arg1: _Month_) : _YearMonth_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Month_ |   |

##### Return

( _YearMonth_ )


---

## yearOf

---

#### _time.yearOf(arg0: _int_) : _Year_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Year_ )


---

## zoneId

---

#### _time.zoneId() : _ZoneId_
##### Return

( _ZoneId_ )


---

## zoneIdFrom

---

#### _time.zoneIdFrom(arg0: _TemporalAccessor_) : _ZoneId_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _ZoneId_ )


---

## zoneIdOf

---

#### _time.zoneIdOf(arg0: string) : _ZoneId_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _ZoneId_ )


---

#### _time.zoneIdOf(arg0: string, arg1: _Map_) : _ZoneId_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |

##### Return

( _ZoneId_ )


---

## zoneIdOfOffset

---

#### _time.zoneIdOfOffset(arg0: string, arg1: _ZoneOffset_) : _ZoneId_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _ZoneOffset_ |   |

##### Return

( _ZoneId_ )


---

## zoneOffset

---

#### _time.zoneOffset() : _ZoneOffset_
##### Return

( _ZoneOffset_ )


---

#### _time.zoneOffset(arg0: string) : _ZoneOffset_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _ZoneOffset_ )


---

## zoneOffsetFrom

---

#### _time.zoneOffsetFrom(arg0: _TemporalAccessor_) : _ZoneOffset_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _ZoneOffset_ )


---

## zoneOffsetOf

---

#### _time.zoneOffsetOf(arg0: string) : _ZoneOffset_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _ZoneOffset_ )


---

#### _time.zoneOffsetOf(arg0: string, arg1: _Map_) : _ZoneId_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |

##### Return

( _ZoneId_ )


---

## zoneOffsetOfHours

---

#### _time.zoneOffsetOfHours(arg0: _int_) : _ZoneOffset_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _ZoneOffset_ )


---

## zoneOffsetOfHoursMinutes

---

#### _time.zoneOffsetOfHoursMinutes(arg0: _int_, arg1: _int_) : _ZoneOffset_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _ZoneOffset_ )


---

## zoneOffsetOfHoursMinutesSeconds

---

#### _time.zoneOffsetOfHoursMinutesSeconds(arg0: _int_, arg1: _int_, arg2: _int_) : _ZoneOffset_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _ZoneOffset_ )


---

## zoneOffsetOfOffset

---

#### _time.zoneOffsetOfOffset(arg0: string, arg1: _ZoneOffset_) : _ZoneId_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _ZoneOffset_ |   |

##### Return

( _ZoneId_ )


---

## zoneOffsetOfTotalSeconds

---

#### _time.zoneOffsetOfTotalSeconds(arg0: _int_) : _ZoneOffset_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _ZoneOffset_ )


---

## zonedDateTime

---

#### _time.zonedDateTime() : _ZonedDateTime_
##### Return

( _ZonedDateTime_ )


---

#### _time.zonedDateTime(arg0: string) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _ZonedDateTime_ )


---

#### _time.zonedDateTime(arg0: _Clock_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Clock_ |   |

##### Return

( _ZonedDateTime_ )


---

#### _time.zonedDateTime(arg0: _ZoneId_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _ZoneId_ |   |

##### Return

( _ZonedDateTime_ )


---

## zonedDateTimeFrom

---

#### _time.zonedDateTimeFrom(arg0: _TemporalAccessor_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _TemporalAccessor_ |   |

##### Return

( _ZonedDateTime_ )


---

## zonedDateTimeOf

---

#### _time.zonedDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_, arg6: _int_, arg7: _ZoneId_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |
| arg6 | _int_ |   |
| arg7 | _ZoneId_ |   |

##### Return

( _ZonedDateTime_ )


---

#### _time.zonedDateTimeOf(arg0: _LocalDate_, arg1: _LocalTime_, arg2: _ZoneId_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _LocalDate_ |   |
| arg1 | _LocalTime_ |   |
| arg2 | _ZoneId_ |   |

##### Return

( _ZonedDateTime_ )


---

#### _time.zonedDateTimeOf(arg0: _LocalDateTime_, arg1: _ZoneId_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _LocalDateTime_ |   |
| arg1 | _ZoneId_ |   |

##### Return

( _ZonedDateTime_ )


---

## zonedDateTimeOfInstant

---

#### _time.zonedDateTimeOfInstant(arg0: _Instant_, arg1: _ZoneId_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Instant_ |   |
| arg1 | _ZoneId_ |   |

##### Return

( _ZonedDateTime_ )


---

#### _time.zonedDateTimeOfInstant(arg0: _LocalDateTime_, arg1: _ZoneOffset_, arg2: _ZoneId_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _LocalDateTime_ |   |
| arg1 | _ZoneOffset_ |   |
| arg2 | _ZoneId_ |   |

##### Return

( _ZonedDateTime_ )


---

## zonedDateTimeOfLocal

---

#### _time.zonedDateTimeOfLocal(arg0: _LocalDateTime_, arg1: _ZoneId_, arg2: _ZoneOffset_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _LocalDateTime_ |   |
| arg1 | _ZoneId_ |   |
| arg2 | _ZoneOffset_ |   |

##### Return

( _ZonedDateTime_ )


---

#### _time.zonedDateTimeOfLocal(arg0: _LocalDateTime_, arg1: _ZoneOffset_, arg2: _ZoneId_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _LocalDateTime_ |   |
| arg1 | _ZoneOffset_ |   |
| arg2 | _ZoneId_ |   |

##### Return

( _ZonedDateTime_ )


---

## zonedDateTimeParse

---

#### _time.zonedDateTimeParse(arg0: _CharSequence_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _CharSequence_ |   |

##### Return

( _ZonedDateTime_ )


---

#### _time.zonedDateTimeParse(arg0: _CharSequence_, arg1: _DateTimeFormatter_) : _ZonedDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _CharSequence_ |   |
| arg1 | _DateTimeFormatter_ |   |

##### Return

( _ZonedDateTime_ )


---

