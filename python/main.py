from car import Car
from account import Account

if __name__ == "__main__":
    print("hola mundo")

    car = Car()
    car.license = "AMS234"
    car.driver = "Oscar Velez"
    print(vars(car))

    car2 = Car()
    car2.license = "HQA28f"
    car2.driver = "Monica Arango"
    print(vars(car2))
