# Theme

[[PL3 - Transparency|PL3 - Transparency]]
# Description

A specific issue participants mentioned are the interpreter blocks in Jayvee data pipeline models such as `TextFileInterpreter` and `CSVInterpreter`, as seen here in task 2:

```Jayvee
pipeline RescueStationPipeline {

HttpDataSource
    ->TextInterpreter
    ->CSVFileInterpreter
    ->ValuetypeValidator
    ->IsPubliclyFundedColumnAdder
    ->SQLiteSink;

    block TextInterpreter oftype TextFileInterpreter {}
    
    block CSVFileInterpreter oftype CSVInterpreter {
        // properties omitted
    }
    // more block definitions
}
```

These blocks are described as confusing and decreasing understanding because more than one block is needed to implement "one task" (*S30*).

A good balance regarding the level of abstraction for understanding seems to be one block per task, with a task being defined as what users expect in their mental model of a data pipeline (see also [[HU2.1 - Mental model of an ETL pipeline aligns with Jayvee|HU2.1 - Mental model of an ETL pipeline aligns with Jayvee]]). Technically users want to download binary data, interpret the data as a text file and then consider the content of the text file to be formatted according to the CSV standard. Practically they do not consider these very low-level steps and think of downloading a CSV file and using the data inside immediately.

Interpreter blocks are a negative example of low [[PL3.5 - Density of functionality effects understanding|density of functionality effecting understanding]]. The lessons here are also relevant to  [[PL3.4 - Scoped code (blocks, functions) should execute one operation, not multiple|PL3.4 - Scoped code (blocks, functions) should execute one operation, not multiple]], clarifying that "one operation" means one task as users expect it.

# Representative Quotes

> I had some issues creating a jayvee pipeline at first, because of the fact that sometimes multiple pipeline steps are needed to execute 'just' one task (file interpreter etc).
- *S30*

> Sometimes the blocks look similar, (extracting, interpreting) which is not quite intuitive what might be happening.
- *S31*