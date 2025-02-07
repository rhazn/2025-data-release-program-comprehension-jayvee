# Theme

[[PL3 - Transparency|PL3 - Transparency]]
# Description

Density of functionality refers to how much functionality can be expressed in each line of code or how terse the code can be. Data pipelines implemented in Python / Pandas can be very short and express a lot of meaning in few lines of code, especially in contrast to Jayvee. Outside of functionality, [[PL5.4 - Expressive and verbose syntax|expressive and verbose syntax]] has an influence on length of source code.

Such high density of functionality can negatively impact understandability, especially if achieved by increased automation (see [[PL3.2 - Automation decreases understanding|PL3.2 - Automation decreases understanding]]). In addition, very terse code can be especially hard to read if not written by oneself because the context of the original idea behind the code is lost.

A negative effect of low density of functionality is that complex pipelines will require more source code to be read and understood, with potentially negative effects on especially speed. It would depend on if it takes longer to read the larger amount of low-density code or longer to understand high-density code. However, in our experiments tasks were relatively short so the low density of Jayvee would have little effect.
# Representative Quotes

> Especially in a large pipeline a file might get really big because of all the definitions (especially unnecessary empty block definitions).
- *S0*

> Python makes it possible to have a lot of functionality in just a few lines, which can make it hard to read if you have not written it yourself.
- *S30*