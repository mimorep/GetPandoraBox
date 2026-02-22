# Post-Install

## Re-running post-set-up

If you want to re-apply the post-set install, beacouse  of some errors were triggered, you can re-run it with the next command

```Powershell
cd "C:\Pandora\Post-Install\Pandora"

pandoraSetUp.ps1 -DoSetUp
```

## Running offline set-up

If you want to apply the online setup (not mandatory at all), you can do it running the next command from a powershell window:

```Powershell
cd "C:\Pandora\Post-Install\Pandora"

pandoraSetUp.ps1 -DoInternetSetUp
```

## Manual clean-up

Some files can be deleted in order to free PandoraBox's disk, but is not recommended. If you really want to free some space, run the next commands on the terminal (take notice that the post-setup script may fail if this files are not present):


Delete the zip with the forensics tools (the tools will be accessible from C:\Forensics)

```Powershell
rm C:\Pandora\Tools\Forensics.zip
```

Delete the zip with the forensics tools (the tools will be accessible from C:\Reversing)
```Powershell
rm C:\Pandora\Tools\Reversing.zip
```

Delete all installers
```Powershell
rm C:\Pandora\Installers\*
```

Delete Post-Install kiosk application
```Powershell
rm "C:\Pandora\Post-Install\Pandora SetUp.exe"
```