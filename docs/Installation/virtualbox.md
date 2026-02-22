# VirtualBox installation

> VirtualBox is not recommend for Pandora, you can use it but it will work better on VmWare

## 1. Install VirtualBox

Install VirtualBox from the officia site:

```
https://www.oracle.com/es/virtualization/technologies/vm/downloads/virtualbox-downloads.html
```

## 2. Create a new machine

Go to the contextual menu Machines > New

## 3. Configure the correct settings

> Due to the lack of support for WinPE in VirtualBox by default this step is mandatory

Set the configuration of the machine with the next options marked

1. Select Windows 11 x64 in type
2. Do not apply the auto-user creation
3. Enable EFI boot
4. Select the ISO file

## 4. Run the machine

After that just run the machine as normal and it will auto-boot to the ISO

## 5. Let PandoraBox do its magic

Just wait for the PandoraBox installers, to complete the installation for you

![pandorafirstsetp](docs/img/pandoraWinPe.png)

## 6. Reboot the machine

With VirtualBox, due to the legacy boot, it will break during the install, afeter pandora installating spinner ends a black screen will be shown.

It's mandatory to apply a reboot on the machine here, after that the process will continue as expected.