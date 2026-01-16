---
id: time
title: Time
sidebar_label: Time
---

Temporal data management based on **java.time**.

---

## castToChronoLocalDate

---

#### _time.castToChronoLocalDate(o: java.lang.Object) : java.time.chrono.ChronoLocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.time.chrono.ChronoLocalDate_ )


---

## castToTemporal

---

#### _time.castToTemporal(o: java.lang.Object) : java.time.temporal.Temporal
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.time.temporal.Temporal_ )


---

## castToTemporalAcessor

---

#### _time.castToTemporalAcessor(o: java.lang.Object) : java.time.temporal.TemporalAccessor
##### Description

Converte o objeeto passado para TemporalAcessor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.time.temporal.TemporalAccessor_ )


---

## chronoField

---

#### _time.chronoField(field: string) : java.time.temporal.ChronoField
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.time.temporal.ChronoField_ )


---

## chronoUnit

---

#### _time.chronoUnit(field: string) : java.time.temporal.ChronoUnit
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.time.temporal.ChronoUnit_ )


---

## clock

---

#### _time.clock() : java.time.Clock
##### Return

( _java.time.Clock_ )


---

## clockFixed

---

#### _time.clockFixed(fixedInstant: java.time.Instant, zone: java.time.ZoneId) : java.time.Clock
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fixedInstant** | _java.time.Instant_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.Clock_ )


---

## clockOffset

---

#### _time.clockOffset(baseClock: java.time.Clock, offsetDuration: java.time.Duration) : java.time.Clock
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **baseClock** | _java.time.Clock_ |   |
| **offsetDuration** | _java.time.Duration_ |   |

##### Return

( _java.time.Clock_ )


---

## clockSystem

---

#### _time.clockSystem(zone: java.time.ZoneId) : java.time.Clock
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.Clock_ )


---

## clockSystemUTC

---

#### _time.clockSystemUTC() : java.time.Clock
##### Return

( _java.time.Clock_ )


---

## clockTick

---

#### _time.clockTick(baseClock: java.time.Clock, tickDuration: java.time.Duration) : java.time.Clock
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **baseClock** | _java.time.Clock_ |   |
| **tickDuration** | _java.time.Duration_ |   |

##### Return

( _java.time.Clock_ )


---

## clockTickMinutes

---

#### _time.clockTickMinutes(zone: java.time.ZoneId) : java.time.Clock
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.Clock_ )


---

## clockTickSeconds

---

#### _time.clockTickSeconds(zone: java.time.ZoneId) : java.time.Clock
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.Clock_ )


---

## currentMilis

---

#### _time.currentMilis() : long
##### Return

( _long_ )


---

## date

---

#### _time.date() : java.util.Date
##### Return

( _java.util.Date_ )


---

## dateFrom

---

#### _time.dateFrom(instant: java.time.Instant) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ |   |

##### Return

( _java.util.Date_ )


---

## dateTimeFormatter

---

#### _time.dateTimeFormatter() : java.time.format.DateTimeFormatter
##### Return

( _java.time.format.DateTimeFormatter_ )


---

#### _time.dateTimeFormatter(pattern: string) : java.time.format.DateTimeFormatter
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pattern** | _string_ |   |

##### Return

( _java.time.format.DateTimeFormatter_ )


---

#### _time.dateTimeFormatter(type: string, locale: java.util.Locale) : java.time.format.DateTimeFormatter
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |
| **locale** | _java.util.Locale_ |   |

##### Return

( _java.time.format.DateTimeFormatter_ )


---

## dateTimeFormatterBuilder

---

#### _time.dateTimeFormatterBuilder() : java.time.format.DateTimeFormatterBuilder
##### Return

( _java.time.format.DateTimeFormatterBuilder_ )


---

## decimalStyle

---

#### _time.decimalStyle() : java.time.format.DecimalStyle
##### Return

( _java.time.format.DecimalStyle_ )


---

#### _time.decimalStyle(type: string) : java.time.format.DecimalStyle
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.format.DecimalStyle_ )


---

## duration

---

#### _time.duration() : java.time.Duration
##### Return

( _java.time.Duration_ )


---

#### _time.duration(type: string) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Duration_ )


---

## durationBetween

---

#### _time.durationBetween(startInclusive: java.time.temporal.Temporal, endExclusive: java.time.temporal.Temporal) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **startInclusive** | _java.time.temporal.Temporal_ |   |
| **endExclusive** | _java.time.temporal.Temporal_ |   |

##### Return

( _java.time.Duration_ )


---

## durationFrom

---

#### _time.durationFrom(temporalAmount: java.time.temporal.TemporalAmount) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAmount** | _java.time.temporal.TemporalAmount_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOf

---

#### _time.durationOf(amount: long, unit: java.time.temporal.TemporalUnit) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **amount** | _long_ |   |
| **unit** | _java.time.temporal.TemporalUnit_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfDays

---

#### _time.durationOfDays(days: long) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **days** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfHours

---

#### _time.durationOfHours(hours: long) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hours** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfMillis

---

#### _time.durationOfMillis(millis: long) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **millis** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfMinutes

---

#### _time.durationOfMinutes(minutes: long) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **minutes** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfNanos

---

#### _time.durationOfNanos(nanos: long) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nanos** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfSeconds

---

#### _time.durationOfSeconds(seconds: long) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **seconds** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

#### _time.durationOfSeconds(seconds: long, nanoAdjustment: long) : java.time.Duration
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **seconds** | _long_ |   |
| **nanoAdjustment** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## gregorianCalendar

---

#### _time.gregorianCalendar() : java.util.GregorianCalendar
##### Return

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(year: int, month: int, dayOfMonth: int) : java.util.GregorianCalendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |

##### Return

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(year: int, month: int, dayOfMonth: int, hourOfDay: int, minute: int) : java.util.GregorianCalendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hourOfDay** | _int_ |   |
| **minute** | _int_ |   |

##### Return

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(year: int, month: int, dayOfMonth: int, hourOfDay: int, minute: int, second: int) : java.util.GregorianCalendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hourOfDay** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |

##### Return

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(aLocale: java.util.Locale) : java.util.GregorianCalendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **aLocale** | _java.util.Locale_ |   |

##### Return

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(zone: java.util.TimeZone) : java.util.GregorianCalendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.util.TimeZone_ |   |

##### Return

( _java.util.GregorianCalendar_ )


---

#### _time.gregorianCalendar(zone: java.util.TimeZone, aLocale: java.util.Locale) : java.util.GregorianCalendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.util.TimeZone_ |   |
| **aLocale** | _java.util.Locale_ |   |

##### Return

( _java.util.GregorianCalendar_ )


---

## gregorianCalendarConstant

---

#### _time.gregorianCalendarConstant(name: string) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _int_ )


---

## instant

---

#### _time.instant() : java.time.Instant
##### Return

( _java.time.Instant_ )


---

#### _time.instant(type: string) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### _time.instant(clock: java.time.Clock) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.Instant_ )


---

## instantFrom

---

#### _time.instantFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.Instant_ )


---

## instantOfEpochMilli

---

#### _time.instantOfEpochMilli(epochMilli: long) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **epochMilli** | _long_ |   |

##### Return

( _java.time.Instant_ )


---

## instantOfEpochSecond

---

#### _time.instantOfEpochSecond(epochsecond: long) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **epochsecond** | _long_ |   |

##### Return

( _java.time.Instant_ )


---

#### _time.instantOfEpochSecond(epochsecond: long, nanoAdjustment: long) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **epochsecond** | _long_ |   |
| **nanoAdjustment** | _long_ |   |

##### Return

( _java.time.Instant_ )


---

## instantParse

---

#### _time.instantParse(text: java.lang.CharSequence) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.Instant_ )


---

## isoFields

---

#### _time.isoFields(field: string) : java.time.temporal.IsoFields
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.time.temporal.IsoFields_ )


---

## julianFields

---

#### _time.julianFields(field: string) : java.time.temporal.JulianFields
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.time.temporal.JulianFields_ )


---

## localDate

---

#### _time.localDate() : java.time.LocalDate
##### Return

( _java.time.LocalDate_ )


---

#### _time.localDate(type: string) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _time.localDate(clock: java.time.Clock) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _time.localDate(zone: java.time.ZoneId) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.LocalDate_ )


---

## localDateFrom

---

#### _time.localDateFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.LocalDate_ )


---

## localDateOf

---

#### _time.localDateOf(year: int, month: int, dayOfMonth: int) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _time.localDateOf(year: int, month: java.time.Month, dayOfMonth: int) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

## localDateOfEpochDay

---

#### _time.localDateOfEpochDay(epochDay: long) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **epochDay** | _long_ |   |

##### Return

( _java.time.LocalDate_ )


---

## localDateOfYearDay

---

#### _time.localDateOfYearDay(year: int, dayOfYear: int) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **dayOfYear** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

## localDateParse

---

#### _time.localDateParse(text: java.lang.CharSequence) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _time.localDateParse(text: java.lang.CharSequence, dateTimeFormatter: java.time.format.DateTimeFormatter) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |
| **dateTimeFormatter** | _java.time.format.DateTimeFormatter_ |   |

##### Return

( _java.time.LocalDate_ )


---

## localDateTime

---

#### _time.localDateTime() : java.time.LocalDateTime
##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTime(type: string) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTime(clock: java.time.Clock) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTime(zone: java.time.ZoneId) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## localDateTimeFrom

---

#### _time.localDateTimeFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## localDateTimeOf

---

#### _time.localDateTimeOf(year: int, month: int, dayOfMonth: int, hour: int, minute: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: int, month: int, dayOfMonth: int, hour: int, minute: int, second: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: int, month: int, dayOfMonth: int, hour: int, minute: int, second: int, nanoOfSecond: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: int, month: java.time.Month, dayOfMonth: int, hour: int, minute: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: int, month: java.time.Month, dayOfMonth: int, hour: int, minute: int, second: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(year: int, month: java.time.Month, dayOfMonth: int, hour: int, minute: int, second: int, nanoOfSecond: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeOf(date: java.time.LocalDate, time: java.time.LocalTime) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **date** | _java.time.LocalDate_ |   |
| **time** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## localDateTimeOfEpochSecond

---

#### _time.localDateTimeOfEpochSecond(epochSecond: long, nanoOfSecond: int, offset: java.time.ZoneOffset) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **epochSecond** | _long_ |   |
| **nanoOfSecond** | _int_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## localDateTimeOfInstant

---

#### _time.localDateTimeOfInstant(instant: java.time.Instant, zone: java.time.ZoneId) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## localDateTimeParse

---

#### _time.localDateTimeParse(text: java.lang.CharSequence) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _time.localDateTimeParse(text: java.lang.CharSequence, dateTimeFormatter: java.time.format.DateTimeFormatter) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |
| **dateTimeFormatter** | _java.time.format.DateTimeFormatter_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## localTime

---

#### _time.localTime() : java.time.LocalTime
##### Return

( _java.time.LocalTime_ )


---

#### _time.localTime(type: string) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _time.localTime(clock: java.time.Clock) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _time.localTime(zone: java.time.ZoneId) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.LocalTime_ )


---

## localTimeFrom

---

#### _time.localTimeFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.LocalTime_ )


---

## localTimeOf

---

#### _time.localTimeOf(hour: int, minute: int) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _time.localTimeOf(hour: int, minute: int, second: int) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _time.localTimeOf(hour: int, minute: int, second: int, nanoOfSecond: int) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

## localTimeOfNanoOfDay

---

#### _time.localTimeOfNanoOfDay(nanoOfDay: long) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nanoOfDay** | _long_ |   |

##### Return

( _java.time.LocalTime_ )


---

## localTimeOfSecondOfDay

---

#### _time.localTimeOfSecondOfDay(secondOfDay: long) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secondOfDay** | _long_ |   |

##### Return

( _java.time.LocalTime_ )


---

## localTimeParse

---

#### _time.localTimeParse(text: java.lang.CharSequence) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _time.localTimeParse(text: java.lang.CharSequence, dateTimeFormatter: java.time.format.DateTimeFormatter) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |
| **dateTimeFormatter** | _java.time.format.DateTimeFormatter_ |   |

##### Return

( _java.time.LocalTime_ )


---

## month

---

#### _time.month(type: string) : java.time.Month
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Month_ )


---

## monthDay

---

#### _time.monthDay() : java.time.MonthDay
##### Return

( _java.time.MonthDay_ )


---

#### _time.monthDay(clock: java.time.Clock) : java.time.MonthDay
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.MonthDay_ )


---

#### _time.monthDay(zone: java.time.ZoneId) : java.time.MonthDay
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.MonthDay_ )


---

## monthDayFrom

---

#### _time.monthDayFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.MonthDay
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.MonthDay_ )


---

## monthDayOf

---

#### _time.monthDayOf(month: int, dayOfMonth: int) : java.time.MonthDay
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |

##### Return

( _java.time.MonthDay_ )


---

#### _time.monthDayOf(month: java.time.Month, dayOfMonth: int) : java.time.MonthDay
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |

##### Return

( _java.time.MonthDay_ )


---

## monthOf

---

#### _time.monthOf(month: int) : java.time.Month
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **month** | _int_ |   |

##### Return

( _java.time.Month_ )


---

## monthValueOf

---

#### _time.monthValueOf(name: string) : java.time.Month
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _java.time.Month_ )


---

## offsetDateTime

---

#### _time.offsetDateTime() : java.time.OffsetDateTime
##### Return

( _java.time.OffsetDateTime_ )


---

#### _time.offsetDateTime(type: string) : java.time.OffsetDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeFrom

---

#### _time.offsetDateTimeFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.OffsetDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeOf

---

#### _time.offsetDateTimeOf(year: int, month: int, dayOfMonth: int, hour: int, minute: int, second: int, nanoOfSecond: int, offset: java.time.ZoneOffset) : java.time.OffsetDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.OffsetDateTime_ )


---

#### _time.offsetDateTimeOf(date: java.time.LocalDate, time: java.time.LocalTime, offset: java.time.ZoneOffset) : java.time.OffsetDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **date** | _java.time.LocalDate_ |   |
| **time** | _java.time.LocalTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.OffsetDateTime_ )


---

#### _time.offsetDateTimeOf(dateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset) : java.time.OffsetDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dateTime** | _java.time.LocalDateTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeOfInstant

---

#### _time.offsetDateTimeOfInstant(instant: java.time.Instant, offset: java.time.ZoneOffset) : java.time.OffsetDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.OffsetDateTime_ )


---

## offsetTime

---

#### _time.offsetTime() : java.time.OffsetTime
##### Return

( _java.time.OffsetTime_ )


---

#### _time.offsetTime(type: string) : java.time.OffsetTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.OffsetTime_ )


---

#### _time.offsetTime(clock: java.time.Clock) : java.time.OffsetTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.OffsetTime_ )


---

#### _time.offsetTime(zone: java.time.ZoneId) : java.time.OffsetTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.OffsetTime_ )


---

## offsetTimeFrom

---

#### _time.offsetTimeFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.OffsetTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.OffsetTime_ )


---

## offsetTimeOf

---

#### _time.offsetTimeOf(hour: int, minute: int, second: int, nanoOfSecond: int, offset: java.time.ZoneOffset) : java.time.OffsetTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.OffsetTime_ )


---

#### _time.offsetTimeOf(time: java.time.LocalTime, offset: java.time.ZoneOffset) : java.time.OffsetTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **time** | _java.time.LocalTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.OffsetTime_ )


---

## offsetTimeOfInstant

---

#### _time.offsetTimeOfInstant(instant: java.time.Instant, zone: java.time.ZoneId) : java.time.OffsetTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.OffsetTime_ )


---

## period

---

#### _time.period() : java.time.Period
##### Return

( _java.time.Period_ )


---

#### _time.period(type: string) : java.time.Period
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Period_ )


---

## periodFrom

---

#### _time.periodFrom(temporalAmount: java.time.temporal.TemporalAmount) : java.time.Period
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAmount** | _java.time.temporal.TemporalAmount_ |   |

##### Return

( _java.time.Period_ )


---

## periodOf

---

#### _time.periodOf(years: int, months: int, days: int) : java.time.Period
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **years** | _int_ |   |
| **months** | _int_ |   |
| **days** | _int_ |   |

##### Return

( _java.time.Period_ )


---

## periodOfDays

---

#### _time.periodOfDays(days: int) : java.time.Period
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **days** | _int_ |   |

##### Return

( _java.time.Period_ )


---

## periodOfMonths

---

#### _time.periodOfMonths(months: int) : java.time.Period
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **months** | _int_ |   |

##### Return

( _java.time.Period_ )


---

## periodOfWeeks

---

#### _time.periodOfWeeks(weeks: int) : java.time.Period
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **weeks** | _int_ |   |

##### Return

( _java.time.Period_ )


---

## periodOfYears

---

#### _time.periodOfYears(years: int) : java.time.Period
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **years** | _int_ |   |

##### Return

( _java.time.Period_ )


---

## simpleDateFormat

---

#### _time.simpleDateFormat(format: string) : java.text.SimpleDateFormat
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **format** | _string_ |   |

##### Return

( _java.text.SimpleDateFormat_ )


---

## unit

---

#### _time.unit(field: string) : java.util.concurrent.TimeUnit
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.util.concurrent.TimeUnit_ )


---

## valueRangeOf

---

#### _time.valueRangeOf(min: long, max: long) : java.time.temporal.ValueRange
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **min** | _long_ |   |
| **max** | _long_ |   |

##### Return

( _java.time.temporal.ValueRange_ )


---

#### _time.valueRangeOf(min: long, maxSmallest: long, maxLargest: long) : java.time.temporal.ValueRange
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **min** | _long_ |   |
| **maxSmallest** | _long_ |   |
| **maxLargest** | _long_ |   |

##### Return

( _java.time.temporal.ValueRange_ )


---

#### _time.valueRangeOf(minSmallest: long, minLargest: long, maxSmallest: long, maxLargest: long) : java.time.temporal.ValueRange
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **minSmallest** | _long_ |   |
| **minLargest** | _long_ |   |
| **maxSmallest** | _long_ |   |
| **maxLargest** | _long_ |   |

##### Return

( _java.time.temporal.ValueRange_ )


---

## year

---

#### _time.year() : java.time.Year
##### Return

( _java.time.Year_ )


---

#### _time.year(type: string) : java.time.Year
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Year_ )


---

#### _time.year(clock: java.time.Clock) : java.time.Year
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.Year_ )


---

#### _time.year(zone: java.time.ZoneId) : java.time.Year
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.Year_ )


---

## yearFrom

---

#### _time.yearFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.Year
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.Year_ )


---

## yearMonth

---

#### _time.yearMonth() : java.time.YearMonth
##### Return

( _java.time.YearMonth_ )


---

#### _time.yearMonth(clock: java.time.Clock) : java.time.YearMonth
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.YearMonth_ )


---

#### _time.yearMonth(zone: java.time.ZoneId) : java.time.YearMonth
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.YearMonth_ )


---

## yearMonthFrom

---

#### _time.yearMonthFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.YearMonth
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.YearMonth_ )


---

## yearMonthOf

---

#### _time.yearMonthOf(year: int, month: int) : java.time.YearMonth
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |

##### Return

( _java.time.YearMonth_ )


---

#### _time.yearMonthOf(year: int, month: java.time.Month) : java.time.YearMonth
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |

##### Return

( _java.time.YearMonth_ )


---

## yearOf

---

#### _time.yearOf(isoYear: int) : java.time.Year
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **isoYear** | _int_ |   |

##### Return

( _java.time.Year_ )


---

## zoneId

---

#### _time.zoneId() : java.time.ZoneId
##### Return

( _java.time.ZoneId_ )


---

## zoneIdFrom

---

#### _time.zoneIdFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.ZoneId
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.ZoneId_ )


---

## zoneIdOf

---

#### _time.zoneIdOf(zoneId: string) : java.time.ZoneId
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zoneId** | _string_ |   |

##### Return

( _java.time.ZoneId_ )


---

#### _time.zoneIdOf(zoneId: string, aliasMap: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : java.time.ZoneId
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zoneId** | _string_ |   |
| **aliasMap** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _java.time.ZoneId_ )


---

## zoneIdOfOffset

---

#### _time.zoneIdOfOffset(prefix: string, offset: java.time.ZoneOffset) : java.time.ZoneId
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **prefix** | _string_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.ZoneId_ )


---

## zoneOffset

---

#### _time.zoneOffset() : java.time.ZoneOffset
##### Return

( _java.time.ZoneOffset_ )


---

#### _time.zoneOffset(type: string) : java.time.ZoneOffset
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zoneOffsetFrom

---

#### _time.zoneOffsetFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.ZoneOffset
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zoneOffsetOf

---

#### _time.zoneOffsetOf(offsetId: string) : java.time.ZoneOffset
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **offsetId** | _string_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

#### _time.zoneOffsetOf(zoneId: string, aliasMap: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : java.time.ZoneId
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zoneId** | _string_ |   |
| **aliasMap** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _java.time.ZoneId_ )


---

## zoneOffsetOfHours

---

#### _time.zoneOffsetOfHours(hours: int) : java.time.ZoneOffset
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hours** | _int_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfHoursMinutes

---

#### _time.zoneOffsetOfHoursMinutes(hours: int, minutes: int) : java.time.ZoneOffset
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hours** | _int_ |   |
| **minutes** | _int_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfHoursMinutesSeconds

---

#### _time.zoneOffsetOfHoursMinutesSeconds(hours: int, minutes: int, seconds: int) : java.time.ZoneOffset
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hours** | _int_ |   |
| **minutes** | _int_ |   |
| **seconds** | _int_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfOffset

---

#### _time.zoneOffsetOfOffset(prefix: string, offset: java.time.ZoneOffset) : java.time.ZoneId
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **prefix** | _string_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.ZoneId_ )


---

## zoneOffsetOfTotalSeconds

---

#### _time.zoneOffsetOfTotalSeconds(totalSeconds: int) : java.time.ZoneOffset
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **totalSeconds** | _int_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zonedDateTime

---

#### _time.zonedDateTime() : java.time.ZonedDateTime
##### Return

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTime(type: string) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTime(clock: java.time.Clock) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTime(zone: java.time.ZoneId) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeFrom

---

#### _time.zonedDateTimeFrom(temporalAccessor: java.time.temporal.TemporalAccessor) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOf

---

#### _time.zonedDateTimeOf(year: int, month: int, dayOfMonth: int, hour: int, minute: int, second: int, nanoOfSecond: int, zone: java.time.ZoneId) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOf(date: java.time.LocalDate, time: java.time.LocalTime, zone: java.time.ZoneId) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **date** | _java.time.LocalDate_ |   |
| **time** | _java.time.LocalTime_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOf(localDateTime: java.time.LocalDateTime, zone: java.time.ZoneId) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOfInstant

---

#### _time.zonedDateTimeOfInstant(instant: java.time.Instant, zone: java.time.ZoneId) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOfInstant(localDateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset, zone: java.time.ZoneId) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOfLocal

---

#### _time.zonedDateTimeOfLocal(localDateTime: java.time.LocalDateTime, zone: java.time.ZoneId, preferredOffset: java.time.ZoneOffset) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ |   |
| **zone** | _java.time.ZoneId_ |   |
| **preferredOffset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeOfLocal(localDateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset, zone: java.time.ZoneId) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeParse

---

#### _time.zonedDateTimeParse(text: java.lang.CharSequence) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### _time.zonedDateTimeParse(text: java.lang.CharSequence, dateTimeFormatter: java.time.format.DateTimeFormatter) : java.time.ZonedDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |
| **dateTimeFormatter** | _java.time.format.DateTimeFormatter_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

