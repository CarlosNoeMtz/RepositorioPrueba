IO.puts("Bienvenido al Convertidor de Unidades")

defmodule ConversorUnidades do
  def metros_a_yardas(metros) do
    metros * 1.09361
  end

  def metros_a_pies(metros) do
    metros * 3.28084
  end

  def metros_a_millas(metros) do
    metros / 1609.34
  end

  def kilometros_a_yardas(kilometros) do
    kilometros * 1093.61
  end

  def kilometros_a_pies(kilometros) do
    kilometros * 3280.84
  end

  def kilometros_a_millas(kilometros) do
    kilometros * 0.621371
  end

  def celsius_a_fahrenheit(celsius) do
    celsius * 9.0 / 5.0 + 32.0
  end

  def kilogramos_a_libras(kilogramos) do
    kilogramos * 2.20462
  end

  def kilogramos_a_onzas(kilogramos) do
    kilogramos * 35.274
  end
end

 # Función para obtener la conversión de unidades
defmodule Main do
  import IO
  def obtener_conversion() do

    IO.puts("- Longitud: ")
    IO.puts("Metros, Kilometros")
    IO.puts("- Temperatura: ")
    IO.puts("Celsius")
    IO.puts("- Masa: ")
    IO.puts("Kilogramos")
    IO.puts("Ingrese la unidad de entrada: ")
    unidad_entrada = String.trim(read(:stdio, :line)) |> String.downcase()

    IO.puts("Ingrese la cantidad a convertir: ")
      cantidad = String.trim(IO.gets("")) |> String.to_integer()

    IO.puts("- Longitud: ")
    IO.puts("Yardas, Pies, Millas")
    IO.puts("- Temperatura: ")
    IO.puts("Fahrenheit")
    IO.puts("- Masa: ")
    IO.puts("Libras, Onzas")
    IO.puts("Ingrese la unidad de salida: ")
    unidad_salida = String.trim(read(:stdio, :line)) |> String.downcase()


    case {unidad_entrada, unidad_salida} do
      {"metros", "yardas"} -> ConversorUnidades.metros_a_yardas(cantidad)
      {"metros", "millas"} -> ConversorUnidades.metros_a_millas(cantidad)
      {"kilometros", "yardas"} -> ConversorUnidades.kilometros_a_yardas(cantidad)
      {"kilometros", "pies"} -> ConversorUnidades.kilometros_a_pies(cantidad)
      {"metros", "pies"} -> ConversorUnidades.metros_a_pies(cantidad)
      {"kilometros", "millas"} -> ConversorUnidades.kilometros_a_millas(cantidad)
      {"celsius", "fahrenheit"} -> ConversorUnidades.celsius_a_fahrenheit(cantidad)
      {"kilogramos", "libras"} -> ConversorUnidades.kilogramos_a_libras(cantidad)
      {"kilogramos", "onzas"} -> ConversorUnidades.kilogramos_a_onzas(cantidad)
      _ -> "Conversión no soportada"
    end
  end


  def run do
    conversion = obtener_conversion()
    IO.puts("El resultado de la conversión es: #{conversion}")

  end
end

Main.run()
