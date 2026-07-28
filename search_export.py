with open('src/components/Packages.tsx', 'r', encoding='utf-8') as f:
    for line_no, line in enumerate(f, 1):
        if 'export' in line:
            print(f"Line {line_no}: {line.strip()}")
