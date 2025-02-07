# Theme

[[PL3 - Transparency|PL3 - Transparency]]
# Description

The higher the abstraction level from the actual implementation is in a language, the less ability participants have to improve their understanding by reading the source code.

As an example, Jayvee provides a `TableTransformer` block that made understanding unclear to *S0*.

```Jayvee
block IsPubliclyFundedColumnAdder oftype TableTransformer {
    inputColumns: ['traeger_art'];
    outputColumn: 'publiclyFunded';
    
    use: IsPubliclyFunded;
}
```

Because there is no way to actually find out how the `TableTransformer` is implemented, it is unclear if the `inputColumn` is consumed or not.
# Representative Quotes

> Sometimes it is not quite clear what the blocks exactly do especially in the details (example: does the TableTransformer delete/consume the input column?)
- *S0*

> It (Jayvee) has some level of difficulty because of the structure of the functions, I do not know what to expect inside a function.
- *S21*