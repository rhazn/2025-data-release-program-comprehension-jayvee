# Theme

[[HU3 - Naming|HU3 - Naming]]
# Description

Function names in Python have been described as less self-explanatory and clear than in Jayvee (see also [[HU3.1 - Jayvee names describe functionality well|HU3.1 - Jayvee names describe functionality well]]).

A challenge for naming in Python is that a large part of implementations related to data pipelines will come from external libraries. Therefore glossaries, concepts and approaches to naming will differ because they are provided by different authors (see [[PL4.2 - External libraries have different approaches and change|PL4.2 - External libraries have different approaches and change]]).

In addition, confusion can occur when the same functionality can be achieved with different functions from multiple libraries ([[PL4.4 - Different functions to achieve the same goal decrease understanding|PL4.4 - Different functions to achieve the same goal decrease understanding]]).

Quantity maters in addition to the quality of names. If data pipeline are implemented in a script-style fashion from top to bottom, fewer opportunities to group related code under a "speaking name" (see also [[PL2.3 - Encapsulation of related code in blocks or functions improves understanding|PL2.3 - Encapsulation of related code in blocks or functions improves understanding]]) exist. With the stricter structure of Jayvee, developers are forced to give names to every block which in turn can be used by readers to understand the pipeline better.
# Representative Quotes

> The method names are not always chosen good. Depending on the library it is not quite clear what each methods does.
- *S0*

> Moreover, one needs to read about the parameters of each functions and usually in Python and its libraries the names are not that self-explanatory.
- *S15*

> The naming of Python functions might not be as clear and easy to understand.
- *S18*

> Additionally once do have to know the Pandas framework to really understand what is happening. Adding a new column is not a named function like "add_column()" but simply "df['new_column'] = ...", which does not trivially make it clear what is happening (could also be an assignment). (...) Generally the code is less speaking, more cryptic and therefore makes it harder to understand what is happening.
- *S37*
