# Theme

[[PL6 - Language Elements|PL6 - Language Elements]]
# Description

Participants described unfamiliarity with Jayvee language elements as a problem for understanding, for example the value types (here for a `GeographicCoordinate` between -90 and 90) based on constraints, as used in task 2:

```Jayvee
constraint GeographicCoordinateScale on decimal:
    value >= -90 and value <= 90;

valuetype GeographicCoordinate oftype decimal {
    constraints: [GeographicCoordinateScale];
}
```

The use of new and unfamiliar language elements and programming approaches will be a challenge for new languages and [[HU2.4 - Participants had no experience with Jayvee and its language design|participants had no experience with Jayvee and its language design]]. Users will be less able to re-use existing knowledge from software engineering in other general-purpose programming languages to understand source code.

On the other hand, subject-matter experts might be able to re-use their existing domain knowledge because the [[HU2.1 - Mental model of an ETL pipeline aligns with Jayvee|mental model of an ETL pipeline aligns with Jayvee]]. This makes it easier for novice programmers with a data engineering background to understand data pipelines.
# Representative Quotes

> The functional approach of Jayvee may be new to some people, and may confuse some people first (although it should be no problem once you experimented a bit with Jayvee).
 - *S0*

> The block structure may be something to get used to at first, but it's not too hard to learn.
 - *S16*

> On the other hand you might have to invest some time to get to know the different block types since those differ a bit from the programming languages that I am used to.
 - *S18*

> When not being used to Jayvee you would be first thinking that it is a strange language and be afraid because sometimes we think that "it is difficult", when we are not familiar with it.
 - *S28*

> I found the Jayvee code structure a bit difficult to understand, mostly the constraints and value type.
 - *S51*