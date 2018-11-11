### Usage

In the `backend` directory, please run following command:

```
$ ruby main.rb -s "8
0 -3 5 -4 -2 3 1 0"
```

You can also see all available commands by running help command:

```
$ ruby main.rb -h
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
