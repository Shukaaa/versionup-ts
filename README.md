# versionup-ts

This package allows you to increment the `version` in the `package.json` file.

## Installation

To install the package, run the following command:

```shell
npm install versionup-ts
```

## Usage

Import the `versionUp` function from the package and call it to increment the `version`. The function accepts three parameters:

- `numberIndex`: The index of the digit to increment (starting from 0 for the first digit).
- `increment`: The amount by which to increment the digit.

Here's an example usage:

```javascript
import { versionUp } from "versionup-ts";

// Increment the third digit (index 2) by 1 [1.0.0 -> 1.0.1]
versionUp(2, 1);
```

By default, the function reads and writes to the `package.json` file in the current directory. If you want to specify a different path, you can pass it as an optional third parameter:

```javascript
import { versionUp } from "versionup-ts";

// Increment the second digit (index 1) by 2 in a specific package.json file [1.0.0 -> 1.2.0]
versionUp(1, 2, "/path/to/package.json");
```
