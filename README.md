# README

### Prerequisite

- Have `zx` installed globally via `npm i -g zx`
- Have both scripts have execution permissions via `chmod +x bin/*.mjs`

### Steps to Reproduce the Problem

Run `./bin/issue.mjs` at project root directory.

##### Expected Behavior

- sleep.mjs is executed at background.
- issue.mjs quits after 'after ~' is outputted.

##### Actual Behavior

- sleep.mjs is executed at foreground.
- issue.mjs does not quit itself, and 'after ~' is not outputted.

```shell
issue-zx.long.running.task git:(master)  ./bin/issue.mjs 
before ~
$ nohup ./bin/sleep.mjs &
Awake ...
Awake ...
Awake ...
Awake ...
Awake ...
Awake ...
Awake ...
Awake ...
^C
```
