import os

for root, dirs, files in os.walk('.'):
    for file in files:
        if file.lower().endswith(('.jpg', '.png', '.jpeg', '.webp')):
            print(os.path.join(root, file))
