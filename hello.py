def function1(name):
    def function2():
        print('Hello ' + name)
    return function2

func = function1('Nicholas')
func()