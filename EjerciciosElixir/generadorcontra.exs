defmodule GeneradorContrasena do
  @caracteres "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/"

  def generar_contraseña(longitud) when is_integer(longitud) and longitud > 0 do
    caracteres_lista = String.codepoints(@caracteres)
    contraseña = Enum.reduce(0..longitud-1, "", fn _, acc -> acc <> obtener_caracter_aleatorio(caracteres_lista) end)
    contraseña
  end

  defp obtener_caracter_aleatorio(caracteres_lista) do
    caracter = Enum.random(caracteres_lista)
    caracter
  end
end

defmodule Main do
  def iniciar do
    IO.puts("Ingrese la longitud deseada para la contraseña:")
    longitud = String.trim(IO.gets("")) |> String.to_integer()

    case GeneradorContrasena.generar_contraseña(longitud) do
      contraseña when is_binary(contraseña) ->
        IO.puts("La contraseña generada es: #{contraseña}")
      _ ->
        IO.puts("Error al generar la contraseña.")
    end
  end
end

Main.iniciar()
