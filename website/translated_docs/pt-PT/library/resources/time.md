---
id: time
title: Time
sidebar_label: Time
---

Gestão de dados temporal baseada no **java.time**.

---

## castToChronoLocalDate

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">castToChronoLocalDate</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.time.chrono.ChronoLocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.time.chrono.ChronoLocalDate_ )


---

## castToTemporal

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">castToTemporal</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.time.temporal.Temporal</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.time.temporal.Temporal_ )


---

## castToTemporalAcessor

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">castToTemporalAcessor</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>
##### Descrição

Converte o objeeto passado para TemporalAcessor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.time.temporal.TemporalAccessor_ )


---

## chronoField

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">chronoField</span>(<span style="color: #FF8000">field</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.temporal.ChronoField</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **field** | _string_ |   |

##### Retorno

( _java.time.temporal.ChronoField_ )


---

## chronoUnit

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">chronoUnit</span>(<span style="color: #FF8000">field</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.temporal.ChronoUnit</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **field** | _string_ |   |

##### Retorno

( _java.time.temporal.ChronoUnit_ )


---

## clock

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">clock</span>() : <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>
##### Retorno

( _java.time.Clock_ )


---

## clockFixed

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">clockFixed</span>(<span style="color: #FF8000">fixedInstant</span>: <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fixedInstant** | _java.time.Instant_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockOffset

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">clockOffset</span>(<span style="color: #FF8000">baseClock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>, <span style="color: #FF8000">offsetDuration</span>: <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **baseClock** | _java.time.Clock_ |   |
| **offsetDuration** | _java.time.Duration_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockSystem

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">clockSystem</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockSystemUTC

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">clockSystemUTC</span>() : <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>
##### Retorno

( _java.time.Clock_ )


---

## clockTick

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">clockTick</span>(<span style="color: #FF8000">baseClock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>, <span style="color: #FF8000">tickDuration</span>: <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **baseClock** | _java.time.Clock_ |   |
| **tickDuration** | _java.time.Duration_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockTickMinutes

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">clockTickMinutes</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## clockTickSeconds

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">clockTickSeconds</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Clock_ )


---

## currentMilis

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">currentMilis</span>() : <span style="font-weight: normal; font-style: italic;">long</span>
##### Retorno

( _long_ )


---

## date

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">date</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Date</span>
##### Retorno

( _java.util.Date_ )


---

## dateFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">dateFrom</span>(<span style="color: #FF8000">instant</span>: <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **instant** | _java.time.Instant_ |   |

##### Retorno

( _java.util.Date_ )


---

## dateTimeFormatter

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">dateTimeFormatter</span>() : <span style="font-weight: normal; font-style: italic;">java.time.format.DateTimeFormatter</span>
##### Retorno

( _java.time.format.DateTimeFormatter_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">dateTimeFormatter</span>(<span style="color: #FF8000">pattern</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.format.DateTimeFormatter</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pattern** | _string_ |   |

##### Retorno

( _java.time.format.DateTimeFormatter_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">dateTimeFormatter</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">locale</span>: <span style="font-weight: normal; font-style: italic;">java.util.Locale</span>) : <span style="font-weight: normal; font-style: italic;">java.time.format.DateTimeFormatter</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |
| **locale** | _java.util.Locale_ |   |

##### Retorno

( _java.time.format.DateTimeFormatter_ )


---

## dateTimeFormatterBuilder

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">dateTimeFormatterBuilder</span>() : <span style="font-weight: normal; font-style: italic;">java.time.format.DateTimeFormatterBuilder</span>
##### Retorno

( _java.time.format.DateTimeFormatterBuilder_ )


---

## decimalStyle

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">decimalStyle</span>() : <span style="font-weight: normal; font-style: italic;">java.time.format.DecimalStyle</span>
##### Retorno

( _java.time.format.DecimalStyle_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">decimalStyle</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.format.DecimalStyle</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.format.DecimalStyle_ )


---

## duration

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">duration</span>() : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Retorno

( _java.time.Duration_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">duration</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationBetween

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationBetween</span>(<span style="color: #FF8000">startInclusive</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.Temporal</span>, <span style="color: #FF8000">endExclusive</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.Temporal</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **startInclusive** | _java.time.temporal.Temporal_ |   |
| **endExclusive** | _java.time.temporal.Temporal_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationFrom</span>(<span style="color: #FF8000">temporalAmount</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAmount</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAmount** | _java.time.temporal.TemporalAmount_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationOf</span>(<span style="color: #FF8000">amount</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">unit</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalUnit</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **amount** | _long_ |   |
| **unit** | _java.time.temporal.TemporalUnit_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfDays

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationOfDays</span>(<span style="color: #FF8000">days</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **days** | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfHours

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationOfHours</span>(<span style="color: #FF8000">hours</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **hours** | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfMillis

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationOfMillis</span>(<span style="color: #FF8000">millis</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **millis** | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfMinutes

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationOfMinutes</span>(<span style="color: #FF8000">minutes</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **minutes** | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfNanos

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationOfNanos</span>(<span style="color: #FF8000">nanos</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nanos** | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## durationOfSeconds

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationOfSeconds</span>(<span style="color: #FF8000">seconds</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **seconds** | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">durationOfSeconds</span>(<span style="color: #FF8000">seconds</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">nanoAdjustment</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Duration</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **seconds** | _long_ |   |
| **nanoAdjustment** | _long_ |   |

##### Retorno

( _java.time.Duration_ )


---

## gregorianCalendar

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">gregorianCalendar</span>() : <span style="font-weight: normal; font-style: italic;">java.util.GregorianCalendar</span>
##### Retorno

( _java.util.GregorianCalendar_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">gregorianCalendar</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.GregorianCalendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">gregorianCalendar</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hourOfDay</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.GregorianCalendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hourOfDay** | _int_ |   |
| **minute** | _int_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">gregorianCalendar</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hourOfDay</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.GregorianCalendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hourOfDay** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">gregorianCalendar</span>(<span style="color: #FF8000">aLocale</span>: <span style="font-weight: normal; font-style: italic;">java.util.Locale</span>) : <span style="font-weight: normal; font-style: italic;">java.util.GregorianCalendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **aLocale** | _java.util.Locale_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">gregorianCalendar</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.util.TimeZone</span>) : <span style="font-weight: normal; font-style: italic;">java.util.GregorianCalendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.util.TimeZone_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">gregorianCalendar</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.util.TimeZone</span>, <span style="color: #FF8000">aLocale</span>: <span style="font-weight: normal; font-style: italic;">java.util.Locale</span>) : <span style="font-weight: normal; font-style: italic;">java.util.GregorianCalendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.util.TimeZone_ |   |
| **aLocale** | _java.util.Locale_ |   |

##### Retorno

( _java.util.GregorianCalendar_ )


---

## gregorianCalendarConstant

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">gregorianCalendarConstant</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _int_ )


---

## instant

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">instant</span>() : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Retorno

( _java.time.Instant_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">instant</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">instant</span>(<span style="color: #FF8000">clock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">instantFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantOfEpochMilli

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">instantOfEpochMilli</span>(<span style="color: #FF8000">epochMilli</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **epochMilli** | _long_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantOfEpochSecond

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">instantOfEpochSecond</span>(<span style="color: #FF8000">epochsecond</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **epochsecond** | _long_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">instantOfEpochSecond</span>(<span style="color: #FF8000">epochsecond</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">nanoAdjustment</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **epochsecond** | _long_ |   |
| **nanoAdjustment** | _long_ |   |

##### Retorno

( _java.time.Instant_ )


---

## instantParse

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">instantParse</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">java.lang.CharSequence</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.Instant_ )


---

## isoFields

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">isoFields</span>(<span style="color: #FF8000">field</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.temporal.IsoFields</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **field** | _string_ |   |

##### Retorno

( _java.time.temporal.IsoFields_ )


---

## julianFields

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">julianFields</span>(<span style="color: #FF8000">field</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.temporal.JulianFields</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **field** | _string_ |   |

##### Retorno

( _java.time.temporal.JulianFields_ )


---

## localDate

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDate</span>() : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Retorno

( _java.time.LocalDate_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDate</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDate</span>(<span style="color: #FF8000">clock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDate</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">java.time.Month</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateOfEpochDay

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateOfEpochDay</span>(<span style="color: #FF8000">epochDay</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **epochDay** | _long_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateOfYearDay

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateOfYearDay</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfYear</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **dayOfYear** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateParse

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateParse</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">java.lang.CharSequence</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateParse</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">java.lang.CharSequence</span>, <span style="color: #FF8000">dateTimeFormatter</span>: <span style="font-weight: normal; font-style: italic;">java.time.format.DateTimeFormatter</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |
| **dateTimeFormatter** | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## localDateTime

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTime</span>() : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTime</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTime</span>(<span style="color: #FF8000">clock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTime</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nanoOfSecond</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">java.time.Month</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">java.time.Month</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">java.time.Month</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nanoOfSecond</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeOf</span>(<span style="color: #FF8000">date</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>, <span style="color: #FF8000">time</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **date** | _java.time.LocalDate_ |   |
| **time** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeOfEpochSecond

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeOfEpochSecond</span>(<span style="color: #FF8000">epochSecond</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">nanoOfSecond</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **epochSecond** | _long_ |   |
| **nanoOfSecond** | _int_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeOfInstant

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeOfInstant</span>(<span style="color: #FF8000">instant</span>: <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **instant** | _java.time.Instant_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localDateTimeParse

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeParse</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">java.lang.CharSequence</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localDateTimeParse</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">java.lang.CharSequence</span>, <span style="color: #FF8000">dateTimeFormatter</span>: <span style="font-weight: normal; font-style: italic;">java.time.format.DateTimeFormatter</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |
| **dateTimeFormatter** | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## localTime

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTime</span>() : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Retorno

( _java.time.LocalTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTime</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTime</span>(<span style="color: #FF8000">clock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTime</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTimeFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTimeOf</span>(<span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTimeOf</span>(<span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTimeOf</span>(<span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nanoOfSecond</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeOfNanoOfDay

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTimeOfNanoOfDay</span>(<span style="color: #FF8000">nanoOfDay</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nanoOfDay** | _long_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeOfSecondOfDay

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTimeOfSecondOfDay</span>(<span style="color: #FF8000">secondOfDay</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **secondOfDay** | _long_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## localTimeParse

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTimeParse</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">java.lang.CharSequence</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">localTimeParse</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">java.lang.CharSequence</span>, <span style="color: #FF8000">dateTimeFormatter</span>: <span style="font-weight: normal; font-style: italic;">java.time.format.DateTimeFormatter</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |
| **dateTimeFormatter** | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## month

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">month</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Month</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.Month_ )


---

## monthDay

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">monthDay</span>() : <span style="font-weight: normal; font-style: italic;">java.time.MonthDay</span>
##### Retorno

( _java.time.MonthDay_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">monthDay</span>(<span style="color: #FF8000">clock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>) : <span style="font-weight: normal; font-style: italic;">java.time.MonthDay</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">monthDay</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.MonthDay</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

## monthDayFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">monthDayFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.MonthDay</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

## monthDayOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">monthDayOf</span>(<span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.MonthDay</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">monthDayOf</span>(<span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">java.time.Month</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.MonthDay</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **month** | _java.time.Month_ |   |
| **dayOfMonth** | _int_ |   |

##### Retorno

( _java.time.MonthDay_ )


---

## monthOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">monthOf</span>(<span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Month</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **month** | _int_ |   |

##### Retorno

( _java.time.Month_ )


---

## monthValueOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">monthValueOf</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Month</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _java.time.Month_ )


---

## offsetDateTime

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetDateTime</span>() : <span style="font-weight: normal; font-style: italic;">java.time.OffsetDateTime</span>
##### Retorno

( _java.time.OffsetDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetDateTime</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetDateTimeFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetDateTimeOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nanoOfSecond</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetDateTimeOf</span>(<span style="color: #FF8000">date</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>, <span style="color: #FF8000">time</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **date** | _java.time.LocalDate_ |   |
| **time** | _java.time.LocalTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetDateTimeOf</span>(<span style="color: #FF8000">dateTime</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dateTime** | _java.time.LocalDateTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetDateTimeOfInstant

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetDateTimeOfInstant</span>(<span style="color: #FF8000">instant</span>: <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **instant** | _java.time.Instant_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetDateTime_ )


---

## offsetTime

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetTime</span>() : <span style="font-weight: normal; font-style: italic;">java.time.OffsetTime</span>
##### Retorno

( _java.time.OffsetTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetTime</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetTime</span>(<span style="color: #FF8000">clock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetTime</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## offsetTimeFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetTimeFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## offsetTimeOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetTimeOf</span>(<span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nanoOfSecond</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetTimeOf</span>(<span style="color: #FF8000">time</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **time** | _java.time.LocalTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## offsetTimeOfInstant

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">offsetTimeOfInstant</span>(<span style="color: #FF8000">instant</span>: <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.OffsetTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **instant** | _java.time.Instant_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.OffsetTime_ )


---

## period

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">period</span>() : <span style="font-weight: normal; font-style: italic;">java.time.Period</span>
##### Retorno

( _java.time.Period_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">period</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Period</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">periodFrom</span>(<span style="color: #FF8000">temporalAmount</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAmount</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Period</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAmount** | _java.time.temporal.TemporalAmount_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">periodOf</span>(<span style="color: #FF8000">years</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">months</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">days</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Period</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **years** | _int_ |   |
| **months** | _int_ |   |
| **days** | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfDays

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">periodOfDays</span>(<span style="color: #FF8000">days</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Period</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **days** | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfMonths

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">periodOfMonths</span>(<span style="color: #FF8000">months</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Period</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **months** | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfWeeks

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">periodOfWeeks</span>(<span style="color: #FF8000">weeks</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Period</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **weeks** | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## periodOfYears

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">periodOfYears</span>(<span style="color: #FF8000">years</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Period</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **years** | _int_ |   |

##### Retorno

( _java.time.Period_ )


---

## simpleDateFormat

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">simpleDateFormat</span>(<span style="color: #FF8000">format</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.text.SimpleDateFormat</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **format** | _string_ |   |

##### Retorno

( _java.text.SimpleDateFormat_ )


---

## unit

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">unit</span>(<span style="color: #FF8000">field</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.concurrent.TimeUnit</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **field** | _string_ |   |

##### Retorno

( _java.util.concurrent.TimeUnit_ )


---

## valueRangeOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">valueRangeOf</span>(<span style="color: #FF8000">min</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">max</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.temporal.ValueRange</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **min** | _long_ |   |
| **max** | _long_ |   |

##### Retorno

( _java.time.temporal.ValueRange_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">valueRangeOf</span>(<span style="color: #FF8000">min</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">maxSmallest</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">maxLargest</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.temporal.ValueRange</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **min** | _long_ |   |
| **maxSmallest** | _long_ |   |
| **maxLargest** | _long_ |   |

##### Retorno

( _java.time.temporal.ValueRange_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">valueRangeOf</span>(<span style="color: #FF8000">minSmallest</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">minLargest</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">maxSmallest</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">maxLargest</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.time.temporal.ValueRange</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **minSmallest** | _long_ |   |
| **minLargest** | _long_ |   |
| **maxSmallest** | _long_ |   |
| **maxLargest** | _long_ |   |

##### Retorno

( _java.time.temporal.ValueRange_ )


---

## year

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">year</span>() : <span style="font-weight: normal; font-style: italic;">java.time.Year</span>
##### Retorno

( _java.time.Year_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">year</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Year</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.Year_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">year</span>(<span style="color: #FF8000">clock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Year</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Retorno

( _java.time.Year_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">year</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Year</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.Year_ )


---

## yearFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">yearFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Year</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.Year_ )


---

## yearMonth

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">yearMonth</span>() : <span style="font-weight: normal; font-style: italic;">java.time.YearMonth</span>
##### Retorno

( _java.time.YearMonth_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">yearMonth</span>(<span style="color: #FF8000">clock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>) : <span style="font-weight: normal; font-style: italic;">java.time.YearMonth</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">yearMonth</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.YearMonth</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

## yearMonthFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">yearMonthFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.YearMonth</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

## yearMonthOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">yearMonthOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.YearMonth</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">yearMonthOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">java.time.Month</span>) : <span style="font-weight: normal; font-style: italic;">java.time.YearMonth</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _java.time.Month_ |   |

##### Retorno

( _java.time.YearMonth_ )


---

## yearOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">yearOf</span>(<span style="color: #FF8000">isoYear</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Year</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **isoYear** | _int_ |   |

##### Retorno

( _java.time.Year_ )


---

## zoneId

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneId</span>() : <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>
##### Retorno

( _java.time.ZoneId_ )


---

## zoneIdFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneIdFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneIdOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneIdOf</span>(<span style="color: #FF8000">zoneId</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zoneId** | _string_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneIdOf</span>(<span style="color: #FF8000">zoneId</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">aliasMap</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zoneId** | _string_ |   |
| **aliasMap** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneIdOfOffset

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneIdOfOffset</span>(<span style="color: #FF8000">prefix</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **prefix** | _string_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneOffset

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffset</span>() : <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>
##### Retorno

( _java.time.ZoneOffset_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffset</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffsetFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffsetOf</span>(<span style="color: #FF8000">offsetId</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **offsetId** | _string_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffsetOf</span>(<span style="color: #FF8000">zoneId</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">aliasMap</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zoneId** | _string_ |   |
| **aliasMap** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneOffsetOfHours

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffsetOfHours</span>(<span style="color: #FF8000">hours</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **hours** | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfHoursMinutes

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffsetOfHoursMinutes</span>(<span style="color: #FF8000">hours</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minutes</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **hours** | _int_ |   |
| **minutes** | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfHoursMinutesSeconds

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffsetOfHoursMinutesSeconds</span>(<span style="color: #FF8000">hours</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minutes</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">seconds</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **hours** | _int_ |   |
| **minutes** | _int_ |   |
| **seconds** | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zoneOffsetOfOffset

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffsetOfOffset</span>(<span style="color: #FF8000">prefix</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **prefix** | _string_ |   |
| **offset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.ZoneId_ )


---

## zoneOffsetOfTotalSeconds

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zoneOffsetOfTotalSeconds</span>(<span style="color: #FF8000">totalSeconds</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **totalSeconds** | _int_ |   |

##### Retorno

( _java.time.ZoneOffset_ )


---

## zonedDateTime

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTime</span>() : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Retorno

( _java.time.ZonedDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTime</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTime</span>(<span style="color: #FF8000">clock</span>: <span style="font-weight: normal; font-style: italic;">java.time.Clock</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **clock** | _java.time.Clock_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTime</span>(<span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeFrom

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeFrom</span>(<span style="color: #FF8000">temporalAccessor</span>: <span style="font-weight: normal; font-style: italic;">java.time.temporal.TemporalAccessor</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **temporalAccessor** | _java.time.temporal.TemporalAccessor_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOf

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeOf</span>(<span style="color: #FF8000">year</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">month</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dayOfMonth</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hour</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">minute</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">second</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nanoOfSecond</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **year** | _int_ |   |
| **month** | _int_ |   |
| **dayOfMonth** | _int_ |   |
| **hour** | _int_ |   |
| **minute** | _int_ |   |
| **second** | _int_ |   |
| **nanoOfSecond** | _int_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeOf</span>(<span style="color: #FF8000">date</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>, <span style="color: #FF8000">time</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **date** | _java.time.LocalDate_ |   |
| **time** | _java.time.LocalTime_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeOf</span>(<span style="color: #FF8000">localDateTime</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOfInstant

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeOfInstant</span>(<span style="color: #FF8000">instant</span>: <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **instant** | _java.time.Instant_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeOfInstant</span>(<span style="color: #FF8000">localDateTime</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeOfLocal

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeOfLocal</span>(<span style="color: #FF8000">localDateTime</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>, <span style="color: #FF8000">preferredOffset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ |   |
| **zone** | _java.time.ZoneId_ |   |
| **preferredOffset** | _java.time.ZoneOffset_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeOfLocal</span>(<span style="color: #FF8000">localDateTime</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>, <span style="color: #FF8000">offset</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneOffset</span>, <span style="color: #FF8000">zone</span>: <span style="font-weight: normal; font-style: italic;">java.time.ZoneId</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ |   |
| **offset** | _java.time.ZoneOffset_ |   |
| **zone** | _java.time.ZoneId_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

## zonedDateTimeParse

---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeParse</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">java.lang.CharSequence</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

#### <span style="font-weight: normal">_time</span>.<span style="color: #008000">zonedDateTimeParse</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">java.lang.CharSequence</span>, <span style="color: #FF8000">dateTimeFormatter</span>: <span style="font-weight: normal; font-style: italic;">java.time.format.DateTimeFormatter</span>) : <span style="font-weight: normal; font-style: italic;">java.time.ZonedDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.lang.CharSequence_ |   |
| **dateTimeFormatter** | _java.time.format.DateTimeFormatter_ |   |

##### Retorno

( _java.time.ZonedDateTime_ )


---

