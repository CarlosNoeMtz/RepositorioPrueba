IO.puts("Bienvenido al Contador de Palabras")

defmodule ContPalabras do
  def cont_palabras(string) do

    palabras = String.split(String.trim(string), ~r/\s+/)

    num_palabras = Enum.count(palabras)

    IO.puts("Cantidad de palabras: #{num_palabras}")
  end
end

IO.puts("Ingresa texto:")
texto = IO.gets("")
ContPalabras.cont_palabras(texto)
