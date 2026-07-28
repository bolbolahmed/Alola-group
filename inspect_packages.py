with open('src/components/Packages.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line_no, line in enumerate(lines, 1):
    if line_no >= 370 and line_no <= 570:
        if 'id:' in line or 'title' in line or 'gallery' in line or 'image' in line:
            print(f"Line {line_no}: {line.strip()}")
