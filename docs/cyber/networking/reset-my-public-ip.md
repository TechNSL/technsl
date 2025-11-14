# Reset my Public IP Address


### Step-1 Release IP Address
```cmd
ipconfig /release
```
### Step-2 Renew IP Address
```cmd showLineNumbers
ipconfig /renew
```

### Step-3 Flush DNS records
```ps showLineNumbers
ipconfig /flushdns
```


### Summary

- Open Command Prompt  in Admin mode
- Type ```ipconfig /flushdns``` and press Enter.
- Type ```ipconfig /registerdns``` and press Enter.
- Type ```ipconfig /release``` and press Enter.
- Type ```ipconfig /renew``` and press Enter.
- Type ```netsh winsock reset``` and press Enter.
- Restart the computer.