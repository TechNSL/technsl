# .NET CLI Commands

A quick reference for common .NET CLI commands. Each command includes a brief explanation and a copy-ready example.

---

## .NET Version and more

```sh
dotnet --info
```

```sh
dotnet --version
```

```sh
dotnet --list-runtimes
```

```sh
 dotnet --list-sdks
```
---

## Help Command

```sh
dotnet -h
```

```sh
dotnet --help
```

---

## Display Help for a Command

```sh
dotnet <command> --help
```
*Shows help and usage information for a specific command (replace `<command>` as needed).*

---

## List Available Templates

```sh
dotnet new list
```
*Lists all available project and item templates.*

---

## Create a New Console Application

```sh
dotnet new console -n MyApp
```
*Creates a new console application in a folder named `MyApp`.*

---

## Build the Project

```sh
dotnet build
```
*Builds the project in the current directory.*

---

## Run the Application

```sh
dotnet run
```
*Runs the application from the current directory.*

---

## Restore Dependencies

```sh
dotnet restore
```
*Restores NuGet packages for the project.*

---

## Add a NuGet Package

```sh
dotnet add package Newtonsoft.Json
```
*Adds the `Newtonsoft.Json` package to the project.*

---

## List Installed Packages

```sh
dotnet list package
```
*Lists all NuGet packages installed in the project.*

---

## Publish the Application

```sh
dotnet publish -c Release -o ./publish
```
*Publishes the application to the `./publish` folder in Release configuration.*

---

## Run Unit Tests

```sh
dotnet test
```
*Runs all unit tests in the solution or project.*

---

## Create a New Solution

```sh
dotnet new sln -n MySolution
```
*Creates a new solution file named `MySolution.sln`.*

---

## Add a Project to a Solution

```sh
dotnet sln add MyApp/MyApp.csproj
```
*Adds the project to the solution file.*

---

## Remove a Project from a Solution

```sh
dotnet sln remove MyApp/MyApp.csproj
```
*Removes the project from the solution file.*

---
