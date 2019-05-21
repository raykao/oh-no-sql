
# Sample Applications

There are two sample applications you can choose to work with during the OpenHack. One is ASP.NET/C# based and the other is based on Java/Spring framework. 


## Open Hack - NoSQL Starter App for ASP.NET/C#

**Source Code Location** 

The full sample application source code is available here for download and will be needed to complete the challenges. 

```
https://github.com/opsgility/oh-no-sql/tree/master/sample-app
```

To get the app to compile you will need to restore the Nuget packages. You can accomplish this by right clicking on the ContosoJobs project and clicking **Manage Nuget Packages**. From there, click the **Restore** button at the top right of the screen.

**Pre-Requisites**

- Visual Studio 2017+ 
    - Community/Free download is available here: https://visualstudio.microsoft.com/downloads/
- Git Client
    - Download available: https://git-scm.com/downloads


**Virtual Machine with Sample App Running and Database for Migration (ASP.NET)**

The following will deploy a virtual machine to your Azure subscription that you can use as the start of the challenge and to see how the application works prior to modernization. 


<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fopsgility%2Foh-no-sql%2Fmaster%2Fno-sql-dot-net.json" rel="nofollow">
    <img src="https://camo.githubusercontent.com/9285dd3998997a0835869065bb15e5d500475034/687474703a2f2f617a7572656465706c6f792e6e65742f6465706c6f79627574746f6e2e706e67" data-canonical-src="http://azuredeploy.net/deploybutton.png" style="max-width:100%;">
</a>

Credentials
- Login: Demouser
- Password: demo@pass123


**Deploying to Azure Web Apps** 

If you choose Azure Web Apps as your hosted solution. 

- Create a new Azure Web App in the Azure Portal
- Open the ContosoJobs.sln, update the web.config to point to the new SQL Database connection string. 
- Right click on the project name and click Deploy. If prompted, login with your Azure credentials.


# Open Hack - NoSQL Starter App for Java

**Source Code Location** 

The full sample application source code is available here for download and will be needed to complete the challenges. 

```
https://github.com/opsgility/oh-no-sql/tree/master/sample-app-java
```

**Pre-Requisites**

- Azure CLI 

    ```
    https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest
    ```

- Java JDK 1.8
    - Install tips:
        - Create a new environement variable called **JAVA_HOME** that points to the install path (C:\Program Files\Java\jdk1.8.0_211) 

    ```
    https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
    ```

- Apache Maven 3.6.1
    - Install tips:
        - Extract to a folder (C:\\apache-maven-3.6.1)
        - Create a new environment variable **M2_HOME** that points to the install folder.
        - Add the folder to the **PATH** environment variable. 

    ```
    https://maven.apache.org/download.cgi
    ```

- Visual Studio Code 
    - Extensions
        - Maven for Java 
        - Language support for Java
        - Debugger for Java
        - Java Extension Pack

    ```
    https://code.visualstudio.com/download 
    ```

- Git Client

    ```
    https://git-scm.com/downloads
    ```


**Virtual Machine with Sample App Running and Database for Migration (JAVA)**

The following will deploy a virtual machine to your Azure subscription that you can use as the start of the challenge and to see how the application works prior to modernization. 

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fopsgility%2Foh-no-sql%2Fmaster%2Fno-sql-java.json" rel="nofollow">
    <img src="https://camo.githubusercontent.com/9285dd3998997a0835869065bb15e5d500475034/687474703a2f2f617a7572656465706c6f792e6e65742f6465706c6f79627574746f6e2e706e67" data-canonical-src="http://azuredeploy.net/deploybutton.png" style="max-width:100%;">
</a>

Credentials
- Login: Demouser
- Password: demo@pass123

> Note: This deployment takes approximately 30 minutes.

**Deploying to Azure Web Apps** 

If you choose Azure Web Apps as your hosted solution. 

Create new Azure Web App
- Linux
- Java 8 -> Tomcat 8.5

Open the **sample-app-java** in VS Code.

Update pom.xml with the following:

```xml
<resourceGroup>[Youre Resource Group]</resourceGroup>
<appName>[Your Web App Name]</appName>
<region>[Your Azure Region]</region>
```

Update the sample-app-java/src/main/resources/application.properties to point to your new database connection string.

Launch Terminal in VS Code

```
mvn package 
mvn azure-webapp:deploy
```

## Local Docker SQL Server:

A local mssql folder is required at the root of the project.  Git will ignore this folder.

```
docker run -it --rm  -e 'ACCEPT_EULA=Y' -v $PWD/mssql:/var/opt/mssql -e 'SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 mcr.microsoft.com/mssql/server:2017-CU8-ubuntu
```