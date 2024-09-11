---
title: Installing packages in Python
date: 2024-09-10
description: Short guide to install packages in Python from the terminal
---

Start by making sure you have Python installed. Visit the [Python](https://python.org) website for download and installation instructions.

Following the installation, make sure Python was installed correctly. Open a terminal on your computer (terminal on macOS, Powershell on Windows). Enter the following command:

```bash
python3 --version # Example output: Python 3.12.6
```

Python includes a package manager called **pip** to install libraries and packages. Make sure it was installed correctly.

```bash
pip3 --version # Example output: pip 24.2 from ...
```

**Notice:** On Windows computers, or in virtual Python environments, the commands *python* and *pip* can be used without the *3* suffix.

Let's install some packages.

```bash
# Install a single package
pip3 install numpy

# Install multiple at once
pip3 install pandas matplotlib
```

Using packages in your Python program is pretty straight forward. Here are a couple examples.

```python
# example.py
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

df = pd.Dataframe()

# Rest of code
```

Happy programming!
