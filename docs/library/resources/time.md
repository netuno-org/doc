---
id: time
title: Time
sidebar_label: Time
---

Gestão de dados temporal baseada no **java.time**.

---

## castToChronoLocalDate

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>castToChronoLocalDate</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.chrono.ChronoLocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.time.chrono.ChronoLocalDate_ )


---

## castToTemporal

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>castToTemporal</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.Temporal</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.time.temporal.Temporal_ )


---

## castToTemporalAcessor

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>castToTemporalAcessor</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>chronoField</span>(<span style={{color: '#FF8000'}}>field</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.ChronoField</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.time.temporal.ChronoField_ )


---

## chronoUnit

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>chronoUnit</span>(<span style={{color: '#FF8000'}}>field</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.ChronoUnit</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.time.temporal.ChronoUnit_ )


---

## clock

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>clock</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>
##### Return

( _java.time.Clock_ )


---

## clockFixed

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>clockFixed</span>(<span style={{color: '#FF8000'}}>fixedInstant</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>clockOffset</span>(<span style={{color: '#FF8000'}}>baseClock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>, <span style={{color: '#FF8000'}}>offsetDuration</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>clockSystem</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.Clock_ )


---

## clockSystemUTC

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>clockSystemUTC</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>
##### Return

( _java.time.Clock_ )


---

## clockTick

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>clockTick</span>(<span style={{color: '#FF8000'}}>baseClock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>, <span style={{color: '#FF8000'}}>tickDuration</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>clockTickMinutes</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.Clock_ )


---

## clockTickSeconds

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>clockTickSeconds</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.Clock_ )


---

## currentMilis

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>currentMilis</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Return

( _long_ )


---

## date

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>date</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
##### Return

( _java.util.Date_ )


---

## dateFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>dateFrom</span>(<span style={{color: '#FF8000'}}>instant</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ |   |

##### Return

( _java.util.Date_ )


---

## dateTimeFormatter

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>dateTimeFormatter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DateTimeFormatter</span>
##### Return

( _java.time.format.DateTimeFormatter_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>dateTimeFormatter</span>(<span style={{color: '#FF8000'}}>pattern</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DateTimeFormatter</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pattern** | _string_ |   |

##### Return

( _java.time.format.DateTimeFormatter_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>dateTimeFormatter</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>locale</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Locale</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DateTimeFormatter</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>dateTimeFormatterBuilder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DateTimeFormatterBuilder</span>
##### Return

( _java.time.format.DateTimeFormatterBuilder_ )


---

## decimalStyle

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>decimalStyle</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DecimalStyle</span>
##### Return

( _java.time.format.DecimalStyle_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>decimalStyle</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DecimalStyle</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.format.DecimalStyle_ )


---

## duration

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>duration</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
##### Return

( _java.time.Duration_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>duration</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Duration_ )


---

## durationBetween

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationBetween</span>(<span style={{color: '#FF8000'}}>startInclusive</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.Temporal</span>, <span style={{color: '#FF8000'}}>endExclusive</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.Temporal</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationFrom</span>(<span style={{color: '#FF8000'}}>temporalAmount</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAmount</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAmount** | _java.time.temporal.TemporalAmount_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationOf</span>(<span style={{color: '#FF8000'}}>amount</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>unit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalUnit</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationOfDays</span>(<span style={{color: '#FF8000'}}>days</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **days** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfHours

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationOfHours</span>(<span style={{color: '#FF8000'}}>hours</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hours** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfMillis

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationOfMillis</span>(<span style={{color: '#FF8000'}}>millis</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **millis** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfMinutes

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationOfMinutes</span>(<span style={{color: '#FF8000'}}>minutes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **minutes** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfNanos

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationOfNanos</span>(<span style={{color: '#FF8000'}}>nanos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nanos** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

## durationOfSeconds

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationOfSeconds</span>(<span style={{color: '#FF8000'}}>seconds</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **seconds** | _long_ |   |

##### Return

( _java.time.Duration_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>durationOfSeconds</span>(<span style={{color: '#FF8000'}}>seconds</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>nanoAdjustment</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Duration</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>gregorianCalendar</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.GregorianCalendar</span>
##### Return

( _java.util.GregorianCalendar_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>gregorianCalendar</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.GregorianCalendar</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |

##### Return

( _java.util.GregorianCalendar_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>gregorianCalendar</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hourOfDay</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.GregorianCalendar</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>gregorianCalendar</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hourOfDay</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.GregorianCalendar</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>gregorianCalendar</span>(<span style={{color: '#FF8000'}}>aLocale</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Locale</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.GregorianCalendar</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **aLocale** | _java.util.Locale_ |   |

##### Return

( _java.util.GregorianCalendar_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>gregorianCalendar</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.TimeZone</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.GregorianCalendar</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.util.TimeZone_ |   |

##### Return

( _java.util.GregorianCalendar_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>gregorianCalendar</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.TimeZone</span>, <span style={{color: '#FF8000'}}>aLocale</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Locale</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.GregorianCalendar</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>gregorianCalendarConstant</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _int_ )


---

## instant

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>instant</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Return

( _java.time.Instant_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>instant</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>instant</span>(<span style={{color: '#FF8000'}}>clock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.Instant_ )


---

## instantFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>instantFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.Instant_ )


---

## instantOfEpochMilli

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>instantOfEpochMilli</span>(<span style={{color: '#FF8000'}}>epochMilli</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **epochMilli** | _long_ |   |

##### Return

( _java.time.Instant_ )


---

## instantOfEpochSecond

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>instantOfEpochSecond</span>(<span style={{color: '#FF8000'}}>epochsecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **epochsecond** | _long_ |   |

##### Return

( _java.time.Instant_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>instantOfEpochSecond</span>(<span style={{color: '#FF8000'}}>epochsecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>nanoAdjustment</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>instantParse</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.CharSequence</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.Instant_ )


---

## isoFields

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>isoFields</span>(<span style={{color: '#FF8000'}}>field</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.IsoFields</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.time.temporal.IsoFields_ )


---

## julianFields

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>julianFields</span>(<span style={{color: '#FF8000'}}>field</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.JulianFields</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.time.temporal.JulianFields_ )


---

## localDate

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Return

( _java.time.LocalDate_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDate</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDate</span>(<span style={{color: '#FF8000'}}>clock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDate</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.LocalDate_ )


---

## localDateFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.LocalDate_ )


---

## localDateOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Month</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateOfEpochDay</span>(<span style={{color: '#FF8000'}}>epochDay</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **epochDay** | _long_ |   |

##### Return

( _java.time.LocalDate_ )


---

## localDateOfYearDay

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateOfYearDay</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfYear</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateParse</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.CharSequence</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateParse</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.CharSequence</span>, <span style={{color: '#FF8000'}}>dateTimeFormatter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DateTimeFormatter</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTime</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Return

( _java.time.LocalDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTime</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTime</span>(<span style={{color: '#FF8000'}}>clock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTime</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## localDateTimeFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## localDateTimeOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>nanoOfSecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Month</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Month</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Month</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>nanoOfSecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeOf</span>(<span style={{color: '#FF8000'}}>date</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>, <span style={{color: '#FF8000'}}>time</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeOfEpochSecond</span>(<span style={{color: '#FF8000'}}>epochSecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>nanoOfSecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeOfInstant</span>(<span style={{color: '#FF8000'}}>instant</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeParse</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.CharSequence</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localDateTimeParse</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.CharSequence</span>, <span style={{color: '#FF8000'}}>dateTimeFormatter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DateTimeFormatter</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTime</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Return

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTime</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTime</span>(<span style={{color: '#FF8000'}}>clock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTime</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.LocalTime_ )


---

## localTimeFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTimeFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.LocalTime_ )


---

## localTimeOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTimeOf</span>(<span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTimeOf</span>(<span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTimeOf</span>(<span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>nanoOfSecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTimeOfNanoOfDay</span>(<span style={{color: '#FF8000'}}>nanoOfDay</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nanoOfDay** | _long_ |   |

##### Return

( _java.time.LocalTime_ )


---

## localTimeOfSecondOfDay

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTimeOfSecondOfDay</span>(<span style={{color: '#FF8000'}}>secondOfDay</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secondOfDay** | _long_ |   |

##### Return

( _java.time.LocalTime_ )


---

## localTimeParse

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTimeParse</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.CharSequence</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>localTimeParse</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.CharSequence</span>, <span style={{color: '#FF8000'}}>dateTimeFormatter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DateTimeFormatter</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>month</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Month</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Month_ )


---

## monthDay

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>monthDay</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.MonthDay</span>
##### Return

( _java.time.MonthDay_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>monthDay</span>(<span style={{color: '#FF8000'}}>clock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.MonthDay</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.MonthDay_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>monthDay</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.MonthDay</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.MonthDay_ )


---

## monthDayFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>monthDayFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.MonthDay</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.MonthDay_ )


---

## monthDayOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>monthDayOf</span>(<span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.MonthDay</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |

##### Return

( _java.time.MonthDay_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>monthDayOf</span>(<span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Month</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.MonthDay</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>monthOf</span>(<span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Month</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **month** | _int_ |   |

##### Return

( _java.time.Month_ )


---

## monthValueOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>monthValueOf</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Month</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _java.time.Month_ )


---

## offsetDateTime

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetDateTime</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetDateTime</span>
##### Return

( _java.time.OffsetDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetDateTime</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetDateTimeFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetDateTimeOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>nanoOfSecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetDateTimeOf</span>(<span style={{color: '#FF8000'}}>date</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>, <span style={{color: '#FF8000'}}>time</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **date** | _java.time.LocalDate_ |   |
| **time** | _java.time.LocalTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.OffsetDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetDateTimeOf</span>(<span style={{color: '#FF8000'}}>dateTime</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetDateTimeOfInstant</span>(<span style={{color: '#FF8000'}}>instant</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetTime</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetTime</span>
##### Return

( _java.time.OffsetTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetTime</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.OffsetTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetTime</span>(<span style={{color: '#FF8000'}}>clock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.OffsetTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetTime</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.OffsetTime_ )


---

## offsetTimeFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetTimeFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.OffsetTime_ )


---

## offsetTimeOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetTimeOf</span>(<span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>nanoOfSecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetTimeOf</span>(<span style={{color: '#FF8000'}}>time</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>offsetTimeOfInstant</span>(<span style={{color: '#FF8000'}}>instant</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.OffsetTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>period</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Period</span>
##### Return

( _java.time.Period_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>period</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Period</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Period_ )


---

## periodFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>periodFrom</span>(<span style={{color: '#FF8000'}}>temporalAmount</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAmount</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Period</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAmount** | _java.time.temporal.TemporalAmount_ |   |

##### Return

( _java.time.Period_ )


---

## periodOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>periodOf</span>(<span style={{color: '#FF8000'}}>years</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>months</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>days</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Period</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>periodOfDays</span>(<span style={{color: '#FF8000'}}>days</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Period</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **days** | _int_ |   |

##### Return

( _java.time.Period_ )


---

## periodOfMonths

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>periodOfMonths</span>(<span style={{color: '#FF8000'}}>months</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Period</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **months** | _int_ |   |

##### Return

( _java.time.Period_ )


---

## periodOfWeeks

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>periodOfWeeks</span>(<span style={{color: '#FF8000'}}>weeks</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Period</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **weeks** | _int_ |   |

##### Return

( _java.time.Period_ )


---

## periodOfYears

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>periodOfYears</span>(<span style={{color: '#FF8000'}}>years</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Period</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **years** | _int_ |   |

##### Return

( _java.time.Period_ )


---

## simpleDateFormat

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>simpleDateFormat</span>(<span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.text.SimpleDateFormat</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **format** | _string_ |   |

##### Return

( _java.text.SimpleDateFormat_ )


---

## unit

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>unit</span>(<span style={{color: '#FF8000'}}>field</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.concurrent.TimeUnit</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _java.util.concurrent.TimeUnit_ )


---

## valueRangeOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>valueRangeOf</span>(<span style={{color: '#FF8000'}}>min</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>max</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.ValueRange</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **min** | _long_ |   |
| **max** | _long_ |   |

##### Return

( _java.time.temporal.ValueRange_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>valueRangeOf</span>(<span style={{color: '#FF8000'}}>min</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>maxSmallest</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>maxLargest</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.ValueRange</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **min** | _long_ |   |
| **maxSmallest** | _long_ |   |
| **maxLargest** | _long_ |   |

##### Return

( _java.time.temporal.ValueRange_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>valueRangeOf</span>(<span style={{color: '#FF8000'}}>minSmallest</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>minLargest</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>maxSmallest</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>maxLargest</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.ValueRange</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>year</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Year</span>
##### Return

( _java.time.Year_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>year</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Year</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.Year_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>year</span>(<span style={{color: '#FF8000'}}>clock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Year</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.Year_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>year</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Year</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.Year_ )


---

## yearFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>yearFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Year</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.Year_ )


---

## yearMonth

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>yearMonth</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.YearMonth</span>
##### Return

( _java.time.YearMonth_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>yearMonth</span>(<span style={{color: '#FF8000'}}>clock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.YearMonth</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.YearMonth_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>yearMonth</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.YearMonth</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.YearMonth_ )


---

## yearMonthFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>yearMonthFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.YearMonth</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.YearMonth_ )


---

## yearMonthOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>yearMonthOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.YearMonth</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |

##### Return

( _java.time.YearMonth_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>yearMonthOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Month</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.YearMonth</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>yearOf</span>(<span style={{color: '#FF8000'}}>isoYear</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Year</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **isoYear** | _int_ |   |

##### Return

( _java.time.Year_ )


---

## zoneId

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneId</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>
##### Return

( _java.time.ZoneId_ )


---

## zoneIdFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneIdFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.ZoneId_ )


---

## zoneIdOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneIdOf</span>(<span style={{color: '#FF8000'}}>zoneId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zoneId** | _string_ |   |

##### Return

( _java.time.ZoneId_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneIdOf</span>(<span style={{color: '#FF8000'}}>zoneId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>aliasMap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zoneId** | _string_ |   |
| **aliasMap** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |

##### Return

( _java.time.ZoneId_ )


---

## zoneIdOfOffset

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneIdOfOffset</span>(<span style={{color: '#FF8000'}}>prefix</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffset</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>
##### Return

( _java.time.ZoneOffset_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffset</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zoneOffsetFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffsetFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zoneOffsetOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffsetOf</span>(<span style={{color: '#FF8000'}}>offsetId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **offsetId** | _string_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffsetOf</span>(<span style={{color: '#FF8000'}}>zoneId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>aliasMap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zoneId** | _string_ |   |
| **aliasMap** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |

##### Return

( _java.time.ZoneId_ )


---

## zoneOffsetOfHours

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffsetOfHours</span>(<span style={{color: '#FF8000'}}>hours</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hours** | _int_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfHoursMinutes

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffsetOfHoursMinutes</span>(<span style={{color: '#FF8000'}}>hours</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minutes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffsetOfHoursMinutesSeconds</span>(<span style={{color: '#FF8000'}}>hours</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minutes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>seconds</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffsetOfOffset</span>(<span style={{color: '#FF8000'}}>prefix</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zoneOffsetOfTotalSeconds</span>(<span style={{color: '#FF8000'}}>totalSeconds</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **totalSeconds** | _int_ |   |

##### Return

( _java.time.ZoneOffset_ )


---

## zonedDateTime

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTime</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Return

( _java.time.ZonedDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTime</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTime</span>(<span style={{color: '#FF8000'}}>clock</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Clock</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTime</span>(<span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeFrom

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeFrom</span>(<span style={{color: '#FF8000'}}>temporalAccessor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.temporal.TemporalAccessor</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOf

---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeOf</span>(<span style={{color: '#FF8000'}}>year</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>month</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dayOfMonth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>hour</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>minute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>second</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>nanoOfSecond</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeOf</span>(<span style={{color: '#FF8000'}}>date</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>, <span style={{color: '#FF8000'}}>time</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **date** | _java.time.LocalDate_ |   |
| **time** | _java.time.LocalTime_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeOf</span>(<span style={{color: '#FF8000'}}>localDateTime</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeOfInstant</span>(<span style={{color: '#FF8000'}}>instant</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeOfInstant</span>(<span style={{color: '#FF8000'}}>localDateTime</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeOfLocal</span>(<span style={{color: '#FF8000'}}>localDateTime</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>, <span style={{color: '#FF8000'}}>preferredOffset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ |   |
| **zone** | _java.time.ZoneId_ |   |
| **preferredOffset** | _java.time.ZoneOffset_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeOfLocal</span>(<span style={{color: '#FF8000'}}>localDateTime</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>, <span style={{color: '#FF8000'}}>offset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneOffset</span>, <span style={{color: '#FF8000'}}>zone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZoneId</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeParse</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.CharSequence</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_time</span>.<span style={{color: '#008000'}}>zonedDateTimeParse</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.CharSequence</span>, <span style={{color: '#FF8000'}}>dateTimeFormatter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.format.DateTimeFormatter</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.ZonedDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |
| **dateTimeFormatter** | _java.time.format.DateTimeFormatter_ |   |

##### Return

( _java.time.ZonedDateTime_ )


---

