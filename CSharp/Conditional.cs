using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conditional
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("What is your age? ");
            string ageAsString = Console.ReadLine();
            int age = int.Parse(ageAsString);

            if (age > 21)
            {
                Console.WriteLine("You ar an adult");
            }
        }
    }
}
