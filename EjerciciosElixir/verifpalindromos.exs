IO.puts("Bienvenido a el Verificador de Palindromos")

defmodule Palindromo do

  defp limp_texto(txt) do
    String.replace(txt, ~r/[[:punct:][:space:]]/, "")
      |> String.downcase()
  end

  def es_palindromo?(txt) do
    palindromo = limp_texto(txt)
    palindromo == String.reverse(palindromo)
  end
end

IO.puts("Ingresa una palabra o frase para verificar si es un palíndromo:")
texto = IO.gets("") |> String.trim()

if Palindromo.es_palindromo?(texto) do
  IO.puts("¡Es un palíndromo!")
else
  IO.puts("No es un palíndromo.")
end
