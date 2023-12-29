---
id: time
title: Time
sidebar_label: Time
---

Gestão de dados temporal baseada no **java.time**.

---

## castToChronoLocalDate

---

#### _time.castToChronoLocalDate(arg0: _java.lang.Object_) : _java.time.chrono.ChronoLocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _java.time.chrono.ChronoLocalDate_ )


---

## castToTemporal

---

#### _time.castToTemporal(arg0: _java.lang.Object_) : _java.time.temporal.Temporal_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _java.time.temporal.Temporal_ )


---

## castToTemporalAcessor

---

#### _time.castToTemporalAcessor(arg0: _java.lang.Object_) : _java.time.temporal.TemporalAccessor_
##### Descrição

Converte o objeeto passado para TemporalAcessor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _java.time.temporal.TemporalAccessor_ )


---

## chronoField

---

#### _time.chronoField(arg0: string) : _java.time.temporal.ChronoField_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.temporal.ChronoField_ )


---

## chronoUnit

---

#### _time.chronoUnit(arg0: string) : _java.time.temporal.ChronoUnit_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.temporal.ChronoUnit_ )


---

## clock

---

#### _time.clock() : _java.time.Clock_
##### Retorno

( _java.time.Clock_ )


---

## clockFixed

---

#### _time.clockFixed(arg0: _java.time.Instant_, arg1: _java.time.ZoneId_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Instant_ |   |
| arg1 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockOffset

---

#### _time.clockOffset(arg0: _java.time.Clock_, arg1: _java.time.Duration_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |
| arg1 | _java.time.Duration_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockSystem

---

#### _time.clockSystem(arg0: _java.time.ZoneId_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockSystemUTC

---

#### _time.clockSystemUTC() : _java.time.Clock_
##### Retorno

( _java.time.Clock_ )


---

## clockTick

---

#### _time.clockTick(arg0: _java.time.Clock_, arg1: _java.time.Duration_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |
| arg1 | _java.time.Duration_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockTickMinutes

---

#### _time.clockTickMinutes(arg0: _java.time.ZoneId_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockTickSeconds

---

#### _time.clockTickSeconds(arg0: _java.time.ZoneId_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## currentMilis

---

#### _time.currentMilis() : _long_
##### Retorno

( _long_ )


---

## date

---

#### _time.date() : _java.util.Date_
##### Retorno

( _java.util.Date_ )


---

## dateFrom

---

#### _time.dateFrom(arg0: _java.time.Instant_) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Instant_ |   |

##### Retorno

( _java.util.Date_ )


---

## dateTimeFormatter

---

#### _time.dateTimeFormatter() : _java.time.format.DateTimeFormatter_
##### Retorno

( _java.time.format.DateTimeFormatter_ )


---

#### _time.dateTimeFormatter(arg0: string) : _java.time.format.DateTimeFormatter_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.format.DateTimeFormatter_ )


---

#### _time.dateTimeFormatter(arg0: string, arg1: _java.util.Locale_) : _java.time.format.DateTimeFormatter_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Locale_ |   |

##### Retorno

( _java.time.format.DateTimeFormatter_ )


---

## dateTimeFormatterBuilder

---

#### _time.dateTimeFormatterBuilder() : _java.time.format.DateTimeFormatterBuilder_
##### Retorno

( _java.time.format.DateTimeFormatterBuilder_ )


---

## decimalStyle

---

#### _time.decimalStyle() : _java.time.format.DecimalStyle_
##### Retorno

( _java.time.format.DecimalStyle_ )


---

#### _time.decimalStyle(arg0: string) : _java.time.format.DecimalStyle_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.format.DecimalStyle_ )


---

## duration

---

#### _time.duration() : _java.time.Duration_
##### Retorno

( _java.time.Duration_ )


---

#### _time.duration(arg0: string) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Duration_ )


---

## durationBetween

---

#### _time.durationBetween(arg0: _java.time.temporal.Temporal_, arg1: _java.time.temporal.Temporal_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.Temporal_ |   |
| arg1 | _java.time.temporal.Temporal_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationFrom

---

#### _time.durationFrom(arg0: _java.time.temporal.TemporalAmount_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAmount_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOf

---

#### _time.durationOf(arg0: _long_, arg1: _java.time.temporal.TemporalUnit_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _java.time.temporal.TemporalUnit_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfDays

---

#### _time.durationOfDays(arg0: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfHours

---

#### _time.durationOfHours(arg0: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfMillis

---

#### _time.durationOfMillis(arg0: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfMinutes

---

#### _time.durationOfMinutes(arg0: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfNanos

---

#### _time.durationOfNanos(arg0: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfSeconds

---

#### _time.durationOfSeconds(arg0: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

#### _time.durationOfSeconds(arg0: _long_, arg1: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## gregorianCalendar

---

#### _time.gregorianCalendar() : _java.util.GregorianCalendar_
##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(arg0: _int_, arg1: _int_, arg2: _int_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(arg0: _java.util.Locale_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Locale_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(arg0: _java.util.TimeZone_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.TimeZone_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(arg0: _java.util.TimeZone_, arg1: _java.util.Locale_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.TimeZone_ |   |
| arg1 | _java.util.Locale_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

## gregorianCalendarConstant

---

#### _time.gregorianCalendarConstant(arg0: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _int_ )


---

## instant

---

#### _time.instant() : _java.time.Instant_
##### Retorno

( _java.time.Instant_ )


---

#### _time.instant(arg0: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _time.instant(arg0: _java.time.Clock_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantFrom

---

#### _time.instantFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantOfEpochMilli

---

#### _time.instantOfEpochMilli(arg0: _long_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantOfEpochSecond

---

#### _time.instantOfEpochSecond(arg0: _long_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _time.instantOfEpochSecond(arg0: _long_, arg1: _long_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantParse

---

#### _time.instantParse(arg0: _java.lang.CharSequence_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.Instant_ )


---

## isoFields

---

#### _time.isoFields(arg0: string) : _java.time.temporal.IsoFields_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.temporal.IsoFields_ )


---

## julianFields

---

#### _time.julianFields(arg0: string) : _java.time.temporal.JulianFields_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.temporal.JulianFields_ )


---

## localDate

---

#### _time.localDate() : _java.time.LocalDate_
##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDate(arg0: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDate(arg0: _java.time.Clock_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDate(arg0: _java.time.ZoneId_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateFrom

---

#### _time.localDateFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateOf

---

#### _time.localDateOf(arg0: _int_, arg1: _int_, arg2: _int_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDateOf(arg0: _int_, arg1: _java.time.Month_, arg2: _int_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.time.Month_ |   |
| arg2 | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateOfEpochDay

---

#### _time.localDateOfEpochDay(arg0: _long_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateOfYearDay

---

#### _time.localDateOfYearDay(arg0: _int_, arg1: _int_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateParse

---

#### _time.localDateParse(arg0: _java.lang.CharSequence_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDateParse(arg0: _java.lang.CharSequence_, arg1: _java.time.format.DateTimeFormatter_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.CharSequence_ |   |
| arg1 | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateTime

---

#### _time.localDateTime() : _java.time.LocalDateTime_
##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTime(arg0: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTime(arg0: _java.time.Clock_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTime(arg0: _java.time.ZoneId_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeFrom

---

#### _time.localDateTimeFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeOf

---

#### _time.localDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_, arg6: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |
| arg6 | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _java.time.Month_, arg2: _int_, arg3: _int_, arg4: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.time.Month_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _java.time.Month_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.time.Month_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _int_, arg1: _java.time.Month_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_, arg6: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.time.Month_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |
| arg6 | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(arg0: _java.time.LocalDate_, arg1: _java.time.LocalTime_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.LocalDate_ |   |
| arg1 | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeOfEpochSecond

---

#### _time.localDateTimeOfEpochSecond(arg0: _long_, arg1: _int_, arg2: _java.time.ZoneOffset_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _int_ |   |
| arg2 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeOfInstant

---

#### _time.localDateTimeOfInstant(arg0: _java.time.Instant_, arg1: _java.time.ZoneId_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Instant_ |   |
| arg1 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeParse

---

#### _time.localDateTimeParse(arg0: _java.lang.CharSequence_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeParse(arg0: _java.lang.CharSequence_, arg1: _java.time.format.DateTimeFormatter_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.CharSequence_ |   |
| arg1 | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localTime

---

#### _time.localTime() : _java.time.LocalTime_
##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTime(arg0: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTime(arg0: _java.time.Clock_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTime(arg0: _java.time.ZoneId_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeFrom

---

#### _time.localTimeFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeOf

---

#### _time.localTimeOf(arg0: _int_, arg1: _int_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTimeOf(arg0: _int_, arg1: _int_, arg2: _int_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeOfNanoOfDay

---

#### _time.localTimeOfNanoOfDay(arg0: _long_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeOfSecondOfDay

---

#### _time.localTimeOfSecondOfDay(arg0: _long_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeParse

---

#### _time.localTimeParse(arg0: _java.lang.CharSequence_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTimeParse(arg0: _java.lang.CharSequence_, arg1: _java.time.format.DateTimeFormatter_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.CharSequence_ |   |
| arg1 | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## month

---

#### _time.month(arg0: string) : _java.time.Month_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Month_ )


---

## monthDay

---

#### _time.monthDay() : _java.time.MonthDay_
##### Retorno

( _java.time.MonthDay_ )


---

#### _time.monthDay(arg0: _java.time.Clock_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

#### _time.monthDay(arg0: _java.time.ZoneId_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

## monthDayFrom

---

#### _time.monthDayFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

## monthDayOf

---

#### _time.monthDayOf(arg0: _int_, arg1: _int_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

#### _time.monthDayOf(arg0: _java.time.Month_, arg1: _int_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Month_ |   |
| arg1 | _int_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

## monthOf

---

#### _time.monthOf(arg0: _int_) : _java.time.Month_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.time.Month_ )


---

## monthValueOf

---

#### _time.monthValueOf(arg0: string) : _java.time.Month_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Month_ )


---

## offsetDateTime

---

#### _time.offsetDateTime() : _java.time.OffsetDateTime_
##### Retorno

( _java.time.OffsetDateTime_ )


---

#### _time.offsetDateTime(arg0: string) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeFrom

---

#### _time.offsetDateTimeFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeOf

---

#### _time.offsetDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_, arg6: _int_, arg7: _java.time.ZoneOffset_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |
| arg6 | _int_ |   |
| arg7 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

#### _time.offsetDateTimeOf(arg0: _java.time.LocalDate_, arg1: _java.time.LocalTime_, arg2: _java.time.ZoneOffset_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.LocalDate_ |   |
| arg1 | _java.time.LocalTime_ |   |
| arg2 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

#### _time.offsetDateTimeOf(arg0: _java.time.LocalDateTime_, arg1: _java.time.ZoneOffset_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.LocalDateTime_ |   |
| arg1 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeOfInstant

---

#### _time.offsetDateTimeOfInstant(arg0: _java.time.Instant_, arg1: _java.time.ZoneOffset_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Instant_ |   |
| arg1 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetTime

---

#### _time.offsetTime() : _java.time.OffsetTime_
##### Retorno

( _java.time.OffsetTime_ )


---

#### _time.offsetTime(arg0: string) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.OffsetTime_ )


---

#### _time.offsetTime(arg0: _java.time.Clock_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

#### _time.offsetTime(arg0: _java.time.ZoneId_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## offsetTimeFrom

---

#### _time.offsetTimeFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## offsetTimeOf

---

#### _time.offsetTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _java.time.ZoneOffset_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

#### _time.offsetTimeOf(arg0: _java.time.LocalTime_, arg1: _java.time.ZoneOffset_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.LocalTime_ |   |
| arg1 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## offsetTimeOfInstant

---

#### _time.offsetTimeOfInstant(arg0: _java.time.Instant_, arg1: _java.time.ZoneId_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Instant_ |   |
| arg1 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## period

---

#### _time.period() : _java.time.Period_
##### Retorno

( _java.time.Period_ )


---

#### _time.period(arg0: string) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Period_ )


---

## periodFrom

---

#### _time.periodFrom(arg0: _java.time.temporal.TemporalAmount_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAmount_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOf

---

#### _time.periodOf(arg0: _int_, arg1: _int_, arg2: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfDays

---

#### _time.periodOfDays(arg0: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfMonths

---

#### _time.periodOfMonths(arg0: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfWeeks

---

#### _time.periodOfWeeks(arg0: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfYears

---

#### _time.periodOfYears(arg0: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## simpleDateFormat

---

#### _time.simpleDateFormat(arg0: string) : _java.text.SimpleDateFormat_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.text.SimpleDateFormat_ )


---

## unit

---

#### _time.unit(arg0: string) : _java.util.concurrent.TimeUnit_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.concurrent.TimeUnit_ )


---

## valueRangeOf

---

#### _time.valueRangeOf(arg0: _long_, arg1: _long_) : _java.time.temporal.ValueRange_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |

##### Retorno

( _java.time.temporal.ValueRange_ )


---

#### _time.valueRangeOf(arg0: _long_, arg1: _long_, arg2: _long_) : _java.time.temporal.ValueRange_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Retorno

( _java.time.temporal.ValueRange_ )


---

#### _time.valueRangeOf(arg0: _long_, arg1: _long_, arg2: _long_, arg3: _long_) : _java.time.temporal.ValueRange_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |
| arg3 | _long_ |   |

##### Retorno

( _java.time.temporal.ValueRange_ )


---

## year

---

#### _time.year() : _java.time.Year_
##### Retorno

( _java.time.Year_ )


---

#### _time.year(arg0: string) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Year_ )


---

#### _time.year(arg0: _java.time.Clock_) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |

##### Retorno

( _java.time.Year_ )


---

#### _time.year(arg0: _java.time.ZoneId_) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Year_ )


---

## yearFrom

---

#### _time.yearFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.Year_ )


---

## yearMonth

---

#### _time.yearMonth() : _java.time.YearMonth_
##### Retorno

( _java.time.YearMonth_ )


---

#### _time.yearMonth(arg0: _java.time.Clock_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

#### _time.yearMonth(arg0: _java.time.ZoneId_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

## yearMonthFrom

---

#### _time.yearMonthFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

## yearMonthOf

---

#### _time.yearMonthOf(arg0: _int_, arg1: _int_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

#### _time.yearMonthOf(arg0: _int_, arg1: _java.time.Month_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.time.Month_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

## yearOf

---

#### _time.yearOf(arg0: _int_) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.time.Year_ )


---

## zoneId

---

#### _time.zoneId() : _java.time.ZoneId_
##### Retorno

( _java.time.ZoneId_ )


---

## zoneIdFrom

---

#### _time.zoneIdFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneIdOf

---

#### _time.zoneIdOf(arg0: string) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.ZoneId_ )


---

#### _time.zoneIdOf(arg0: string, arg1: _java.util.Map_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Map_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneIdOfOffset

---

#### _time.zoneIdOfOffset(arg0: string, arg1: _java.time.ZoneOffset_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneOffset

---

#### _time.zoneOffset() : _java.time.ZoneOffset_
##### Retorno

( _java.time.ZoneOffset_ )


---

#### _time.zoneOffset(arg0: string) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetFrom

---

#### _time.zoneOffsetFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOf

---

#### _time.zoneOffsetOf(arg0: string) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

#### _time.zoneOffsetOf(arg0: string, arg1: _java.util.Map_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Map_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneOffsetOfHours

---

#### _time.zoneOffsetOfHours(arg0: _int_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfHoursMinutes

---

#### _time.zoneOffsetOfHoursMinutes(arg0: _int_, arg1: _int_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfHoursMinutesSeconds

---

#### _time.zoneOffsetOfHoursMinutesSeconds(arg0: _int_, arg1: _int_, arg2: _int_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfOffset

---

#### _time.zoneOffsetOfOffset(arg0: string, arg1: _java.time.ZoneOffset_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneOffsetOfTotalSeconds

---

#### _time.zoneOffsetOfTotalSeconds(arg0: _int_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zonedDateTime

---

#### _time.zonedDateTime() : _java.time.ZonedDateTime_
##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTime(arg0: string) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTime(arg0: _java.time.Clock_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Clock_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTime(arg0: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeFrom

---

#### _time.zonedDateTimeFrom(arg0: _java.time.temporal.TemporalAccessor_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOf

---

#### _time.zonedDateTimeOf(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_, arg4: _int_, arg5: _int_, arg6: _int_, arg7: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |
| arg4 | _int_ |   |
| arg5 | _int_ |   |
| arg6 | _int_ |   |
| arg7 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOf(arg0: _java.time.LocalDate_, arg1: _java.time.LocalTime_, arg2: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.LocalDate_ |   |
| arg1 | _java.time.LocalTime_ |   |
| arg2 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOf(arg0: _java.time.LocalDateTime_, arg1: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.LocalDateTime_ |   |
| arg1 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOfInstant

---

#### _time.zonedDateTimeOfInstant(arg0: _java.time.Instant_, arg1: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.Instant_ |   |
| arg1 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOfInstant(arg0: _java.time.LocalDateTime_, arg1: _java.time.ZoneOffset_, arg2: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.LocalDateTime_ |   |
| arg1 | _java.time.ZoneOffset_ |   |
| arg2 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOfLocal

---

#### _time.zonedDateTimeOfLocal(arg0: _java.time.LocalDateTime_, arg1: _java.time.ZoneId_, arg2: _java.time.ZoneOffset_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.LocalDateTime_ |   |
| arg1 | _java.time.ZoneId_ |   |
| arg2 | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOfLocal(arg0: _java.time.LocalDateTime_, arg1: _java.time.ZoneOffset_, arg2: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.time.LocalDateTime_ |   |
| arg1 | _java.time.ZoneOffset_ |   |
| arg2 | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeParse

---

#### _time.zonedDateTimeParse(arg0: _java.lang.CharSequence_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeParse(arg0: _java.lang.CharSequence_, arg1: _java.time.format.DateTimeFormatter_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.CharSequence_ |   |
| arg1 | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

