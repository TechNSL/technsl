---
slug: npm-policy-error-in-powershell
title: Resolving npm Execution Policy Error in PowerShell
authors: [samkoti]
tags: [nodejs, npm, powershell]
---

# Resolving npm Execution Policy Error in PowerShell

<!-- truncate -->
npm Execution Policy Error in PowerShell 


Actor error:

```
PS C:\Git> npm init docusaurus@latest my-website classic
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ npm init docusaurus@latest my-website classic
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess

```