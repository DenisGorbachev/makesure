# MakeSure

MakeSure is a collection of pre-release checklists. You can run them before publishing your product — just to make sure that you didn't miss the important details. 

**:warning: If you don't use checklists, you may release a bad product without knowing it. :warning:**

## Examples

* Make sure your product is ready for a ProductHunt launch.
* Make sure your business model contains all relevant details.
* Make sure your product description post contains all required sections.

## Usage

```
makesure BusinessModel model.txt
makesure ProductHuntLaunch launch.todo.txt
makesure Startup startup.js
```

Shorthand:
```
ms BusinessModel model.txt
```

## Writing plugins

## Managing your startup

You can even manage your whole startup with `makesure`. Just create your own checklists (or extend existing ones).

Makesure acts as a "Project-Management-As-Code" tool.

## Manage your life

You can take it to the limit and make sure you've done all the chores for today.

`makesure Myself`

## Automation

* Some checklists are automated.
* Some checklists need to be completed by humans:
  * A text file with the checklist is written by a human checker
  * A text file with the checklist is passed to `makesure`, which validates it according to specification

## Extra

### Guidelines

* Specs should be minimal
* Specs should be extendable 

### Slogans

* Get yourself ensured.
