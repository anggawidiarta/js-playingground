def sayHello(name):
    def hello():
        return (f'{name}')
    return hello

caller = sayHello('anggi')
print(caller())