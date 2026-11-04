# SPPU LP2 Cloud Computing Practical
## VM-to-VM File Transfer Using SCP in Oracle VirtualBox

### Aim
To create two Ubuntu virtual machines using Oracle VirtualBox and transfer a text file from VM1 to VM2 using the SCP (Secure Copy Protocol) command.

### Requirements
- Oracle VM VirtualBox
- Ubuntu 18.04 virtual machine image (.vdi)
- Two virtual machines (VM1 and VM2)
- Network connectivity between both VMs
- SCP and SSH
- Username: `vagrant`
- Password: `vagrant`

### Practical Details

| Machine | IP Address | Purpose |
|---|---|---|
| VM1 | 10.0.2.3 | Sender |
| VM2 | 10.0.2.4 | Receiver |

**Note:** These are the IP addresses shown in the video. They may be different on the college computer.

---

# PART 1: CREATE THE FIRST VIRTUAL MACHINE (VM1)

## Step 1: Open Oracle VirtualBox
1. Open Oracle VM VirtualBox Manager.
2. Click the **New** button.
3. The Create Virtual Machine window will open.

## Step 2: Enter VM Details
1. Enter the virtual machine name as `VM1`.
2. Select Type: `Linux`.
3. Select Version: `Ubuntu (64-bit)`.
4. Configure the RAM and processor settings according to the college computer.

## Step 3: Select the Virtual Hard Disk
1. Open the Hard Disk section.
2. Select **Use an Existing Virtual Hard Disk File**.
3. Click the folder icon.
4. The Virtual Hard Disk Selector will open.
5. Click **Add**.
6. Browse to the Ubuntu `.vdi` file provided on the computer.
7. Select the file.
8. Click **Open**.
9. Click **Choose** if prompted.
10. Click **Finish**.

The first virtual machine is now created.

## Step 4: Configure the Network
1. Select VM1 in VirtualBox.
2. Click **Settings**.
3. Select **Network**.
4. Click **Adapter 1**.
5. Enable the network adapter.
6. Under **Attached to**, select `NAT Network`.
7. Select the NAT Network configured in the lab.
8. Click **OK**.

---

# PART 2: CREATE THE SECOND VIRTUAL MACHINE (VM2)

## Step 5: Create VM2
1. Click **New** in Oracle VirtualBox.
2. Enter the VM name as `VM2`.
3. Select Type: `Linux`.
4. Select Version: `Ubuntu (64-bit)`.
5. Configure the RAM and processor settings.
6. Open the Hard Disk section.
7. Select **Use an Existing Virtual Hard Disk File**.
8. Click the folder icon.
9. Browse to the second Ubuntu `.vdi` file provided for VM2.
10. Select the file.
11. Click **Open**.
12. Click **Finish**.

**Important:** VM1 and VM2 must have separate writable virtual disks. Do not attach the same writable VDI to both machines simultaneously.

## Step 6: Configure VM2 Network
1. Select VM2.
2. Click **Settings**.
3. Open **Network**.
4. Select **Adapter 1**.
5. Enable the network adapter.
6. Under **Attached to**, select `NAT Network`.
7. Select the same NAT Network as VM1.
8. Click **OK**.

Both virtual machines are now configured.

---

# PART 3: START VM1 AND CREATE A TEXT FILE

## Step 7: Start VM1
1. Select VM1.
2. Click the green **Start** button.
3. Wait for Ubuntu to boot.
4. The Ubuntu login screen will appear.

## Step 8: Log In to VM1

Enter the username:

```text
vagrant
```

Press Enter.

Enter the password:

```text
vagrant
```

Press Enter.

After successful login, the terminal will show a prompt similar to:

```bash
vagrant@vagrant:~$
```

**Note:** The password will not be visible while typing.

## Step 9: Create a Text File

Enter the following command:

```bash
touch x.txt
```

Press Enter.

This creates an empty file named `x.txt` in VM1.

## Step 10: Open the Text File

Enter:

```bash
nano x.txt
```

Press Enter.

The Nano text editor will open.

## Step 11: Write Text Inside the File

Type:

```text
hello world
```

## Step 12: Save the File

1. Press `Ctrl + O` to save.
2. Press `Enter` to confirm.
3. Press `Ctrl + X` to exit Nano.

The terminal will appear again.

## Step 13: Check VM1 IP Address

Enter:

```bash
ifconfig
```

Press Enter.

Look for the `inet` address under the active network interface.

In the video, VM1 shows:

```text
inet 10.0.2.3
```

Therefore:

```text
VM1 IP Address = 10.0.2.3
```

---

# PART 4: START VM2 AND CHECK ITS IP ADDRESS

## Step 14: Start VM2
1. Return to Oracle VirtualBox Manager.
2. Select VM2.
3. Click **Start**.
4. Wait for Ubuntu to boot.

## Step 15: Log In to VM2

Username:

```text
vagrant
```

Password:

```text
vagrant
```

Press Enter after entering each.

The terminal will open.

## Step 16: Find VM2 IP Address

Enter:

```bash
ifconfig
```

Press Enter.

Look for the `inet` address.

In the video, VM2 shows:

```text
inet 10.0.2.4
```

Therefore:

```text
VM2 IP Address = 10.0.2.4
```

Now we know:

```text
VM1 = 10.0.2.3
VM2 = 10.0.2.4
```

These IP addresses are used for communication between the two VMs.

---

# PART 5: TRANSFER FILE FROM VM1 TO VM2 USING SCP

## Step 17: Return to VM1
1. Switch back to the VM1 terminal.
2. Check whether the text file exists.

Enter:

```bash
ls
```

Press Enter.

Expected output:

```text
x.txt
```

This confirms that `x.txt` exists in VM1.

## Step 18: Enter the SCP Command

Type the following command in VM1:

```bash
scp x.txt vagrant@10.0.2.4:/home/vagrant
```

Press Enter.

**Important:** Replace `10.0.2.4` with the actual IP address of VM2 if it is different.

### Explanation of the SCP Command

- `scp` = Secure Copy command
- `x.txt` = File to transfer
- `vagrant` = Username of VM2
- `10.0.2.4` = IP address of VM2
- `:` = Separates the remote machine address and destination path
- `/home/vagrant` = Destination directory in VM2

This command copies `x.txt` from VM1 to the home directory of the `vagrant` user on VM2.

## Step 19: Accept the SSH Connection

When connecting for the first time, the terminal may show:

```text
The authenticity of host '10.0.2.4' can't be established.

Are you sure you want to continue connecting (yes/no)?
```

After confirming that the destination is your VM2, type:

```text
yes
```

Press Enter.

## Step 20: Enter VM2 Password

The terminal will ask:

```text
vagrant@10.0.2.4's password:
```

Enter:

```text
vagrant
```

Press Enter.

The file transfer will begin.

After successful transfer, the terminal should show output similar to:

```text
x.txt       100%       12
```

The exact byte count and transfer speed may vary.

This means the file has been successfully transferred from VM1 to VM2.

---

# PART 6: VERIFY FILE TRANSFER IN VM2

## Step 21: Switch to VM2

Return to the VM2 terminal.

## Step 22: Check the Transferred File

Enter:

```bash
ls
```

Press Enter.

Expected output:

```text
x.txt
```

This confirms that the file has been received by VM2.

To additionally verify the file contents, you can use:

```bash
cat x.txt
```

Expected output:

```text
hello world
```

**Note:** The final verification shown in the video is `ls`. The `cat` command is an optional additional check.

---

# FINAL COMMANDS TO REMEMBER

## Commands in VM1 (Sender)

```bash
touch x.txt
nano x.txt
ifconfig
ls
scp x.txt vagrant@10.0.2.4:/home/vagrant
```

Inside Nano, type:

```text
hello world
```

Save using:

```text
Ctrl + O
Enter
Ctrl + X
```

## Commands in VM2 (Receiver)

Before transfer:

```bash
ifconfig
```

After transfer:

```bash
ls
```

Optional content verification:

```bash
cat x.txt
```

---

# COMMON ERRORS AND SOLUTIONS

## Error 1: Connection Refused

Possible reason: The SSH server is not running on VM2.

Check the SSH service on VM2:

```bash
sudo systemctl status ssh
```

If SSH is installed but stopped:

```bash
sudo systemctl start ssh
```

If the SSH server is not installed, the lab may require installing it:

```bash
sudo apt update
sudo apt install openssh-server
```

This requires working package repositories and network access.

## Error 2: Connection Timed Out

Possible reasons:
- VM2 is not running.
- Incorrect IP address.
- VMs are not connected to the same accessible network.
- A firewall is blocking SSH.

Solution:
1. Check that VM2 is running.
2. Use `ifconfig` to verify the IP address.
3. Check the network settings in VirtualBox.

## Error 3: Permission Denied

Possible reason: Incorrect username, password, or destination permissions.

Check:
- Username: `vagrant`
- Password: `vagrant`
- Correct destination path: `/home/vagrant`

Use your college-provided credentials if they differ.

## Error 4: No Such File or Directory

Possible reason: The file does not exist in VM1's current directory.

Check:

```bash
ls
```

If necessary, create it again:

```bash
touch x.txt
```

## Error 5: ifconfig Command Not Found

Use:

```bash
ip -4 addr
```

This will also display the machine's IPv4 address.

---

# VIVA QUESTIONS AND ANSWERS

## Q1. What is a Virtual Machine?

A virtual machine is a software-based computer that runs an operating system inside a physical computer.

## Q2. What is Oracle VirtualBox?

Oracle VirtualBox is virtualization software that allows multiple operating systems to run on a single physical computer.

## Q3. What is SCP?

SCP stands for Secure Copy Protocol. It is used to securely transfer files between computers through an SSH connection.

## Q4. What is SSH?

SSH stands for Secure Shell. It provides encrypted communication between two machines over a network.

## Q5. What is the use of the ifconfig command?

The `ifconfig` command displays network interface information, including the IP address of the virtual machine.

## Q6. What is the use of the touch command?

The `touch` command creates an empty file if the file does not already exist.

## Q7. What is the use of the nano command?

Nano is a terminal-based text editor used to create and edit text files.

## Q8. What is the use of the ls command?

The `ls` command displays files and directories in the current location.

## Q9. Why do we need an IP address?

An IP address identifies a machine on the network and allows other machines to communicate with it.

## Q10. What is the SCP command used in this practical?

```bash
scp x.txt vagrant@10.0.2.4:/home/vagrant
```

This command transfers `x.txt` from VM1 to VM2.

## Q11. Which VM sends the file?

VM1 is the sender.

## Q12. Which VM receives the file?

VM2 is the receiver.

## Q13. How do we confirm successful file transfer?

Run the `ls` command in VM2 and verify that `x.txt` appears.

## Q14. Which port does SCP normally use?

SCP normally uses SSH over TCP port 22.

## Q15. Why are two virtual machines used?

Two virtual machines are used to demonstrate file transfer between separate computer systems over a virtual network.

---

# RESULT

Two Ubuntu virtual machines were created and configured using Oracle VirtualBox.

A text file named `x.txt` containing `hello world` was created in VM1.

The file was successfully transferred from VM1 to VM2 using the SCP command.

The transferred file was verified using the `ls` command in VM2.

**Hence, VM-to-VM file transfer using SCP was successfully demonstrated.**

---

# IMPORTANT NOTES FOR THE PRACTICAL EXAM

1. Use the Ubuntu `.vdi` files provided on the college computer.
2. Ensure both VMs are connected to the same accessible network.
3. Start both VMs before transferring the file.
4. Check the actual IP addresses using `ifconfig`.
5. Create `x.txt` in VM1.
6. Use the IP address of VM2 in the SCP command.
7. Enter VM2's password when prompted.
8. Verify the transferred file using `ls` in VM2.

**Most Important Command:**

```bash
scp x.txt vagrant@10.0.2.4:/home/vagrant
```

**Practical Completed Successfully.**


# SPPU LP2 CC Practical: VM-to-VM File Transfer

## Part 1: Create VM1

1. Open Oracle VirtualBox.
2. Click **New**.
3. Enter Name: `VM1`.
4. Select OS Type: `Linux`.
5. Select Distribution: `Ubuntu`.
6. Go to the Hard Disk section.
7. Select **Use an Existing Virtual Hard Disk File**.
8. Click the folder icon.
9. Click **Add** and browse to the provided Ubuntu `.vmdk` file.
10. Select the disk and click **Open**.
11. Click **Choose** and then **Finish**.

## Part 2: Create NAT Network

1. On the left side of VirtualBox, open **Tools → Network Manager**.
2. Select **NAT Networks**.
3. Click **Create**.
4. Give the network a name, for example `vmm1`.
5. Make sure DHCP is enabled if the lab uses automatic IP addresses.
6. Save the settings.

## Part 3: Connect VM1 to the Network

1. Select VM1.
2. Click **Settings**.
3. Go to **Network**.
4. Select **Adapter 1**.
5. Enable the network adapter.
6. Under **Attached to**, select `NAT Network`.
7. Under **Name**, select `vmm1`.
8. Click **OK**.

## Part 4: Create VM2

1. Click **New**.
2. Enter Name: `VM2`.
3. Select OS Type: `Linux`.
4. Select Distribution: `Ubuntu`.
5. Select **Use an Existing Virtual Hard Disk File**.
6. Choose the second Ubuntu `.vmdk` disk provided for VM2.
7. Click **Finish**.
8. Select VM2 and click **Settings**.
9. Go to **Network → Adapter 1**.
10. Select `NAT Network`.
11. Select the same network name: `vmm1`.
12. Click **OK**.

Note: VM1 and VM2 must have separate writable virtual disks.

## Part 5: Start VM1 and Create a File

1. Select VM1.
2. Click **Start**.
3. Wait for Ubuntu to boot.
4. Log in using the lab credentials.

For the Vagrant Ubuntu image shown in the video:

Username: `vagrant`

Password: `vagrant`

5. Create a text file:

```bash
touch x.txt
```

6. Open the file:

```bash
nano x.txt
```

7. Type inside the file:

```text
Hello hi
```

8. Save the file:

- Press `Ctrl + X`
- Press `Y`
- Press `Enter`

9. Check the IP address:

```bash
ifconfig
```

VM1 IP in the video: `10.0.2.3`

## Part 6: Start VM2

1. Select VM2.
2. Click **Start**.
3. Log in using:

Username: `vagrant`

Password: `vagrant`

4. Check VM2 IP:

```bash
ifconfig
```

VM2 IP in the video: `10.0.2.4`

Use the actual IP shown in your lab if different.

## Part 7: Transfer File from VM1 to VM2

1. Switch back to VM1.
2. Enter the following command:

```bash
scp x.txt vagrant@10.0.2.4:/home/vagrant
```

3. Press Enter.
4. If the terminal asks whether to trust the VM2 connection, verify the destination and type:

```text
yes
```

5. Press Enter.
6. Enter VM2's password:

```text
vagrant
```

7. Press Enter.
8. Wait for the file transfer to complete.

Expected result: `100%` transfer completed.

## Part 8: Verify the File in VM2

1. Switch to VM2.
2. Type:

```bash
ls
```

3. You should see:

```text
x.txt
```

4. Check the file contents:

```bash
cat x.txt
```

5. Expected output:

```text
Hello hi
```

## Final Commands to Remember

### VM1

```bash
touch x.txt
nano x.txt
ifconfig
scp x.txt vagrant@10.0.2.4:/home/vagrant
```

### VM2

```bash
ifconfig
ls
cat x.txt
```

## Result

Successfully transferred `x.txt` from VM1 to VM2 using SCP in Oracle VirtualBox.