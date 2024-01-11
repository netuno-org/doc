---
id: time
title: Time
sidebar_label: Time
---

Gestão de dados temporal baseada no **java.time**.

---

## castToChronoLocalDate

---

#### _time.castToChronoLocalDate(o: _java.lang.Object_) : _java.time.chrono.ChronoLocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.time.chrono.ChronoLocalDate_ )


---

## castToTemporal

---

#### _time.castToTemporal(o: _java.lang.Object_) : _java.time.temporal.Temporal_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.time.temporal.Temporal_ )


---

## castToTemporalAcessor

---

#### _time.castToTemporalAcessor(o: _java.lang.Object_) : _java.time.temporal.TemporalAccessor_
##### Descrição

Converte o objeeto passado para TemporalAcessor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.time.temporal.TemporalAccessor_ )


---

## chronoField

---

#### _time.chronoField(field: string) : _java.time.temporal.ChronoField_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| field | string |   |

##### Retorno

( _java.time.temporal.ChronoField_ )


---

## chronoUnit

---

#### _time.chronoUnit(field: string) : _java.time.temporal.ChronoUnit_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| field | string |   |

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

#### _time.clockFixed(fixedInstant: _java.time.Instant_, zone: _java.time.ZoneId_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| fixedInstant | _java.time.Instant_ |   |
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockOffset

---

#### _time.clockOffset(baseClock: _java.time.Clock_, offsetDuration: _java.time.Duration_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| baseClock | _java.time.Clock_ |   |
| offsetDuration | _java.time.Duration_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockSystem

---

#### _time.clockSystem(zone: _java.time.ZoneId_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

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

#### _time.clockTick(baseClock: _java.time.Clock_, tickDuration: _java.time.Duration_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| baseClock | _java.time.Clock_ |   |
| tickDuration | _java.time.Duration_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockTickMinutes

---

#### _time.clockTickMinutes(zone: _java.time.ZoneId_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockTickSeconds

---

#### _time.clockTickSeconds(zone: _java.time.ZoneId_) : _java.time.Clock_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

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

#### _time.dateFrom(instant: _java.time.Instant_) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| instant | _java.time.Instant_ |   |

##### Retorno

( _java.util.Date_ )


---

## dateTimeFormatter

---

#### _time.dateTimeFormatter() : _java.time.format.DateTimeFormatter_
##### Retorno

( _java.time.format.DateTimeFormatter_ )


---

#### _time.dateTimeFormatter(pattern: string) : _java.time.format.DateTimeFormatter_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| pattern | string |   |

##### Retorno

( _java.time.format.DateTimeFormatter_ )


---

#### _time.dateTimeFormatter(type: string, locale: _java.util.Locale_) : _java.time.format.DateTimeFormatter_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |
| locale | _java.util.Locale_ |   |

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

#### _time.decimalStyle(type: string) : _java.time.format.DecimalStyle_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.format.DecimalStyle_ )


---

## duration

---

#### _time.duration() : _java.time.Duration_
##### Retorno

( _java.time.Duration_ )


---

#### _time.duration(type: string) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.Duration_ )


---

## durationBetween

---

#### _time.durationBetween(startInclusive: _java.time.temporal.Temporal_, endExclusive: _java.time.temporal.Temporal_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| startInclusive | _java.time.temporal.Temporal_ |   |
| endExclusive | _java.time.temporal.Temporal_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationFrom

---

#### _time.durationFrom(temporalAmount: _java.time.temporal.TemporalAmount_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAmount | _java.time.temporal.TemporalAmount_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOf

---

#### _time.durationOf(amount: _long_, unit: _java.time.temporal.TemporalUnit_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| amount | _long_ |   |
| unit | _java.time.temporal.TemporalUnit_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfDays

---

#### _time.durationOfDays(days: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| days | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfHours

---

#### _time.durationOfHours(hours: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| hours | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfMillis

---

#### _time.durationOfMillis(millis: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| millis | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfMinutes

---

#### _time.durationOfMinutes(minutes: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| minutes | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfNanos

---

#### _time.durationOfNanos(nanos: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nanos | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfSeconds

---

#### _time.durationOfSeconds(seconds: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| seconds | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

#### _time.durationOfSeconds(seconds: _long_, nanoAdjustment: _long_) : _java.time.Duration_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| seconds | _long_ |   |
| nanoAdjustment | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## gregorianCalendar

---

#### _time.gregorianCalendar() : _java.util.GregorianCalendar_
##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(year: _int_, month: _int_, dayOfMonth: _int_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |
| dayOfMonth | _int_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(year: _int_, month: _int_, dayOfMonth: _int_, hourOfDay: _int_, minute: _int_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |
| dayOfMonth | _int_ |   |
| hourOfDay | _int_ |   |
| minute | _int_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(year: _int_, month: _int_, dayOfMonth: _int_, hourOfDay: _int_, minute: _int_, second: _int_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |
| dayOfMonth | _int_ |   |
| hourOfDay | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(aLocale: _java.util.Locale_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| aLocale | _java.util.Locale_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(zone: _java.util.TimeZone_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.util.TimeZone_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(zone: _java.util.TimeZone_, aLocale: _java.util.Locale_) : _java.util.GregorianCalendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.util.TimeZone_ |   |
| aLocale | _java.util.Locale_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

## gregorianCalendarConstant

---

#### _time.gregorianCalendarConstant(name: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |

##### Retorno

( _int_ )


---

## instant

---

#### _time.instant() : _java.time.Instant_
##### Retorno

( _java.time.Instant_ )


---

#### _time.instant(type: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _time.instant(clock: _java.time.Clock_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| clock | _java.time.Clock_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantFrom

---

#### _time.instantFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantOfEpochMilli

---

#### _time.instantOfEpochMilli(epochMilli: _long_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| epochMilli | _long_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantOfEpochSecond

---

#### _time.instantOfEpochSecond(epochsecond: _long_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| epochsecond | _long_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _time.instantOfEpochSecond(epochsecond: _long_, nanoAdjustment: _long_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| epochsecond | _long_ |   |
| nanoAdjustment | _long_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantParse

---

#### _time.instantParse(text: _java.lang.CharSequence_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.Instant_ )


---

## isoFields

---

#### _time.isoFields(field: string) : _java.time.temporal.IsoFields_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| field | string |   |

##### Retorno

( _java.time.temporal.IsoFields_ )


---

## julianFields

---

#### _time.julianFields(field: string) : _java.time.temporal.JulianFields_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| field | string |   |

##### Retorno

( _java.time.temporal.JulianFields_ )


---

## localDate

---

#### _time.localDate() : _java.time.LocalDate_
##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDate(type: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDate(clock: _java.time.Clock_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| clock | _java.time.Clock_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDate(zone: _java.time.ZoneId_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateFrom

---

#### _time.localDateFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateOf

---

#### _time.localDateOf(year: _int_, month: _int_, dayOfMonth: _int_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |
| dayOfMonth | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDateOf(year: _int_, month: _java.time.Month_, dayOfMonth: _int_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _java.time.Month_ |   |
| dayOfMonth | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateOfEpochDay

---

#### _time.localDateOfEpochDay(epochDay: _long_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| epochDay | _long_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateOfYearDay

---

#### _time.localDateOfYearDay(year: _int_, dayOfYear: _int_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| dayOfYear | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateParse

---

#### _time.localDateParse(text: _java.lang.CharSequence_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _time.localDateParse(text: _java.lang.CharSequence_, dateTimeFormatter: _java.time.format.DateTimeFormatter_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.lang.CharSequence_ |   |
| dateTimeFormatter | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateTime

---

#### _time.localDateTime() : _java.time.LocalDateTime_
##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTime(type: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTime(clock: _java.time.Clock_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| clock | _java.time.Clock_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTime(zone: _java.time.ZoneId_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeFrom

---

#### _time.localDateTimeFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeOf

---

#### _time.localDateTimeOf(year: _int_, month: _int_, dayOfMonth: _int_, hour: _int_, minute: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |
| dayOfMonth | _int_ |   |
| hour | _int_ |   |
| minute | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: _int_, month: _int_, dayOfMonth: _int_, hour: _int_, minute: _int_, second: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |
| dayOfMonth | _int_ |   |
| hour | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: _int_, month: _int_, dayOfMonth: _int_, hour: _int_, minute: _int_, second: _int_, nanoOfSecond: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |
| dayOfMonth | _int_ |   |
| hour | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |
| nanoOfSecond | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: _int_, month: _java.time.Month_, dayOfMonth: _int_, hour: _int_, minute: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _java.time.Month_ |   |
| dayOfMonth | _int_ |   |
| hour | _int_ |   |
| minute | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: _int_, month: _java.time.Month_, dayOfMonth: _int_, hour: _int_, minute: _int_, second: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _java.time.Month_ |   |
| dayOfMonth | _int_ |   |
| hour | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: _int_, month: _java.time.Month_, dayOfMonth: _int_, hour: _int_, minute: _int_, second: _int_, nanoOfSecond: _int_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _java.time.Month_ |   |
| dayOfMonth | _int_ |   |
| hour | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |
| nanoOfSecond | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(date: _java.time.LocalDate_, time: _java.time.LocalTime_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| date | _java.time.LocalDate_ |   |
| time | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeOfEpochSecond

---

#### _time.localDateTimeOfEpochSecond(epochSecond: _long_, nanoOfSecond: _int_, offset: _java.time.ZoneOffset_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| epochSecond | _long_ |   |
| nanoOfSecond | _int_ |   |
| offset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeOfInstant

---

#### _time.localDateTimeOfInstant(instant: _java.time.Instant_, zone: _java.time.ZoneId_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| instant | _java.time.Instant_ |   |
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeParse

---

#### _time.localDateTimeParse(text: _java.lang.CharSequence_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeParse(text: _java.lang.CharSequence_, dateTimeFormatter: _java.time.format.DateTimeFormatter_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.lang.CharSequence_ |   |
| dateTimeFormatter | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localTime

---

#### _time.localTime() : _java.time.LocalTime_
##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTime(type: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTime(clock: _java.time.Clock_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| clock | _java.time.Clock_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTime(zone: _java.time.ZoneId_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeFrom

---

#### _time.localTimeFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeOf

---

#### _time.localTimeOf(hour: _int_, minute: _int_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| hour | _int_ |   |
| minute | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTimeOf(hour: _int_, minute: _int_, second: _int_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| hour | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTimeOf(hour: _int_, minute: _int_, second: _int_, nanoOfSecond: _int_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| hour | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |
| nanoOfSecond | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeOfNanoOfDay

---

#### _time.localTimeOfNanoOfDay(nanoOfDay: _long_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nanoOfDay | _long_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeOfSecondOfDay

---

#### _time.localTimeOfSecondOfDay(secondOfDay: _long_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| secondOfDay | _long_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeParse

---

#### _time.localTimeParse(text: _java.lang.CharSequence_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _time.localTimeParse(text: _java.lang.CharSequence_, dateTimeFormatter: _java.time.format.DateTimeFormatter_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.lang.CharSequence_ |   |
| dateTimeFormatter | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## month

---

#### _time.month(type: string) : _java.time.Month_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.Month_ )


---

## monthDay

---

#### _time.monthDay() : _java.time.MonthDay_
##### Retorno

( _java.time.MonthDay_ )


---

#### _time.monthDay(clock: _java.time.Clock_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| clock | _java.time.Clock_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

#### _time.monthDay(zone: _java.time.ZoneId_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

## monthDayFrom

---

#### _time.monthDayFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

## monthDayOf

---

#### _time.monthDayOf(month: _int_, dayOfMonth: _int_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| month | _int_ |   |
| dayOfMonth | _int_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

#### _time.monthDayOf(month: _java.time.Month_, dayOfMonth: _int_) : _java.time.MonthDay_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| month | _java.time.Month_ |   |
| dayOfMonth | _int_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

## monthOf

---

#### _time.monthOf(month: _int_) : _java.time.Month_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| month | _int_ |   |

##### Retorno

( _java.time.Month_ )


---

## monthValueOf

---

#### _time.monthValueOf(name: string) : _java.time.Month_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |

##### Retorno

( _java.time.Month_ )


---

## offsetDateTime

---

#### _time.offsetDateTime() : _java.time.OffsetDateTime_
##### Retorno

( _java.time.OffsetDateTime_ )


---

#### _time.offsetDateTime(type: string) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeFrom

---

#### _time.offsetDateTimeFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeOf

---

#### _time.offsetDateTimeOf(year: _int_, month: _int_, dayOfMonth: _int_, hour: _int_, minute: _int_, second: _int_, nanoOfSecond: _int_, offset: _java.time.ZoneOffset_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |
| dayOfMonth | _int_ |   |
| hour | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |
| nanoOfSecond | _int_ |   |
| offset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

#### _time.offsetDateTimeOf(date: _java.time.LocalDate_, time: _java.time.LocalTime_, offset: _java.time.ZoneOffset_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| date | _java.time.LocalDate_ |   |
| time | _java.time.LocalTime_ |   |
| offset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

#### _time.offsetDateTimeOf(dateTime: _java.time.LocalDateTime_, offset: _java.time.ZoneOffset_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dateTime | _java.time.LocalDateTime_ |   |
| offset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeOfInstant

---

#### _time.offsetDateTimeOfInstant(instant: _java.time.Instant_, offset: _java.time.ZoneOffset_) : _java.time.OffsetDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| instant | _java.time.Instant_ |   |
| offset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetTime

---

#### _time.offsetTime() : _java.time.OffsetTime_
##### Retorno

( _java.time.OffsetTime_ )


---

#### _time.offsetTime(type: string) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.OffsetTime_ )


---

#### _time.offsetTime(clock: _java.time.Clock_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| clock | _java.time.Clock_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

#### _time.offsetTime(zone: _java.time.ZoneId_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## offsetTimeFrom

---

#### _time.offsetTimeFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## offsetTimeOf

---

#### _time.offsetTimeOf(hour: _int_, minute: _int_, second: _int_, nanoOfSecond: _int_, offset: _java.time.ZoneOffset_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| hour | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |
| nanoOfSecond | _int_ |   |
| offset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

#### _time.offsetTimeOf(time: _java.time.LocalTime_, offset: _java.time.ZoneOffset_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| time | _java.time.LocalTime_ |   |
| offset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## offsetTimeOfInstant

---

#### _time.offsetTimeOfInstant(instant: _java.time.Instant_, zone: _java.time.ZoneId_) : _java.time.OffsetTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| instant | _java.time.Instant_ |   |
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## period

---

#### _time.period() : _java.time.Period_
##### Retorno

( _java.time.Period_ )


---

#### _time.period(type: string) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.Period_ )


---

## periodFrom

---

#### _time.periodFrom(temporalAmount: _java.time.temporal.TemporalAmount_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAmount | _java.time.temporal.TemporalAmount_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOf

---

#### _time.periodOf(years: _int_, months: _int_, days: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| years | _int_ |   |
| months | _int_ |   |
| days | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfDays

---

#### _time.periodOfDays(days: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| days | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfMonths

---

#### _time.periodOfMonths(months: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| months | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfWeeks

---

#### _time.periodOfWeeks(weeks: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| weeks | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfYears

---

#### _time.periodOfYears(years: _int_) : _java.time.Period_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| years | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## simpleDateFormat

---

#### _time.simpleDateFormat(format: string) : _java.text.SimpleDateFormat_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| format | string |   |

##### Retorno

( _java.text.SimpleDateFormat_ )


---

## unit

---

#### _time.unit(field: string) : _java.util.concurrent.TimeUnit_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| field | string |   |

##### Retorno

( _java.util.concurrent.TimeUnit_ )


---

## valueRangeOf

---

#### _time.valueRangeOf(min: _long_, max: _long_) : _java.time.temporal.ValueRange_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| min | _long_ |   |
| max | _long_ |   |

##### Retorno

( _java.time.temporal.ValueRange_ )


---

#### _time.valueRangeOf(min: _long_, maxSmallest: _long_, maxLargest: _long_) : _java.time.temporal.ValueRange_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| min | _long_ |   |
| maxSmallest | _long_ |   |
| maxLargest | _long_ |   |

##### Retorno

( _java.time.temporal.ValueRange_ )


---

#### _time.valueRangeOf(minSmallest: _long_, minLargest: _long_, maxSmallest: _long_, maxLargest: _long_) : _java.time.temporal.ValueRange_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| minSmallest | _long_ |   |
| minLargest | _long_ |   |
| maxSmallest | _long_ |   |
| maxLargest | _long_ |   |

##### Retorno

( _java.time.temporal.ValueRange_ )


---

## year

---

#### _time.year() : _java.time.Year_
##### Retorno

( _java.time.Year_ )


---

#### _time.year(type: string) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.Year_ )


---

#### _time.year(clock: _java.time.Clock_) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| clock | _java.time.Clock_ |   |

##### Retorno

( _java.time.Year_ )


---

#### _time.year(zone: _java.time.ZoneId_) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Year_ )


---

## yearFrom

---

#### _time.yearFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.Year_ )


---

## yearMonth

---

#### _time.yearMonth() : _java.time.YearMonth_
##### Retorno

( _java.time.YearMonth_ )


---

#### _time.yearMonth(clock: _java.time.Clock_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| clock | _java.time.Clock_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

#### _time.yearMonth(zone: _java.time.ZoneId_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

## yearMonthFrom

---

#### _time.yearMonthFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

## yearMonthOf

---

#### _time.yearMonthOf(year: _int_, month: _int_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

#### _time.yearMonthOf(year: _int_, month: _java.time.Month_) : _java.time.YearMonth_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _java.time.Month_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

## yearOf

---

#### _time.yearOf(isoYear: _int_) : _java.time.Year_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| isoYear | _int_ |   |

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

#### _time.zoneIdFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneIdOf

---

#### _time.zoneIdOf(zoneId: string) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zoneId | string |   |

##### Retorno

( _java.time.ZoneId_ )


---

#### _time.zoneIdOf(zoneId: string, aliasMap: _java.util.Map_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zoneId | string |   |
| aliasMap | _java.util.Map_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneIdOfOffset

---

#### _time.zoneIdOfOffset(prefix: string, offset: _java.time.ZoneOffset_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| prefix | string |   |
| offset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneOffset

---

#### _time.zoneOffset() : _java.time.ZoneOffset_
##### Retorno

( _java.time.ZoneOffset_ )


---

#### _time.zoneOffset(type: string) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetFrom

---

#### _time.zoneOffsetFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOf

---

#### _time.zoneOffsetOf(offsetId: string) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| offsetId | string |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

#### _time.zoneOffsetOf(zoneId: string, aliasMap: _java.util.Map_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zoneId | string |   |
| aliasMap | _java.util.Map_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneOffsetOfHours

---

#### _time.zoneOffsetOfHours(hours: _int_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| hours | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfHoursMinutes

---

#### _time.zoneOffsetOfHoursMinutes(hours: _int_, minutes: _int_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| hours | _int_ |   |
| minutes | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfHoursMinutesSeconds

---

#### _time.zoneOffsetOfHoursMinutesSeconds(hours: _int_, minutes: _int_, seconds: _int_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| hours | _int_ |   |
| minutes | _int_ |   |
| seconds | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfOffset

---

#### _time.zoneOffsetOfOffset(prefix: string, offset: _java.time.ZoneOffset_) : _java.time.ZoneId_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| prefix | string |   |
| offset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneOffsetOfTotalSeconds

---

#### _time.zoneOffsetOfTotalSeconds(totalSeconds: _int_) : _java.time.ZoneOffset_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| totalSeconds | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zonedDateTime

---

#### _time.zonedDateTime() : _java.time.ZonedDateTime_
##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTime(type: string) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTime(clock: _java.time.Clock_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| clock | _java.time.Clock_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTime(zone: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeFrom

---

#### _time.zonedDateTimeFrom(temporalAccessor: _java.time.temporal.TemporalAccessor_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| temporalAccessor | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOf

---

#### _time.zonedDateTimeOf(year: _int_, month: _int_, dayOfMonth: _int_, hour: _int_, minute: _int_, second: _int_, nanoOfSecond: _int_, zone: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| year | _int_ |   |
| month | _int_ |   |
| dayOfMonth | _int_ |   |
| hour | _int_ |   |
| minute | _int_ |   |
| second | _int_ |   |
| nanoOfSecond | _int_ |   |
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOf(date: _java.time.LocalDate_, time: _java.time.LocalTime_, zone: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| date | _java.time.LocalDate_ |   |
| time | _java.time.LocalTime_ |   |
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOf(localDateTime: _java.time.LocalDateTime_, zone: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| localDateTime | _java.time.LocalDateTime_ |   |
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOfInstant

---

#### _time.zonedDateTimeOfInstant(instant: _java.time.Instant_, zone: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| instant | _java.time.Instant_ |   |
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOfInstant(localDateTime: _java.time.LocalDateTime_, offset: _java.time.ZoneOffset_, zone: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| localDateTime | _java.time.LocalDateTime_ |   |
| offset | _java.time.ZoneOffset_ |   |
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOfLocal

---

#### _time.zonedDateTimeOfLocal(localDateTime: _java.time.LocalDateTime_, zone: _java.time.ZoneId_, preferredOffset: _java.time.ZoneOffset_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| localDateTime | _java.time.LocalDateTime_ |   |
| zone | _java.time.ZoneId_ |   |
| preferredOffset | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOfLocal(localDateTime: _java.time.LocalDateTime_, offset: _java.time.ZoneOffset_, zone: _java.time.ZoneId_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| localDateTime | _java.time.LocalDateTime_ |   |
| offset | _java.time.ZoneOffset_ |   |
| zone | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeParse

---

#### _time.zonedDateTimeParse(text: _java.lang.CharSequence_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeParse(text: _java.lang.CharSequence_, dateTimeFormatter: _java.time.format.DateTimeFormatter_) : _java.time.ZonedDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.lang.CharSequence_ |   |
| dateTimeFormatter | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

