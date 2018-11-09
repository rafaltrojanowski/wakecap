### Usage

```
$ ruby main.rb -n "8
0 -3 5 -4 -2 3 1 0"
```

### Running tests

```
$ rspec spec
```

### TODO

- Fix following behaviour:

```
$ ruby main.rb -s "8\n1 2 3"
```

Somehow, option parser replaces ```\n``` with ```\\n``` which causes bug later on.
