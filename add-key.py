import pty
import os
import time
import sys

passphrase = sys.argv[1]

pid, fd = pty.fork()

if pid == 0:
    os.execlp('ssh-add', 'ssh-add', '/home/marijua/.ssh/id_ed25519')
else:
    time.sleep(0.5)
    os.write(fd, (passphrase + '\n').encode('utf-8'))
    output = os.read(fd, 2048)
    time.sleep(1)
    try:
        output += os.read(fd, 2048)
    except:
        pass
    print(output.decode('utf-8', errors='ignore'))
