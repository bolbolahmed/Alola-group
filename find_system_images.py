import os

count = 0
for root, dirs, files in os.walk('/'):
    # skip system dirs to keep it fast
    if any(p in root for p in ['/proc', '/sys', '/dev', '/var/lib/docker', 'node_modules', '.git']):
        continue
    for file in files:
        if file.lower().endswith(('.jpg', '.png', '.jpeg', '.webp')):
            print(os.path.join(root, file))
            count += 1
            if count > 100:
                break
    if count > 100:
        break
