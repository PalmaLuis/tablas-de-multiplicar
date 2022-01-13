# Notas:
Para inicializar el proyecto debemos ejecutar el siguiente comando
```
npm install
```
ejemplo de ejecucion, esto creara un archivo.txt con la tabla de multiplicar indicada
```
node app -b 5 -h 10 -l
```


Comandos que se pueden usar
```
Options:
      --help     Show help                                                  [boolean]
      --version  Show version number                                        [boolean]
  -b, --base     Es la base de la tabla de multiplicar            [number] [required]
  -l, --listar   Muestra la tabla en consola  [boolean] [required] [default: "false"]
  -h, --hasta    Es el limite de la multiplicacion                [number] [required]
```