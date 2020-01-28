# JS

JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.

A JavaScript engine is a program or an interpreter which executes JavaScript code. A JavaScript engine can be implemented as a standard interpreter, or just-in-time compiler that compiles JavaScript to bytecode in some form.

## DOMContent Loaded

The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

## Load event

The `load` event is fired when a resource and its dependent resources have finished loading.

## Parsing

Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers.

JavaScript parsing is done during compile time or whenever the parser is invoked, such as during a call to a method.

The compile time is the time from when the program is first loaded until the program is parsed.

Timeline (Performance panel) > Bottom-Up/Call Tree/Event Log will let us drill into the amount of time spent in Parse/Compile.

`about:tracing` — Chrome’s lower-level Tracing tool allows us to use the `disabled-by-default-v8.runtime_stats` category to get deeper insights into where V8 spends its time.

## Evaluation

## Execution
