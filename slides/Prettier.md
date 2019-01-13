slidenumbers: false

[.background-color: #000000]

---

# Prettier

[.text: #ffffff][.header: #ffffff]
[.background-color: #000000][.footer: www.mulberryhousesoftware.com - www.github.com/johnwalley - @dowhatimean]

![](title.png)

### An Opinionated Code Formatter

^ Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

---

[.background-color: #171717]

![fit](before.png)

---

[.background-color: #171717]

![fit](after.png)

---

## What?

## Why?

## How?

^ This is what speaker notes look like when you are presenting with a external display, or practicing in rehearsal mode.

---

[.background-color: #000000]

# What?

---

[.build-lists: true][.list: alignment(left)]

# What is Prettier?

- An **opinionated** code formatter
- Has few options
- Supports many languages

---

[.list: alignment(left)]

# Works with the Tools You Use

- ES2017
- JSX
- TypeScript
- JSON
- CSS
- HTML

---

[.list: alignment(left)]

# What is Prettier?

- An **opinionated** code formatter
- Has few options
- Supports many languages
- Integrates with most editors

---

# Editor Support

[.list: alignment(left)]

- Vim
- Emacs
- VS Code
- Sublime Text
- Atom
- Visual Studio

---

[.background-color: #000000]

# Why?

---

# Why Prettier?

[.build-lists: true][.list: alignment(left)]

- You press save and code is formatted
- No need to discuss style in code review
- Saves you time and energy

---

# Why Prettier?

[.build-lists: true][.list: alignment(left)]

- Building and enforcing a style guide
- Helping newcomers
- Writing code
- Easy to adopt
- Clean up an existing codebase

---

> Nobody loves what prettier does to **their** syntax.
> Everyone loves what prettier does to their **coworkers'** syntax
> -- u/grensley (Reddit)

---

[.background-color: #000000]

# How?

---

# Add prettier to your project

```bash
npm install prettier --save-dev --save-exact
```

^ We recommend pinning an exact version of prettier in your package.json as we introduce stylistic changes in patch releases.

---

# Run Prettier in Your Editor

---

# Run Prettier When Commiting Files

```bash
npm install pretty-quick husky --save-dev
```

---

# Partial File Formatting

Great for when you want partial file formatting on your changed/staged files.

[github.com/nrwl/precise-commits](https://github.com/nrwl/precise-commits)

---

# Configuring Prettier

^ Options and Configuration File

---

# Prettier vs Linters

[.build-lists: true][.list: alignment(left)]

Linters have two categories of rules:

- Formatting rules: eg: max-len, no-mixed-spaces-and-tabs, comma-style...
- Code-quality rules: eg no-unused-vars, no-implicit-globals...

^ Prettier alleviates the need for this whole category of rules! Prettier is going to reprint the entire program from scratch in a consistent way, so it's not possible for the programmer to make a mistake there anymore :)

^ Prettier does nothing to help with those kind of rules. They are also the most important ones provided by linters as they are likely to catch real bugs with your code!

---

# Integrating with ESLint

---

# Continuous Integration

Other auto formatters?
Fix build lists
Checklist (save on format)
VS Code on separate screen?
