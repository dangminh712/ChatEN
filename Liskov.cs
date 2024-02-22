using System;

public class Horn
{
    public virtual void Honk()
    {
        Console.WriteLine("Honking the horn");
    }
}

public class CarHorn : Horn
{
    public override void Honk()
    {
        Console.WriteLine("Beep beep");
    }
}

public class TruckHorn : Horn
{
    public override void Honk()
    {
        Console.WriteLine("Honk honk");
    }
}

class Program
{
    static void Main()
    {
        Horn genericHorn = new Horn();
        genericHorn.Honk();

        CarHorn carHorn = new CarHorn();
        carHorn.Honk();

        TruckHorn truckHorn = new TruckHorn();
        truckHorn.Honk();
    }
}
