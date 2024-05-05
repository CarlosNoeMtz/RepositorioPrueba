IO.puts("Bienvenido a la calculadora")

IO.puts("Ingrese el primer número:")
num1 = String.trim(IO.gets(""))

IO.puts("Ingrese el segundo número:")
num2 = String.trim(IO.gets(""))

IO.puts("Seleccione la operación:")
IO.puts("1. Suma")
IO.puts("2. Resta")
IO.puts("3. Multiplicación")
IO.puts("4. División")
accion = String.trim(IO.gets(""))

numero1_entero = String.to_integer(num1)
numero2_entero = String.to_integer(num2)
acc = String.to_integer(accion)

  if acc == 1 do
    IO.puts("El resultado de #{numero1_entero} + #{numero2_entero} es: ")
    IO.inspect(numero1_entero + numero2_entero)
  else
    if acc == 2 do
      IO.puts("El resultado de #{numero1_entero} - #{numero2_entero} es: ")
    IO.inspect(numero1_entero - numero2_entero)
    else
      if acc == 3 do
        IO.puts("El resultado de #{numero1_entero} * #{numero2_entero} es: ")
    IO.inspect(numero1_entero * numero2_entero)
      else
        if acc == 4 do
          IO.puts("El resultado de #{numero1_entero} / #{numero2_entero} es: ")
    IO.inspect(numero1_entero / numero2_entero)
        else
          IO.puts("Operacion No Valida, Intentelo de Nuevo")
        end
      end
    end
  end
