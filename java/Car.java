class Car{
    private Integer id;
    private String license;
    private Account driver;
    private Integer passenger;
    private integer passenger;

    public Car(String license, Account driver){
        this.license = license;
        this.driver = driver;
        passenger = 3;
        System.out.println("passenger:" + passenger);
        
    }

    void printDataCard(){
        system.out.println("License:" + license + " Name Driver:" + driver.name + "Passengers:" + passenger);
    }

    public Integer getPassenger(){
        return passenger;
    }

    public void setPassenger(Integer passenger) {
        if (passenger == 4){
            this.passenger = passenger;
    }else{
        System.out.println("Necesitas asignar 4 pasajeros")
    }

    

}