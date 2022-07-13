class Main {
 
 public static void main(String[] args) {
  System.out.println("Hola Mundo");
  UberX uberX = new UberX("AMQ123", new Account("Oscar Velez", "AND123"));
  uberX.setPassenger(4);
  uberX.printDataCard();

  UberVan uberVan = new UberVan("FGH345", new Account("Oscar Velez", "AND123"));
  uberVan.setPassenger(6);
  uberVan.printDataCard();

 /*  Car car2 = new Car("QWE567", new Account("Monica Arango"", "AND876"));
  car2.passenger = 3;
  car2.printDataCard();*/
  

}
  
   } 
   



