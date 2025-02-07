# Category

[[PL - Programming Language]]
# Description

Jayvee splits block definitions and connecting blocks into a pipeline into separate code locations. This leads to a pipeline model that is structured as follows (from task 2):

```Jayvee
pipeline RescueStationPipeline {

HttpDataSource
    ->TextInterpreter
    ->CSVFileInterpreter
    ->ValuetypeValidator
    ->IsPubliclyFundedColumnAdder
    ->SQLiteSink;
    
    block HttpDataSource oftype HttpExtractor {
        url: 'https://geo.sv.rostock.de/download/opendata/rettungswachen/rettungswachen.csv';
    }
    
    // Further block definitions
}
```

This provides an overview of the pipeline at the top of each file that does not exist in Python scripts.
# Content

- [[PL1.1 - Information is split between pipeline overview and implementation|Information is split between pipeline overview and implementation]]
- [[PL1.2 - Without pipeline overview, all code must be considered|Without pipeline overview, all code must be considered]]
- [[PL1.3 - Python does not provide a pipeline overview|Python does not provide a pipeline overview]]
- [[PL1.4 - Jayvee pipeline overview improves speed|Jayvee pipeline overview improves speed]]
- [[PL1.5 - Jayvee pipeline overview helps to understand the flow of a pipeline|Jayvee pipeline overview helps to understand the flow of a pipeline]]